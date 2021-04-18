import './App.css';
import { useState } from "react";

function App() {

  const todos = [
    {
      id: 0,
      text: "Vytvořit todo list v Reactu"
    },
    {
      id: 1,
      text: "Nahrát na server aplikaci"
    }
  ]

  const [todoList, setTodoList] = useState(todos);
  const [input, setInput] = useState("")

  const addHandler = () => {
    const newTodoList = [...todoList];

    const newTodo = {
      id: new Date().getTime(),
      text: input
    }

    newTodoList.push(newTodo)
    setTodoList(newTodoList);
    setInput("")
  }

  const removeHandler = (todoId) => {
    const filtered = todoList.filter(item => item.id !== todoId)
    setTodoList(filtered)
  }

  return (
    <div className="App">
      <div>
        Nový úkol:
        <input type={"text"} value={input} onChange={(event) => setInput(event.target.value)}/>
        <button onClick={addHandler}>Přidat</button>
      </div>
      <hr/>

      {todoList.map(item => <div className={"todo-item"}>
        <div key={item.id}>{item.text}</div>
        <button onClick={() => {
          removeHandler(item.id)
        }}>Hotovo
        </button>
      </div>)}
      {todoList.length === 0 && "Vše je hotovo"}

    </div>
  );
}

export default App;
