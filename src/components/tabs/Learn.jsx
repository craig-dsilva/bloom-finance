import Card from "../Card";
import InfoBox from "../InfoBox";
import C from "../../utils/colourSchems";
import riskLevels from "../../data/riskLevels";
import stocks from "../../data/stocks";

const LearnTab = () => {
  return (
    <div>
      <Card>
        <h3 style={{ margin: "0 0 6px", color: C.sageDeep }}>
          Risk and return travel together
        </h3>
        <p style={{ fontSize: 14, color: C.inkSoft, marginTop: 0 }}>
          The one rule with no exceptions: to have a chance at higher returns,
          you must accept higher risk. Anyone offering high returns with "no
          risk" is lying to you.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: 14,
          }}
        >
          {riskLevels.map((r) => (
            <div
              key={r.name}
              style={{
                border: `1.5px solid ${r.col}`,
                borderRadius: 14,
                padding: 16,
                background: "#fff",
              }}
            >
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: r.col,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                {r.label}
              </div>
              <div style={{ fontWeight: 700, color: C.ink, margin: "4px 0" }}>
                {r.name}
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: C.sageDeep,
                  fontWeight: 600,
                  marginBottom: 6,
                }}
              >
                {r.ret}
              </div>
              <p
                style={{
                  fontSize: 13,
                  color: C.inkSoft,
                  lineHeight: 1.5,
                  margin: 0,
                }}
              >
                {r.desc}
              </p>
            </div>
          ))}
        </div>
        <InfoBox title="What 'higher risk' feels like in practice">
          It means bigger swings. A medium-risk fund might drop 20% in a bad
          year before recovering; a single stock can drop 80% and stay there.
          Time smooths risk for diversified investments, which is why long
          horizons (like pensions) can take more risk than money you need next
          year.
        </InfoBox>
      </Card>

      <Card style={{ marginTop: 20 }}>
        <h3 style={{ margin: "0 0 6px", color: C.sageDeep }}>
          Picking stocks starts with picking sources
        </h3>
        <p style={{ fontSize: 14, color: C.inkSoft, marginTop: 0 }}>
          Before you buy a share, you research the company. Where that research
          comes from matters as much as what it says. Compare these three.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 14,
          }}
        >
          {stocks.map((s) => (
            <div
              key={s.ticker}
              style={{
                border: `1.5px solid ${s.trusted ? C.sage : "#C9A48A"}`,
                borderRadius: 14,
                padding: 16,
                background: "#fff",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 8,
                }}
              >
                <strong style={{ color: C.ink }}>{s.name}</strong>
                <span
                  style={{
                    fontSize: 12,
                    color: C.inkSoft,
                    background: C.eggshell,
                    borderRadius: 6,
                    padding: "2px 8px",
                  }}
                >
                  {s.ticker}
                </span>
              </div>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: s.trusted ? C.sageDeep : "#9A6B45",
                  marginBottom: 4,
                }}
              >
                {s.trusted ? "✓ Trusted source" : "⚠ Unverified source"} ·{" "}
                {s.source}
              </div>
              <p
                style={{
                  fontSize: 13.5,
                  color: C.ink,
                  lineHeight: 1.5,
                  margin: "6px 0 8px",
                  fontStyle: "italic",
                }}
              >
                "{s.headline}"
              </p>
              <p style={{ fontSize: 12.5, color: C.inkSoft, margin: 0 }}>
                {s.note}
              </p>
            </div>
          ))}
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 14,
            marginTop: 16,
          }}
          className="grid-stack"
        >
          <div
            style={{
              background: "#F3E9E0",
              borderRadius: 12,
              padding: "14px 16px",
            }}
          >
            <div
              style={{
                fontWeight: 700,
                fontSize: 13,
                color: "#9A6B45",
                marginBottom: 6,
                textTransform: "uppercase",
                letterSpacing: "0.03em",
              }}
            >
              Red flags in financial "news"
            </div>
            <ul
              style={{
                fontSize: 13.5,
                color: C.ink,
                lineHeight: 1.7,
                paddingLeft: 18,
                margin: 0,
              }}
            >
              <li>Guaranteed or "risk-free" returns</li>
              <li>Urgency: "buy before it's too late"</li>
              <li>No named author or sources</li>
              <li>Someone DMing you investment tips</li>
              <li>Celebrity endorsements of trading platforms</li>
            </ul>
          </div>
          <div
            style={{
              background: C.sagePale,
              borderRadius: 12,
              padding: "14px 16px",
            }}
          >
            <div
              style={{
                fontWeight: 700,
                fontSize: 13,
                color: C.sageDeep,
                marginBottom: 6,
                textTransform: "uppercase",
                letterSpacing: "0.03em",
              }}
            >
              Places you can trust
            </div>
            <ul
              style={{
                fontSize: 13.5,
                color: C.ink,
                lineHeight: 1.7,
                paddingLeft: 18,
                margin: 0,
              }}
            >
              <li>BBC News, Reuters, FT, Wall Street Journal</li>
              <li>MoneyHelper (free, government-backed guidance)</li>
              <li>MoneySavingExpert for consumer money topics</li>
              <li>gov.uk for tax, loans and pensions rules</li>
              <li>FCA register to check any firm is authorised</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card style={{ marginTop: 20 }}>
        <h3 style={{ margin: "0 0 6px", color: C.sageDeep }}>
          Don't want to pick stocks? Buy the whole market
        </h3>
        <p
          style={{ fontSize: 14, color: C.ink, lineHeight: 1.6, marginTop: 0 }}
        >
          Instead of choosing individual companies, you can buy an{" "}
          <strong>index fund</strong>: one purchase that holds a small slice of
          hundreds of companies at once, like the FTSE 100 or the S&amp;P 500.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 12,
          }}
        >
          {[
            [
              "Instant diversification",
              "If one company does badly, hundreds of others cushion it.",
            ],
            [
              "Low cost",
              "Fees are usually a fraction of actively managed funds.",
            ],
            [
              "No stock-picking skill needed",
              "You match the market instead of trying to beat it.",
            ],
          ].map(([t, d]) => (
            <div
              key={t}
              style={{ background: C.sagePale, borderRadius: 12, padding: 14 }}
            >
              <div
                style={{
                  fontWeight: 700,
                  fontSize: 13.5,
                  color: C.sageDeep,
                  marginBottom: 4,
                }}
              >
                {t}
              </div>
              <div style={{ fontSize: 13, color: C.ink, lineHeight: 1.5 }}>
                {d}
              </div>
            </div>
          ))}
        </div>
        <i
          style={{
            fontSize: 14,
            fontWeight: 1000,
            color: C.ink,
            marginBottom: 0,
            marginTop: 14,
          }}
        >
          Investments can fall as well as rise. This app is for learning, not
          financial advice.
        </i>
      </Card>
    </div>
  );
};

export default LearnTab;
