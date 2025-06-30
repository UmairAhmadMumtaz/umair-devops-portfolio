import React from "react";
import GitHubCalendar from "react-github-calendar";
import "./GithubCalendar.scss";

const GithubCalendar = ({isDark}) => {
  const purpleTheme = {
    level0: "#2c2c3d",
    level1: "#7737c4",
    level2: "#6a1bb9",
    level3: "#5a1aa3",
    level4: "#55198b"
  };

  return (
    <div
      className={`github-activity-container ${
        isDark ? "dark-github" : "light-github"
      }`}
    >
      <h2
        className="github-activity-heading"
        aria-label="GitHub Activity Section"
      >
        GitHub Activity
      </h2>
      <GitHubCalendar
        username="your-github-username"
        theme={purpleTheme}
        blockSize={15}
        blockMargin={5}
        fontSize={16}
      />
    </div>
  );
};

export default GithubCalendar;
