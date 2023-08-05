const defaultStyles =
  "bg-cyan text-white hover:bg-CTA-hover-bg focus:bg-CTA-hover-bg shadow-lg";
const CallToActionBtn = ({
  styles,
  handleClick,
  label,
  isSubmit,
  clickAction,
}) => {
  return (
    <button
      onClick={clickAction}
      type={isSubmit ? "submit" : undefined}
      className={`${defaultStyles} ${styles}`}
    >
      {label}
    </button>
  );
};

CallToActionBtn.defaultProps = {
  isSubmit: false,
};

export default CallToActionBtn;
