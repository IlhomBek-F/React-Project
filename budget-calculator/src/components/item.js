import React from "react";

function Item({ item, deleteItem, handleEdit }) {
  const { charge, amount, id } = item;
  return (
    <div className="item">
      <div className="info">
        <span className="expense">{charge}</span>
        <span className="amount">${amount}</span>
        <div>
          <button
            onClick={() => handleEdit(id)}
            className="edit-btn"
            aria-label="edit button"
          >
            <i className="fas fa-edit"></i>
          </button>{" "}
          <button
            onClick={() => deleteItem(id)}
            className="delete-btn"
            aria-label="edit button"
          >
            <i className="fas fa-times"></i>
          </button>{" "}
        </div>
      </div>
    </div>
  );
}

export default Item;
