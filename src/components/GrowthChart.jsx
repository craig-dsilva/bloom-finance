import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import C from "../utils/colourSchems";
import fmt from "../utils/sterlingPoundFormat";

const GrowthChart = ({ data, series, colors, height = 300 }) => {
  return (
    <div style={{ width: "100%", height }}>
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 10, left: 6, bottom: 0 }}
        >
          <CartesianGrid stroke={C.line} strokeDasharray="3 3" />
          <XAxis dataKey="year" tick={{ fontSize: 12, fill: C.inkSoft }} />
          <YAxis
            tick={{ fontSize: 12, fill: C.inkSoft }}
            tickFormatter={(v) =>
              "£" + (v >= 1000 ? (v / 1000).toFixed(0) + "k" : v)
            }
          />
          <Tooltip
            formatter={(v) => fmt(v)}
            labelFormatter={(l) => `Year ${l}`}
            contentStyle={{
              borderRadius: 10,
              border: `1px solid ${C.line}`,
              background: "#fff",
              fontSize: 13,
            }}
          />
          <Legend wrapperStyle={{ fontSize: 13 }} />
          {series.map((s, i) => (
            <Area
              key={s}
              type="monotone"
              dataKey={s}
              stroke={colors[i]}
              fill={colors[i]}
              fillOpacity={i === 0 ? 0.25 : 0.45}
              strokeWidth={2}
            />
          ))}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GrowthChart;
