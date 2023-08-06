const defaultStyles =
  "bg-cyan text-white hover:bg-CTA-hover-bg focus:bg-CTA-hover-bg shadow-lg";
const CallToActionBtn = ({
  styles,
  handleClick,
  label,
  isSubmit,
  clickAction,
  isDisabled,
}) => {
  return (
    <button
      disabled={isDisabled}
      onClick={clickAction}
      type={isSubmit ? "submit" : undefined}
      className={`${defaultStyles} ${styles}`}
    >
      {label}
    </button>
  );
};

export default CallToActionBtn;
