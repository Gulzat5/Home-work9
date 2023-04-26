import "./Chart.css";
import { ChartBar } from "../ChartBar/ExpenseChartBar";

export const ExpensesChart = ({ filtredExpenses }) => {
  const months = [
    { label: "Jan", currentPrice: 0 },
    { label: "Feb", currentPrice: 0 },
    { label: "Mar", currentPrice: 0 },
    { label: "Apr", currentPrice: 0 },
    { label: "May", currentPrice: 0 },
    { label: "Jun", currentPrice: 0 },
    { label: "Jul", currentPrice: 0 },
    { label: "Aug", currentPrice: 0 },
    { label: "Sep", currentPrice: 0 },
    { label: "Oct", currentPrice: 0 },
    { label: "Nov", currentPrice: 0 },
    { label: "Dec", currentPrice: 0 },
  ];

  filtredExpenses.forEach((element) => {
    const monthNumber = new Date(element.date).getMonth();
    months[monthNumber].currentPrice += element.price;
  });

  return (
    <div className="chartContainer">
      {months.map((el) => {
        return (
          <ChartBar
            key={el.label}
            label={el.label}
            currentPrice={el.currentPrice}
          />
        );
      })}
    </div>
  );
};
