import "./ExpenseCard.css";

export const ExpensesCard = ({ el, onDelete, deleteExpenses }) => {
  const dateMonth = new Date(el.date).toLocaleString("ru-ru", {
    month: "long",
  });

  const dateYear = new Date(el.date).getFullYear();

  return (
    <div className="iDiv">
      <div>
        <ul className="left-side">
          <div className="p-date">
            <span className="dateMothSpan">{dateMonth}</span>
            <span>{dateYear}</span>
            <span className="span">{new Date(el.date).getDate()}</span>
          </div>
          <p className="title">{el.title}</p>
        </ul>
        <div className="conPrice">
          <p className="price">{el.price} $</p>
        </div>
        <button className="delete" onClick={() => deleteExpenses(el.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};
