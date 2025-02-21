import React, { useContext, useState, useRef, useEffect } from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { illustration, greeting } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
    const { isDark } = useContext(StyleContext);
    const [isExpanded, setIsExpanded] = useState(false);
    const introRef = useRef(null);
    const [introHeight, setIntroHeight] = useState(0);

    useEffect(() => {
        if (introRef.current) {
            setIntroHeight(introRef.current.scrollHeight);
        }
    }, [isExpanded]);

    if (!greeting.displayGreeting) {
        return null;
    }

    const briefParagraphs = greeting.briefIntro
        .trim()
        .split("\n")
        .map((line, index) => <p key={index}>{emoji(line.trim())}</p>);

    const fullParagraphs = greeting.detailedIntro
        .trim()
        .split("\n\n")
        .map((paragraph, index) => <p key={index}>{paragraph}</p>);

    return (
        <Fade bottom duration={1000} distance="40px">
            <div className="greet-main" id="greeting">
                {/* Display <Manish Shinde/> at the top */}
                <div className="greeting-header">
                </div>
                <div className="greeting-container">
                    <div
                        className={`greeting-text-tile ${isDark ? "dark-mode" : ""}`}
                        ref={introRef}
                    >
                        <h1 className="greeting-text">
                            {greeting.title}{" "}
                            <span className="wave-emoji">{emoji("👋")}</span>
                        </h1>
                        <div className={`intro-section ${isExpanded ? "expanded" : "collapsed"}`}>
                            {isExpanded ? fullParagraphs : briefParagraphs}
                        </div>
                        <button
                            className="view-toggle-button"
                            onClick={() => setIsExpanded(!isExpanded)}
                        >
                            {isExpanded ? "View Less" : "View More"}
                        </button>
                        {/* Wrap SocialMedia in a div for styling */}
                        <div className="social-media-tile">
                            <SocialMedia />
                        </div>
                        {/* Button container with updated class */}
                        <div className="button-greeting-div">
                            <Button text="Contact me" href="#contact" />
                            {greeting.resumeLink && (
                                <a
                                    href={greeting.resumeLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="download-link-button"
                                >
                                    <Button text="Download my resume" />
                                </a>
                            )}
                        </div>
                    </div>
                    <div
                        className={`greeting-image-tile ${isDark ? "dark-mode" : ""}`}
                        style={{ height: introHeight ? `${introHeight}px` : "auto" }}
                    >
                        {illustration.animated ? (
                            <DisplayLottie animationData={landingPerson} />
                        ) : (
                            <img
                                alt="man sitting on table"
                                src={require("../../assets/images/manOnTable.svg")}
                            />
                        )}
                    </div>
                </div>
            </div>
        </Fade>
    );
}