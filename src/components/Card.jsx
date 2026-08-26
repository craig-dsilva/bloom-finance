import C from "../utils/colourSchems";

const Card = ({ children, style }) => {
  return (
    <div
      style={{
        background: C.card,
        border: `1px solid ${C.line}`,
        borderRadius: 16,
        padding: 20,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Card;
