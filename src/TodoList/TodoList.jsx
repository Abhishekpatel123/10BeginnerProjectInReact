import { React, useState } from "react";
import List from "./List";

const TodoList = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (e) => {
    setInputList(e.target.value);
  };

  const addTodo = () => {
    setItems((preItems) => {
      return [...preItems, inputList];
    });
    setInputList("");
  };
  const cancelItem = (id) => {
    console.log("cancel");
    setItems((prevItems) => {
      return prevItems.filter((data, index) => {
        // those index is not equal to id return that but those are equal they will be deleted
        return index != id;
      });
    });
  };

  return (
    <div className="outer-div">
      <div className="flex flex-coloum">
        <br />
        <h1>Todo List Project 5</h1>
        <br />
        <input
          className="input-box"
          onChange={itemEvent}
          value={inputList}
          type="text"
          placeholder="Add TODO List "
        />
        <button onClick={addTodo} className="btn bcolor3">
          ADD TODO
        </button>
      </div>
      <ol className="m-20">
        {items.map((item, index) => {
          return (
            <List text={item} key={index} id={index} onSelect={cancelItem} />
          );
        })}
      </ol>
    </div>
  );
};

export default TodoList;
