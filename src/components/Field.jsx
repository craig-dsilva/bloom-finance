import C from "../utils/colourSchems";

const Field = ({
  label,
  hint,
  value,
  onChange,
  prefix,
  suffix,
  min = 0,
  max = 1e9,
  step = "any",
}) => {
  return (
    <label style={{ display: "block", marginBottom: 14 }}>
      <div
        style={{ fontSize: 13, fontWeight: 600, color: C.ink, marginBottom: 4 }}
      >
        {label}
      </div>
      {hint && (
        <div style={{ fontSize: 12, color: C.inkSoft, marginBottom: 6 }}>
          {hint}
        </div>
      )}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          background: "#fff",
          border: `1px solid ${C.line}`,
          borderRadius: 10,
          padding: "8px 12px",
        }}
      >
        {prefix && (
          <span style={{ color: C.inkSoft, marginRight: 6 }}>{prefix}</span>
        )}
        <input
          type="number"
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={(e) =>
            onChange(e.target.value === "" ? "" : Number(e.target.value))
          }
          style={{
            border: "none",
            outline: "none",
            width: "100%",
            fontSize: 15,
            background: "transparent",
            color: C.ink,
            fontFamily: "inherit",
          }}
        />
        {suffix && (
          <span style={{ color: C.inkSoft, marginLeft: 6 }}>{suffix}</span>
        )}
      </div>
    </label>
  );
};

export default Field;
