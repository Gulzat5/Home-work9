import "./expenses.css";
import { useState } from "react";
import { ExpensesFilter } from "../ExpensesFilter/ExpensFilter";
import { ExpensesChart } from "../Chart/ExpensesChart";
import { ExpensesCard } from "./ExpensesCard";

export const Expenses = ({ data, onDelete, setPdoduct, deleteExpenses }) => {
  const [selectedYear, setSelectYear] = useState("2023");
  function getSelectValue(event) {
    setSelectYear(event.target.value);
  }

  const filtredYear = data.filter((el) => {
    const stringifiedYEar = new Date(el.date).getFullYear().toString();
    return stringifiedYEar === selectedYear;
  });

  console.log("filtredYear", filtredYear);
  console.log("data", data);

  const descending = () => {
    const plass = filtredYear.sort((a, b) => {
      return new Date(a.date) - new DataTransfer(b.date);
    });
    setPdoduct(plass);
  };

  const ascending = () => {
    const plass = filtredYear.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
    setPdoduct(plass);
  };

  return (
    <div className="ata">
      <div className="divExp">
        <div className="ExprensesFilter">
          <ExpensesFilter
            getvalue={getSelectValue}
            descending={descending}
            ascending={ascending}
            value={selectedYear}
            onChange={getSelectValue}
          />
        </div>
        <ExpensesChart filtredExpenses={filtredYear} />

        <ul className="ul">
          {data.map((el) => {
            return (
              <ExpensesCard
                key={el.id}
                el={el}
                value={selectedYear}
                deleteExpenses={deleteExpenses}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};
