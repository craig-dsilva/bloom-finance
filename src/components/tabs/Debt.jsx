import { useState, useMemo } from "react";
import Field from "../Field";
import Card from "../Card";
import InfoBox from "../InfoBox";
import GrowthChart from "../GrowthChart";
import fmt from "../../utils/sterlingPoundFormat";
import C from "../../utils/colourSchems";

const DebtTab = () => {
  const [tuition, setTuition] = useState(27750);
  const [maintenance, setMaintenance] = useState(0);
  const [rate, setRate] = useState(6.2);
  const [years, setYears] = useState(10);

  const principal = (Number(tuition) || 0) + (Number(maintenance) || 0);
  const data = useMemo(() => {
    const out = [];
    for (let y = 0; y <= (Number(years) || 0); y++) {
      out.push({
        year: y,
        Principal: principal,
        "Balance with interest":
          principal * Math.pow(1 + (Number(rate) || 0) / 100, y),
      });
    }
    return out;
  }, [principal, rate, years]);

  const finalBal =
    data[data.length - 1]?.["Balance with interest"] || principal;

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
        <h3 style={{ margin: "0 0 6px", color: C.sageDeep }}>Your loan</h3>
        <p style={{ fontSize: 13, color: C.inkSoft, marginTop: 0 }}>
          The amount you originally borrow is called the{" "}
          <strong>Principal</strong>. Interest grows on top of it.
        </p>
        <Field
          label="Tuition loan (required)"
          hint="£9,250 per year is the current cap in England"
          prefix="£"
          value={tuition}
          onChange={setTuition}
        />
        <Field
          label="Maintenance loan (optional)"
          prefix="£"
          value={maintenance}
          onChange={setMaintenance}
        />
        <Field
          label="Interest rate"
          hint="Plan 5 loans currently charge roughly 4% to 7%. Check gov.uk for today's rate."
          suffix="% per year"
          value={rate}
          onChange={setRate}
          step="0.1"
        />
        <Field
          label="Years to project"
          value={years}
          onChange={setYears}
          max={40}
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
              How the balance grows
            </h3>
            <div style={{ fontSize: 14, color: C.ink }}>
              Principal {fmt(principal)} → <strong>{fmt(finalBal)}</strong>{" "}
              after {years} yrs
            </div>
          </div>
          <GrowthChart
            data={data}
            series={["Principal", "Balance with interest"]}
            colors={[C.sageDeep, C.blush]}
          />
          <p style={{ fontSize: 12, color: C.inkSoft, marginBottom: 0 }}>
            The gap between the two lines is the interest added. This works the
            same way for any debt, not just student loans.
          </p>
        </Card>
        <InfoBox title="When do I start paying it back?">
          You only repay once you earn above a threshold. On{" "}
          <strong>Plan 5</strong> (started uni in England from 2023) that is{" "}
          <strong>£25,000 a year</strong>. You then repay 9% of anything you
          earn <em>above</em> the threshold. Earn less, pay nothing. Anything
          left after 40 years is written off.
        </InfoBox>
      </div>
    </div>
  );
};

export default DebtTab;
