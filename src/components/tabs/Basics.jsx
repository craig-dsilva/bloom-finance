import EmergencyFund from "../Emergency";
import Card from "../Card";
import C from "../../utils/colourSchems";

const BasicsTab = () => {
  return (
    <div>
      <EmergencyFund />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 20,
          marginTop: 20,
        }}
        className="grid-stack"
      >
        <Card>
          <h3 style={{ margin: "0 0 6px", color: C.sageDeep }}>
            The 50 / 30 / 20 rule
          </h3>
          <p
            style={{
              fontSize: 13.5,
              color: C.ink,
              lineHeight: 1.6,
              marginTop: 0,
            }}
          >
            A simple way to split your take-home pay:
          </p>
          {[
            ["50%", "Needs", "rent, bills, food, transport", C.sageDeep],
            ["30%", "Wants", "eating out, clothes, subscriptions, fun", C.sage],
            [
              "20%",
              "Saving & debt",
              "emergency fund, investing, extra repayments",
              "#9A6B45",
            ],
          ].map(([pc, t, d, col]) => (
            <div
              key={t}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 10,
              }}
            >
              <div
                style={{
                  minWidth: 52,
                  fontWeight: 700,
                  color: col,
                  fontSize: 18,
                }}
              >
                {pc}
              </div>
              <div style={{ fontSize: 13.5, color: C.ink }}>
                <strong>{t}</strong>: {d}
              </div>
            </div>
          ))}
          <p style={{ fontSize: 12.5, color: C.inkSoft, margin: 0 }}>
            It is a guideline, not a law. In an expensive city your "needs"
            slice will be bigger; the habit of splitting is what matters.
          </p>
        </Card>
        <Card>
          <h3 style={{ margin: "0 0 6px", color: C.sageDeep }}>
            Reading your first payslip
          </h3>
          <p
            style={{
              fontSize: 13.5,
              color: C.ink,
              lineHeight: 1.6,
              marginTop: 0,
            }}
          >
            Your salary is quoted <strong>gross</strong>, but what lands in your
            account is <strong>net</strong>, after these come off:
          </p>
          <ul
            style={{
              fontSize: 13.5,
              color: C.ink,
              lineHeight: 1.7,
              paddingLeft: 18,
              marginTop: 0,
            }}
          >
            <li>
              <strong>Income tax</strong>: nothing on roughly your first £12,570
              (your personal allowance), then 20% above it
            </li>
            <li>
              <strong>National Insurance</strong>: funds the NHS and state
              pension
            </li>
            <li>
              <strong>Student loan</strong>: only above your plan's threshold
            </li>
            <li>
              <strong>Pension</strong>: your contribution, matched by your
              employer
            </li>
          </ul>
          <p style={{ fontSize: 12.5, color: C.inkSoft, margin: 0 }}>
            If the numbers look wrong, check your tax code. Being on the wrong
            code is common in first jobs.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default BasicsTab;
