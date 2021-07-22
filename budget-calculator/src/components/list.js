import React from "react";
import Item from "./item";

function List({ expenses, color, clearItem, deleteItem, handleEdit }) {
  return (
    <>
      <ul className="list">
        {expenses.map((item) => {
          return (
            <Item
              handleEdit={handleEdit}
              deleteItem={deleteItem}
              item={item}
              key={item.id}
            />
          );
        })}
        {expenses.length > 0 && (
          <button onClick={color} className="clear" onClick={clearItem}>
            clear expenses<i className="fas fa-trash"></i>
          </button>
        )}
      </ul>
    </>
  );
}

export default List;
