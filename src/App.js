import "./App.css";

import { useState, useEffect, useCallback } from "react";
import ToDoForm from "./components/ToDoForm/ToDoForm";
import ToDoList from "./components/ToDoList/ToDoList";
import AppBackground from "./UI/AppBackground/AppBackground";

function App() {
  const [toDoData, setToDoData] = useState([]);

  const getData = useCallback(async () => {
    const response = await fetch(
      "https://todo-app-98441-default-rtdb.firebaseio.com/toDo.json"
    );
    const data = await response.json();
    // console.log(data);

    const todoArray = [];

    for (const key in data) {
      todoArray.push({
        id: key,
        title: data[key].title,
        description: data[key].description,
      });
    }

    setToDoData(todoArray);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  async function addToDoBackend(todo) {
    await fetch(
      "https://todo-app-98441-default-rtdb.firebaseio.com/toDo.json",
      {
        method: "POST",
        body: JSON.stringify(todo),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    getData();
  }

  async function removeToDo(id) {
    const deleteToDo = `https://todo-app-98441-default-rtdb.firebaseio.com/toDo/${id}.json`;

    await fetch(deleteToDo, {
      method: "DELETE",
    });

    getData();
  }

  return (
    <AppBackground>
      <ToDoForm addNewToDo={addToDoBackend} />
      <ToDoList onDeleteToDo={removeToDo} toDoData={toDoData} />
    </AppBackground>
  );
}

export default App;
