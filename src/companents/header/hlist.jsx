import React from "react";

const list = [
  { value: "Home", id: 1 },
  { value: "Products", id: 2 },
  { value: "About", id: 3 },
  { value: "Contact", id: 4 },
];

function HeaderList() {
  return (
    <div className="header-list">
      <ul>
        {list.map((el) => {
          return <li key={el.id}>{el.value}</li>;
        })}
      </ul>
    </div>
  );
}

export default HeaderList;
