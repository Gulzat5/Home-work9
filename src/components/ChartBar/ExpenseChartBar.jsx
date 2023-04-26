import "./ExpensesChartBar.css";
export const ChartBar = ({ currentPrice, label }) => {
  const maximumPrise = 2000;
  const percent = (100 * currentPrice) / maximumPrise;

  return (
    <div className="chart-bar">
      <div className="chart-bar">
        <div className="chart-bar_inner">
          <div
            className="chart-bar__fill"
            style={{ height: `${percent}%` }}
          ></div>
        </div>
        <div className="chart-bar__label"></div>
        {label}
      </div>
    </div>
  );
};
