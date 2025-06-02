import React, {useEffect, useRef} from "react";
import "./Top.scss";

export default function Top() {
  const buttonRef = useRef(null);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (buttonRef.current) {
        buttonRef.current.classList.remove("visible");
      }

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      scrollTimeout.current = setTimeout(() => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (scrollTop > 20 && buttonRef.current) {
          buttonRef.current.classList.add("visible");
        }
      }, 1000); // 1 seconde sans scroll
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout.current);
    };
  }, []);

  function TopEvent() {
    window.scrollTo({top: 0, behavior: "smooth"});
  }

  return (
    <button onClick={TopEvent} id="topButton" ref={buttonRef} title="Go to top">
      <i className="fas fa-hand-point-up" aria-hidden="true"></i>
    </button>
  );
}
