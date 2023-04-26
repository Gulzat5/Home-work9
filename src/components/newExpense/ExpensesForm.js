import { useState } from "react";
import Button from "../UI/Button";
import { Input } from "../UI/Input";
import "./ExpenseForm.css";

export const ExpensesForm = ({ onClick, addExpenseHandler }) => {
  const [inputText, setInputText] = useState("");
  const [inputNumber, setInputNumber] = useState("");
  const [inputDate, setInputDate] = useState("");

  function getInputValue(e) {
    setInputText(e.target.value);
  }

  function getDateInput(e) {
    setInputDate(e.target.value);
  }

  function getNumberInput(e) {
    setInputNumber(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();

    const product = {
      id: new Date().toString(),
      title: inputText,
      price: +inputNumber,
      date: new Date(inputDate),
    };

    addExpenseHandler(product);

    setInputDate("");
    setInputNumber("");
    setInputText("");
  }

  return (
    <div className="header">
      <div className="='input">
        <div style={{ display: "flex" }}>
          <Input
            type="text"
            placeholder="ЗАГОЛОВОК"
            children="ЗАГОЛОВОК"
            value={inputText}
            onChange={getInputValue}
          />
          <Input
            type="date"
            placeholder="data"
            children="ДАТА"
            value={inputDate}
            onChange={getDateInput}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "start",
            marginTop: "10px",
          }}
        >
          <Input
            type="number"
            children="КОЛИЧЕСТВО"
            placeholder="0"
            value={inputNumber}
            onChange={getNumberInput}
          />
        </div>
      </div>

      <div className="btn">
        <Button marginRight="20px" onClick={onClick}>
          Отмена
        </Button>
        <Button marginRight="12px" onClick={submitHandler}>
          Добавть расход
        </Button>
      </div>
    </div>
  );
};
