import React, {useEffect, useState, useContext} from "react";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import "./Contributions.scss";

const Contributions = () => {
  const [contributions, setContributions] = useState(null);
  const [error, setError] = useState(null);
  const {isDark} = useContext(StyleContext);

  useEffect(() => {
    const getContributions = async () => {
      try {
        const response = await fetch("/contributions.json");
        if (!response.ok) {
          throw new Error("Failed to fetch contributions data.");
        }
        const data = await response.json();
        setContributions(data);
      } catch (err) {
        setError("Failed to load contributions.");
        console.error(err);
      }
    };

    getContributions();
  }, []);

  const getColorIntensity = count => {
    if (count === 0) return 0;
    if (count <= 1) return 1;
    if (count <= 3) return 2;
    if (count <= 5) return 3;
    return 4;
  };

  // Group contributions by week for the heatmap
  const getContributionCalendar = () => {
    if (!contributions) return [];

    const months = [];
    const today = new Date();
    const startDate = new Date();
    startDate.setFullYear(today.getFullYear() - 1); // Show full year of data
    startDate.setDate(today.getDate() + 1); // Include today's date from last year

    const contributionsMap = {};
    Object.entries(contributions.contributions).forEach(([date, day]) => {
      contributionsMap[date] = day.contributions;
    });

    let currentDate = new Date(startDate);
    let currentMonth = null;
    let currentWeeks = [];
    let currentWeek = [];

    // Generate array of all months in order
    const allMonths = [];
    const tempDate = new Date(startDate);
    while (allMonths.length < 12) {
      const monthName = tempDate.toLocaleString("default", {month: "short"});
      if (!allMonths.includes(monthName)) {
        allMonths.push(monthName);
      }
      tempDate.setMonth(tempDate.getMonth() + 1);
    }

    // Initialize empty month data for all months
    allMonths.forEach(month => {
      months.push({
        name: month,
        weeks: []
      });
    });

    // Fill in the actual contribution data
    while (currentDate <= today) {
      const dateStr = currentDate.toISOString().split("T")[0];
      const month = currentDate.toLocaleString("default", {month: "short"});
      const monthIndex = allMonths.indexOf(month);

      if (currentMonth !== month) {
        if (currentMonth !== null && currentWeek.length > 0) {
          currentWeeks.push([...currentWeek]);
          const prevMonthIndex = allMonths.indexOf(currentMonth);
          months[prevMonthIndex].weeks = [...currentWeeks];
        }
        currentMonth = month;
        currentWeeks = [];
        currentWeek = [];
      }

      currentWeek.push({
        date: dateStr,
        count: contributionsMap[dateStr] || 0,
        intensity: getColorIntensity(contributionsMap[dateStr] || 0)
      });

      if (currentDate.getDay() === 6) {
        currentWeeks.push([...currentWeek]);
        currentWeek = [];
      }

      currentDate.setDate(currentDate.getDate() + 1);
    }

    // Add the last week if it exists
    if (currentWeek.length > 0) {
      currentWeeks.push([...currentWeek]);
    }

    // Add the last month's weeks
    if (currentMonth !== null) {
      const lastMonthIndex = allMonths.indexOf(currentMonth);
      if (lastMonthIndex >= 0) {
        months[lastMonthIndex].weeks = [...currentWeeks];
      }
    }

    return months;
  };

  if (error) {
    return <div className="contributions-error">{error}</div>;
  }

  if (!contributions) {
    return (
      <div className="contributions-loading">Loading contributions...</div>
    );
  }

  const calendar = getContributionCalendar();

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="contributions">
        <div className="contributions-container">
          <h1 className="contributions-title">GitHub Contributions</h1>

          <div className="stat-cards-container">
            <div className={isDark ? "stat-card dark-mode" : "stat-card"}>
              <h3>Total</h3>
              <div className="stat-value">
                {contributions.totalContributions}
              </div>
              <div className="stat-label">contributions</div>
            </div>

            <div className={isDark ? "stat-card dark-mode" : "stat-card"}>
              <h3>Best Streak</h3>
              <div className="stat-value">{contributions.bestStreak}</div>
              <div className="stat-label">days</div>
            </div>

            <div className={isDark ? "stat-card dark-mode" : "stat-card"}>
              <h3>Current Streak</h3>
              <div className="stat-value">{contributions.currentStreak}</div>
              <div className="stat-label">days</div>
            </div>

            <div className={isDark ? "stat-card dark-mode" : "stat-card"}>
              <h3>Today</h3>
              <div className="stat-value">
                {contributions.todaysContributions}
              </div>
              <div className="stat-label">contributions</div>
            </div>
          </div>

          <div
            className={
              isDark
                ? "contribution-graph-container dark-mode"
                : "contribution-graph-container"
            }
          >
            <h2>Yearly Contribution Activity</h2>
            <div className="contribution-graph">
              <div className="months-labels">
                {calendar.map((month, i) => (
                  <div key={`month-${i}`} className="month-label">
                    {month.name}
                  </div>
                ))}
              </div>
              <div className="days-labels">
                <span>Mon</span>
                <span>Wed</span>
                <span>Fri</span>
              </div>
              <div className="contribution-grid">
                {calendar.map((month, monthIndex) => (
                  <div key={`month-${monthIndex}`} className="month-container">
                    {month.weeks.map((week, weekIndex) => (
                      <div
                        key={`week-${monthIndex}-${weekIndex}`}
                        className="week"
                      >
                        {week.map((day, dayIndex) => (
                          <div
                            key={`day-${monthIndex}-${weekIndex}-${dayIndex}`}
                            className={`day level-${day.intensity}`}
                            title={`${day.date}: ${day.count} contributions`}
                          ></div>
                        ))}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="contribution-legend">
              <span>Less</span>
              <div className="legend-item level-0"></div>
              <div className="legend-item level-1"></div>
              <div className="legend-item level-2"></div>
              <div className="legend-item level-3"></div>
              <div className="legend-item level-4"></div>
              <span>More</span>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Contributions;
