const defaultStyles = "bg-cyan text-white hover:bg-CTA-hover-bg";
const CallToActionBtn = ({ styles, handleClick, label, isSubmit }) => {
  return (
    <button
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
