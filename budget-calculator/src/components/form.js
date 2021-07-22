import React from "react";

function Form({
  edit,
  handleSubmit,
  handleAmount,
  handleExpense,
  amount,
  charge,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="charge">charge</label>
          <input
            value={charge}
            onChange={handleExpense}
            type="text"
            className="form-control"
            id="charge"
            name="charge"
            placeholder="e,g. rent"
            autoComplete="off"
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">amount</label>
          <input
            value={amount}
            onChange={handleAmount}
            type="text"
            className="form-control"
            id="amount"
            name="charge"
            placeholder="e,g. 100"
            autoComplete="off"
          />
        </div>
      </div>

      <button onClick={handleSubmit} type="submit" className="btn">
        {edit ? "edit" : "submit"} <i className="fab fa-send"></i>
      </button>
    </form>
  );
}

export default Form;
