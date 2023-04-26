import Button from "../UI/Button";
import(Button);
export const Header = ({ ExpenseShow, isLogin, Users, LogoutHandler }) => {
  return (
    <div style={{ width: "100%", height: "80px", backgroundColor: "#ad9be9" }}>
      {isLogin && (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "15px",
            marginRight: "20px",
            paddingTop: "15px",
          }}
        >
          <Button onClick={ExpenseShow}>Expenses</Button>
          <Button onClick={Users}>Users</Button>
          <Button onClick={LogoutHandler}>Logout</Button>
        </div>
      )}
    </div>
  );
};
