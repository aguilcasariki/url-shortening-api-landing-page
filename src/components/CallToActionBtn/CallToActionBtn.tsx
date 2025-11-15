interface CallToActionBtnProps {
  styles?: string;
  label: string;
  isSubmit?: boolean;
  clickAction?: () => void;
  isDisabled?: boolean;
}

const defaultStyles =
  "bg-cyan text-white hover:bg-CTA-hover-bg  shadow-lg cursor-pointer";

const CallToActionBtn = ({
  styles = "",
  label,
  isSubmit = false,
  clickAction,
  isDisabled = false,
}: CallToActionBtnProps): React.ReactElement => {
  return (
    <button
      disabled={isDisabled}
      onClick={clickAction}
      type={isSubmit ? "submit" : "button"}
      className={`${defaultStyles} ${styles}`}
    >
      {label}
    </button>
  );
};

export default CallToActionBtn;
