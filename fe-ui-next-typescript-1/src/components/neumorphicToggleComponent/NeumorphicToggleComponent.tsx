import { TOGGLE_LABELS } from "@/constants/constants";
import { useToggleStore } from "@/store/useToggleStore/useToggleStore";
import "./style.css";

const NeumorphicToggleComponent = () => {
  const { isOn, toggle } = useToggleStore();
  return (
    <div className="neumorphic-container">
      <label className="toggle-label">
        {isOn ? TOGGLE_LABELS.ON : TOGGLE_LABELS.OFF}
      </label>
      <div
        className={`neumorphic-toggle ${isOn ? "on" : "off"}`}
        onClick={toggle}
        role="button"
        aria-pressed={isOn}
      >
        <div className="toggle-ball" />
      </div>
    </div>
  );
};

export default NeumorphicToggleComponent;
