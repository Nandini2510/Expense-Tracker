import React from "react";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate date={props.date} />
        {/* {props.date.toISOString()} */}
      </div>
      <div className="expense-item__description">
        <h2> {props.title}</h2>
        <p className="expense-item__price">{props.amount}</p>
      </div>
    </Card>
  );
}

export default ExpenseItem;
