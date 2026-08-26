import { useState } from "react";
import Card from "./Card";
import fmt from "../utils/sterlingPoundFormat";
import C from "../utils/colourSchems";

const CostOfWaiting = () => {
  const [startAge, setStartAge] = useState(20);
  const monthly = 100,
    growth = 5,
    retire = 65;
  const pot = (from) => {
    const mRate = Math.pow(1 + growth / 100, 1 / 12) - 1;
    let bal = 0;
    for (let m = 0; m < (retire - from) * 12; m++)
      bal = bal * (1 + mRate) + monthly;
    return bal;
  };
  const now = pot(startAge);
  const later = pot(startAge + 10);
  return (
    <Card style={{ marginTop: 20 }}>
      <h3 style={{ margin: "0 0 6px", color: C.sageDeep }}>
        The cost of waiting
      </h3>
      <p style={{ fontSize: 13.5, color: C.inkSoft, marginTop: 0 }}>
        £100 a month, 5% growth, until age 65. Drag to pick your starting age
        and see what a 10 year delay costs.
      </p>
      <input
        type="range"
        min={18}
        max={40}
        value={startAge}
        onChange={(e) => setStartAge(Number(e.target.value))}
        style={{ width: "100%", accentColor: C.sageDeep }}
        aria-label="Starting age"
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 12,
          color: C.inkSoft,
          marginBottom: 14,
        }}
      >
        <span>18</span>
        <span>
          Start at <strong style={{ color: C.ink }}>{startAge}</strong>
        </span>
        <span>40</span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div
          style={{
            background: C.sagePale,
            borderRadius: 12,
            padding: 14,
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 12, color: C.inkSoft }}>
            Start at {startAge}
          </div>
          <div style={{ fontSize: 22, fontWeight: 700, color: C.sageDeep }}>
            {fmt(now)}
          </div>
        </div>
        <div
          style={{
            background: "#F0E8DF",
            borderRadius: 12,
            padding: 14,
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 12, color: C.inkSoft }}>
            Start at {startAge + 10}
          </div>
          <div style={{ fontSize: 22, fontWeight: 700, color: "#9A6B45" }}>
            {fmt(later)}
          </div>
        </div>
      </div>
      <p
        style={{ fontSize: 13.5, color: C.ink, marginBottom: 0, marginTop: 12 }}
      >
        Waiting 10 years costs you <strong>{fmt(now - later)}</strong>, even
        though you'd only have paid in {fmt(monthly * 12 * 10)} more. The rest
        is compounding you missed.
      </p>
    </Card>
  );
};

export default CostOfWaiting;
