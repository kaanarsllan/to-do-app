import "./App.css";
import React, { useState } from "react";

const INITIAL_STATE = [{ id: 1, contents: "", tamamlandi: false}];

function App() {
  const [list, setList] = useState(INITIAL_STATE);
  const [newAdd, setnewAdd] = useState("");
  console.log("newadd", newAdd);

  const addNew = (title) => {
    setList([...list, { id: Date.now(), contents: newAdd, completed: false }]);
    setnewAdd("");
  };

  const cleanCompleted = () => {
    setList(list.filter((item) => !item.tamamlandi));
  };
  const markedTodo = (id) => {
    setList(
      list.map((e) => (e.id === id ? { ...e, tamamlandi: !e.tamamlandi } : e))
    );
  };

  return (
    <div className="App">
      <h1 className="head">To Do List</h1>
      <div className="input">
        <input
          value={newAdd}
          onChange={(e) => setnewAdd(e.target.value)}
          placeholder="Please Insert To Do"
        />
        
        <button className="addButton"
          onClick={() => {
            addNew(newAdd);
          }}
        >
          
          Add
        </button>
        <button onClick={() => cleanCompleted()} className="clean">
          {" "}
          Clear Completed To Do
        </button>
       </div>

      <div className="list">
        {list.map((item) => (
          <div
            key={item.id}
            onClick={() => markedTodo(item.id)}
            className={item.tamamlandi ? "yapildi " : ""}
          >
            {item.contents}
          </div>
        ))}
        
      </div>
    </div>
  );
}

export default App;
