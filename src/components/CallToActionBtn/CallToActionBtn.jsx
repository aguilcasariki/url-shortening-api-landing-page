const defaultStyles = "bg-cyan text-white hover:opacity-50";
const CallToActionBtn = ({ styles, handleClick, label }) => {
  return <button className={`${defaultStyles} ${styles}`}>{label}</button>;
};

export default CallToActionBtn;
