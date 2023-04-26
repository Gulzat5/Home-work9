import "./App.css";
import { useEffect, useState } from "react";
import { Expenses } from "./components/expenses/Expenses";
import { NewExpense } from "./components/newExpense/NewExpense";
import { Login } from "./components/Login/Login";
import { Header } from "./components/header/Header";
import { User } from "./components/User/User";
const productt = [
  {
    title: "Flower",
    price: 320,
    date: new Date(2022, 2, 23),
    id: "1",
  },
  {
    title: "Apple",
    price: 335,
    date: new Date(2021, 4, 28),
    id: "2",
  },
  {
    title: "Зарядник",
    price: 500,
    date: new Date("2023, 05, 11"),
    id: "3",
  },
  {
    title: "Мышка",
    price: 200,
    date: new Date("2020, 2, 9"),
    id: "4",
  },
];

function App() {
  const [product, setPdoduct] = useState(
    JSON.parse(localStorage.getItem("key")) || productt
  );

  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState(false);

  useEffect(() => {
    localStorage.setItem("key", JSON.stringify(product));
  }, [product]);

  useEffect(() => {
    const Storige = localStorage.getItem("name");
    setIsLogin(Storige);
    // const GetLocalUser = localStorage.getItem("Get");
    // setUser(GetLocalUser);
  }, [isLogin]);

  function addExpenseHandler(data) {
    setPdoduct([...product, data]);
  }

  function deleteExpenses(id) {
    console.log(id);
    const newData = product.filter((el) => el.id !== id);
    setPdoduct(newData);
  }

  const LoginHandler = () => {
    setIsLogin(true);
    localStorage.setItem("name", !isLogin);
  };

  const LogoutHandler = () => {
    const local = localStorage.removeItem("name");
    setIsLogin(local);
    setUser(false);
  };

  const Users = () => {
    setUser(true);
  };

  const ExpenseShow = () => {
    setUser(true);
  };

  return (
    <>
      <Header
        isLogin={isLogin}
        LogoutHandler={LogoutHandler}
        Users={Users}
        ExpenseShow={ExpenseShow}
      >
        {" "}
      </Header>
      {isLogin ? (
        <>
          {user ? (
            <User />
          ) : (
            <>
              <NewExpense addExpenseHandler={addExpenseHandler}></NewExpense>
              <Expenses
                setPdoduct={setPdoduct}
                deleteExpenses={deleteExpenses}
                data={product}
              />
            </>
          )}
        </>
      ) : (
        <Login LoginHandler={LoginHandler} />
      )}
    </>
  );
}

export default App;
