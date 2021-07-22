import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/form";
import Alert from "./components/alert";
import List from "./components/list";
// const initialExpenses = [
//   { id: 1, charge: "rent", amount: 1200 },
//   { id: 2, charge: "car payment", amount: 500 },
//   { id: 3, charge: "journey", amount: 1200 },
// ];

// save to localStorage
const initialExpenses = localStorage.getItem("expenses")
  ? JSON.parse(localStorage.getItem("expenses"))
  : [];
function App() {
  // ****************** State Values *****************

  // all expenses, add expenses
  const [expenses, setExpenses] = useState(initialExpenses);
  // single expense
  const [charge, setCharge] = useState("");
  // single amount
  const [amount, setAmount] = useState("");
  // alert
  const [alert, setAlert] = useState({ show: false });

  // edit
  const [edit, setEdit] = useState(false);
  //edit item
  const [id, setId] = useState(0);
  // ****************** UseEffect *****************

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  // ****************** functionality *****************

  const handleExpense = (e) => {
    setCharge(e.target.value);
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      if (edit) {
        let edItem = expenses.map((item) => {
          return item.id === id ? { ...item, charge, amount } : item;
        });
        setExpenses(edItem);
        setEdit(false);
        handleAlert({ type: "success", text: "item added" });
      } else {
        const singleExpense = {
          id: Math.floor(Math.random() * 1000),
          charge,
          amount,
        };
        setExpenses([...expenses, singleExpense]);
        handleAlert({ type: "success", text: "item added" });
      }

      setCharge("");
      setAmount("");
    } else {
      // Alert function
      handleAlert({
        type: "danger",
        text:
          "charge can't be empty value and value has to be bigger than zero",
      });
    }
  };

  // clear all items

  const clearItem = () => {
    setExpenses([]);
    handleAlert({ type: "danger", text: "All Items deleted" });
  };

  // delete item

  const deleteItem = (id) => {
    let delItem = expenses.filter((item) => item.id !== id);
    setExpenses(delItem);
    handleAlert({ type: "danger", text: "item deleted" });
    setEdit(false);
    setCharge("");
    setAmount("");
  };

  // edit function

  const handleEdit = (id) => {
    let expenseEdit = expenses.find((item) => item.id === id);
    let { charge, amount } = expenseEdit;
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
    setId(id);
  };

  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <Alert />
      <h1>Budget Calculator</h1>
      <main className="App">
        <Form
          handleAmount={handleAmount}
          handleExpense={handleExpense}
          handleSubmit={handleSubmit}
          amount={amount}
          charge={charge}
          edit={edit}
        />
        <List
          expenses={expenses}
          clearItem={clearItem}
          deleteItem={deleteItem}
          handleEdit={handleEdit}
        />
      </main>
      <h1>
        Total spending :{" "}
        <span className="total">
          ${" "}
          {expenses.reduce((acc, curr) => {
            return (acc += parseInt(curr.amount));
          }, 0)}
        </span>
      </h1>
    </>
  );
}

export default App;
