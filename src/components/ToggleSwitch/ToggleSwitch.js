import React, { useState, useContext } from "react";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";
import "./ToggleSwitch.scss";

const ToggleSwitch = ({ onToggle }) => {
  const { isDark, changeTheme } = useContext(StyleContext);
  const [isChecked, setChecked] = useState(isDark);

  const handleChange = () => {
    changeTheme();
    setChecked(!isChecked);

    if (onToggle) {
      onToggle(); 
    }
  };

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
      />
      <span className="slider round">
        <span className="emoji">{isChecked ? emoji("🌜") : emoji("☀️")}</span>
      </span>
    </label>
  );
};

export default ToggleSwitch;
