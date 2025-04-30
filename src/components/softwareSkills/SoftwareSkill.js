import React, {useState} from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skill, i) => {
            const isHovered = i === hoveredIndex;

            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skill.skillName}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <i
                  className={skill.fontAwesomeClassname}
                  style={{
                    color: isHovered ? skill.styleColor : undefined,
                    transition: "color 0.3s"
                  }}
                ></i>
                <p>{skill.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
