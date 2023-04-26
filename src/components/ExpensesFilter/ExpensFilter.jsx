import "./EpensesFilter.css";

export const ExpensesFilter = ({
  onChange,
  selectedYear,
  descending,
  ascending,
}) => {
  return (
    <div className="FilterContainer">
      <button onClick={descending}> по убыванию</button>
      <button onClick={ascending}> по возрастанию</button>
      <div className="Filter_label">
        <label className="LabelContainer" style={{ color: "white" }}>
          Filter by year
        </label>
        <select
          className="SelectContainer"
          value={selectedYear}
          onChange={onChange}
          style={{ width: "120px" }}
        >
          <option style={{ color: "black" }} value="2023">
            2023
          </option>
          <option style={{ color: "black" }} value="2022">
            2022
          </option>
          <option style={{ color: "black" }} value="2021">
            2021
          </option>
          <option style={{ color: "black" }} value="2020">
            2020
          </option>
        </select>
      </div>
    </div>
  );
};
