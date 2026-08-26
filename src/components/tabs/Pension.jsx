import { useState, useMemo } from "react";
import Field from "../Field";
import Card from "../Card";
import InfoBox from "../InfoBox";
import GrowthChart from "../GrowthChart";
import CostOfWaiting from "../CostOfWaiting";
import fmt from "../../utils/sterlingPoundFormat";
import C from "../../utils/colourSchems";

const PensionTab = () => {
  const [monthly, setMonthly] = useState(200);
  const [growth, setGrowth] = useState(5);
  const [years, setYears] = useState(40);

  const data = useMemo(() => {
    const mRate = Math.pow(1 + (Number(growth) || 0) / 100, 1 / 12) - 1;
    let bal = 0,
      paidIn = 0;
    const out = [{ year: 0, "Total contributions": 0, "Pension pot": 0 }];
    for (let y = 1; y <= (Number(years) || 0); y++) {
      for (let m = 0; m < 12; m++) {
        bal = bal * (1 + mRate) + (Number(monthly) || 0);
        paidIn += Number(monthly) || 0;
      }
      out.push({ year: y, "Total contributions": paidIn, "Pension pot": bal });
    }
    return out;
  }, [monthly, growth, years]);

  const last = data[data.length - 1];

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(260px, 340px) 1fr",
          gap: 20,
        }}
        className="grid-stack"
      >
        <Card>
          <h3 style={{ margin: "0 0 6px", color: C.sageDeep }}>Your pension</h3>
          <p style={{ fontSize: 13, color: C.inkSoft, marginTop: 0 }}>
            A pension is long-term investing. Your money is invested and its
            value is <em>expected</em> to grow, but it is not guaranteed like a
            savings account.
          </p>
          <Field
            label="Monthly contribution"
            hint="Include what your employer adds on top"
            prefix="£"
            value={monthly}
            onChange={setMonthly}
          />
          <Field
            label="Expected growth"
            hint="A common planning assumption is 4% to 7% a year"
            suffix="%"
            value={growth}
            onChange={setGrowth}
            step="0.1"
          />
          <Field
            label="Years until retirement"
            value={years}
            onChange={setYears}
            max={60}
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
                Your pot over time
              </h3>
              <div style={{ fontSize: 14, color: C.ink }}>
                Pot at retirement:{" "}
                <strong>{fmt(last?.["Pension pot"] || 0)}</strong>
              </div>
            </div>
            <GrowthChart
              data={data}
              series={["Total contributions", "Pension pot"]}
              colors={[C.inkSoft, C.sage]}
            />
          </Card>
          <InfoBox title="The pension gap is real">
            On average, women in the UK retire with pension pots around a third
            smaller than men's, mostly because of career breaks and part-time
            work. The fix is boring but effective: start early, never opt out of
            auto-enrolment, and top up when you can. Try adding just £25 more a
            month in the calculator and watch the end number.
          </InfoBox>
        </div>
      </div>
      <CostOfWaiting />
    </div>
  );
};

export default PensionTab;
