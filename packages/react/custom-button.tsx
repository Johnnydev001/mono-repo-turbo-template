export const CustomButton = (
  title: string = "",
  text: string = "",
  onClick: () => void
) => {
  const style = {
    border: "none",
    padding: " 0.5rem 2rem",
    color: "#fff",
    fontSize: "1.5rem",
    borderRadius: "1rem",
    backgroundColor: "rgb(105, 151, 250)",
  };

  return (
    <button title={title} onClick={onClick} {...style}>
      {text}
    </button>
  );
};
