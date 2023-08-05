const MediaIcon = ({ iconD }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      className=" hover:fill-cyan focus:fill-cyan fill-white"
    >
      <path d={iconD} />
    </svg>
  );
};

export default MediaIcon;
