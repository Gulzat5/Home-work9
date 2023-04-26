import Button from "../UI/Button";
import { ExpensesForm } from "./ExpensesForm";
import { useState } from "react";
import styled from "styled-components";
export const NewExpense = ({ addExpenseHandler }) => {
  const [state, setState] = useState(false);

  function openAndCloseExpensesFormHandler() {
    setState((prev) => !prev);
  }

  return (
    <DivContainer>
      {state ? (
        <ExpensesForm
          onClick={openAndCloseExpensesFormHandler}
          addExpenseHandler={addExpenseHandler}
        />
      ) : (
        <Button onClick={openAndCloseExpensesFormHandler}>
          Добавить новые расходы
        </Button>
      )}
    </DivContainer>
  );
};
const DivContainer = styled.div`
  background-color: #ad9be9;
  width: "90%";
  height: 130px;
  padding-top: 10px;
  text-align: center;
  border-radius: 20px;
  margin-left: 30px;
`;
