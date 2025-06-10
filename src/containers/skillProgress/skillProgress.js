import React, {useRef, useEffect, useState} from "react";
import "./Progress.scss";
import {illustration, techStack} from "../../portfolio";
import {Fade} from "react-reveal";
import Build from "../../assets/lottie/build";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

function useInView(options) {
  const ref = useRef();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, options);
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return [ref, inView];
}

function SkillBar({exp}) {
  const [ref, inView] = useInView({threshold: 0.3});
  const progressStyle = {
    width: inView ? exp.progressPercentage : 0,
    opacity: inView ? 1 : 0
  };
  return (
    <div className="skill">
      <p>{exp.Stack}</p>
      <div className="meter" ref={ref}>
        <span style={progressStyle}></span>
      </div>
    </div>
  );
}

export default function StackProgress() {
  if (techStack.viewSkillBars) {
    return (
      <Fade bottom duration={1000} distance="20px">
        <div className="skills-container">
          <div className="skills-bar">
            <h1 className="skills-heading">Proficiency</h1>
            {techStack.experience.map((exp, i) => (
              <SkillBar exp={exp} key={i} />
            ))}
          </div>

          <div className="skills-image">
            {illustration.animated ? (
              <DisplayLottie animationData={Build} />
            ) : (
              <img
                alt="Skills"
                src={require("../../assets/images/skill.svg")}
              />
            )}
          </div>
        </div>
      </Fade>
    );
  }
  return null;
}
