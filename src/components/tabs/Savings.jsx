import { useState, useMemo } from "react";
import Field from "../Field";
import Card from "../Card";
import InfoBox from "../InfoBox";
import GrowthChart from "../GrowthChart";
import fmt from "../../utils/sterlingPoundFormat";
import C from "../../utils/colourSchems";

const SavingsTab = () => {
  const [initial, setInitial] = useState(500);
  const [monthly, setMonthly] = useState(100);
  const [aer, setAer] = useState(4.5);
  const [years, setYears] = useState(10);

  const data = useMemo(() => {
    const mRate = Math.pow(1 + (Number(aer) || 0) / 100, 1 / 12) - 1;
    let bal = Number(initial) || 0;
    let paidIn = Number(initial) || 0;
    const out = [
      { year: 0, "You paid in": paidIn, "Balance with interest": bal },
    ];
    for (let y = 1; y <= (Number(years) || 0); y++) {
      for (let m = 0; m < 12; m++) {
        bal = bal * (1 + mRate) + (Number(monthly) || 0);
        paidIn += Number(monthly) || 0;
      }
      out.push({
        year: y,
        "You paid in": paidIn,
        "Balance with interest": bal,
      });
    }
    return out;
  }, [initial, monthly, aer, years]);

  const last = data[data.length - 1];
  const interestEarned =
    (last?.["Balance with interest"] || 0) - (last?.["You paid in"] || 0);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "minmax(260px, 340px) 1fr",
        gap: 20,
      }}
      className="grid-stack"
    >
      <Card>
        <h3 style={{ margin: "0 0 6px", color: C.sageDeep }}>
          Your savings plan
        </h3>
        <p style={{ fontSize: 13, color: C.inkSoft, marginTop: 0 }}>
          <strong>AER</strong> (Annual Equivalent Rate) is the yearly interest a
          bank pays you, including compounding.
        </p>
        <Field
          label="Starting amount"
          prefix="£"
          value={initial}
          onChange={setInitial}
        />
        <Field
          label="Added each month"
          prefix="£"
          value={monthly}
          onChange={setMonthly}
        />
        <Field
          label="AER"
          hint="Easy-access accounts pay roughly 3% to 5% right now"
          suffix="%"
          value={aer}
          onChange={setAer}
          step="0.1"
        />
        <Field
          label="For how many years"
          value={years}
          onChange={setYears}
          max={50}
        />
      </Card>
      <div>
        <Card>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              flexWrap: "wrap",
              gap: 8,
            }}
          >
            <h3 style={{ margin: 0, color: C.sageDeep }}>
              Compound interest at work
            </h3>
            <div style={{ fontSize: 14, color: C.ink }}>
              Interest earned: <strong>{fmt(interestEarned)}</strong>
            </div>
          </div>
          <GrowthChart
            data={data}
            series={["You paid in", "Balance with interest"]}
            colors={[C.inkSoft, C.sage]}
          />
          <p style={{ fontSize: 12, color: C.inkSoft, marginBottom: 0 }}>
            The green area above the grey line is money the bank paid you.
            Interest earns interest, so the gap widens every year.
          </p>
        </Card>
        <InfoBox title="Why it snowballs">
          In year one you earn interest on your deposits. In year two you earn
          interest on your deposits <em>and</em> on last year's interest. That
          is compounding, and time is what makes it powerful. Starting early
          beats starting big.
        </InfoBox>
      </div>
    </div>
  );
};

export default SavingsTab;
