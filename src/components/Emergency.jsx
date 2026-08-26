import { useState } from "react";
import Field from "./Field";
import Card from "./Card";
import fmt from "../utils/sterlingPoundFormat";
import C from "../utils/colourSchems";

const EmergencyFund = () => {
  const [expenses, setExpenses] = useState(1200);
  const [saved, setSaved] = useState(600);
  const target3 = (Number(expenses) || 0) * 3;
  const target6 = (Number(expenses) || 0) * 6;
  const pct =
    target3 > 0 ? Math.min(100, ((Number(saved) || 0) / target3) * 100) : 0;
  return (
    <Card>
      <h3 style={{ margin: "0 0 6px", color: C.sageDeep }}>
        Emergency fund checker
      </h3>
      <p style={{ fontSize: 13.5, color: C.inkSoft, marginTop: 0 }}>
        Before investing anything, build a safety cushion of 3 to 6 months of
        essential spending, kept in an easy-access account.
      </p>
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}
        className="grid-stack"
      >
        <Field
          label="Monthly essential spending"
          hint="Rent, bills, food, transport"
          prefix="£"
          value={expenses}
          onChange={setExpenses}
        />
        <Field
          label="Saved so far"
          prefix="£"
          value={saved}
          onChange={setSaved}
        />
      </div>
      <div style={{ fontSize: 14, color: C.ink, marginBottom: 8 }}>
        Your cushion target: <strong>{fmt(target3)}</strong> (3 months) to{" "}
        <strong>{fmt(target6)}</strong> (6 months)
      </div>
      <div
        style={{
          background: "#EDEAE0",
          borderRadius: 999,
          height: 16,
          overflow: "hidden",
        }}
        role="progressbar"
        aria-valuenow={Math.round(pct)}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          style={{
            width: pct + "%",
            height: "100%",
            background: C.sage,
            borderRadius: 999,
            transition: "width 0.3s",
          }}
        />
      </div>
      <div style={{ fontSize: 12.5, color: C.inkSoft, marginTop: 6 }}>
        {pct >= 100
          ? "You've hit the 3 month minimum. Keep going toward 6 if your income is unpredictable."
          : `You're ${Math.round(pct)}% of the way to a 3 month cushion.`}
      </div>
    </Card>
  );
};

export default EmergencyFund;
