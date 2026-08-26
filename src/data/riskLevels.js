import C from "../utils/colourSchems";

const riskLevels = [
  {
    label: "Lower risk",
    name: "Savings account",
    ret: "~3 to 5% a year",
    col: C.sageDeep,
    desc: "Your money can't fall in value, and UK banks protect up to £85,000 per person (FSCS). The trade-off: growth barely beats inflation.",
  },
  {
    label: "Medium risk",
    name: "Index funds",
    ret: "historically ~5 to 8% a year over long periods",
    col: C.sage,
    desc: "Value goes up and down year to year, sometimes sharply. Over 10+ years the market has historically trended up, but past performance never guarantees the future.",
  },
  {
    label: "Higher risk",
    name: "Single stocks & crypto",
    ret: "could multiply, could collapse",
    col: "#9A6B45",
    desc: "One company or one coin can lose most of its value and never recover. Only put in money you could afford to lose entirely.",
  },
];

export default riskLevels;
