import { useState } from "react";
import PensionTab from "./components/tabs/Pension";
import DebtTab from "./components/tabs/Debt";
import SavingsTab from "./components/tabs/Savings";
import BasicsTab from "./components/tabs/Basics";
import LearnTab from "./components/tabs/Learn";
import C from "./utils/colourSchems";

const tabs = [
  { id: "debt", label: "Debt & student loans", el: <DebtTab /> },
  { id: "savings", label: "Savings", el: <SavingsTab /> },
  { id: "pension", label: "Pension", el: <PensionTab /> },
  { id: "basics", label: "Money basics", el: <BasicsTab /> },
  { id: "learn", label: "Learn to invest", el: <LearnTab /> },
];

const App = () => {
  const [tab, setTab] = useState("debt");

  return (
    <div
      style={{
        minHeight: "100vh",
        background: C.eggshell,
        fontFamily: "'Avenir Next', 'Segoe UI', system-ui, sans-serif",
        color: C.ink,
      }}
    >
      <style>{`
        @media (max-width: 760px) { .grid-stack { grid-template-columns: 1fr !important; } }
        button:focus-visible { outline: 2px solid ${C.sageDeep}; outline-offset: 2px; }
      `}</style>
      <div
        style={{ maxWidth: 1040, margin: "0 auto", padding: "32px 20px 60px" }}
      >
        <header style={{ marginBottom: 24 }}>
          <div
            style={{
              fontSize: 13,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: C.sage,
              fontWeight: 700,
            }}
          >
            Bloom
          </div>
          <h1
            style={{
              fontFamily: "Georgia, serif",
              fontWeight: 500,
              fontSize: "clamp(26px, 4vw, 38px)",
              margin: "6px 0 4px",
              color: C.sageDeep,
            }}
          >
            See your money grow, before it does.
          </h1>
          <p style={{ margin: 0, color: C.inkSoft, fontSize: 15 }}>
            Compound interest works on your debt, your savings and your pension.
            Play with the numbers and watch what time does.
          </p>
        </header>

        <nav
          style={{
            display: "flex",
            gap: 8,
            marginBottom: 22,
            flexWrap: "wrap",
          }}
        >
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                border: `1px solid ${tab === t.id ? C.sageDeep : C.line}`,
                background: tab === t.id ? C.sageDeep : "#fff",
                color: tab === t.id ? C.eggshell : C.ink,
                borderRadius: 999,
                padding: "9px 18px",
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "inherit",
              }}
            >
              {t.label}
            </button>
          ))}
        </nav>

        {tabs.find((t) => t.id === tab)?.el}
      </div>
    </div>
  );
};

export default App;
