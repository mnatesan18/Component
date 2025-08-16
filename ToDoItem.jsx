import React, { useState } from "react";
//comme
//textdecoration : linethrough

function ToDoItem(props) {
  const [textDec, setTextdec] = useState("");

  function linethrough() {
    setTextdec((prev) => (prev === "" ? "line-through" : ""));
  }

  return (
    <div>
      <li style={{ textDecoration: textDec }} onClick={linethrough}>
        {props.text}
      </li>
    </div>
  );
}

export default ToDoItem;
