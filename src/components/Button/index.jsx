import "./styles.css";

function Button({ func, title, className, children }) {
  return (
    <button on className={className} onClick={func}>
      {children}
    </button>
  );
}

export default Button;
