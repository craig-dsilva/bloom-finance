import C from "../utils/colourSchems";

const InfoBox = ({ title, children }) => {
  return (
    <div
      style={{
        background: C.sagePale,
        borderRadius: 12,
        padding: "14px 16px",
        marginTop: 16,
      }}
    >
      <div
        style={{
          fontWeight: 700,
          fontSize: 13,
          color: C.sageDeep,
          marginBottom: 6,
          letterSpacing: "0.03em",
          textTransform: "uppercase",
        }}
      >
        {title}
      </div>
      <div style={{ fontSize: 14, color: C.ink, lineHeight: 1.55 }}>
        {children}
      </div>
    </div>
  );
};

export default InfoBox;
