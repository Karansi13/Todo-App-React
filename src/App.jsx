import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useReducer, useState } from "react";
import TodoItemsContextProvider, { TodoItemsContext } from "./store/todo-items-store";


function App() {
  // const initialTodoItems = [
  //   {
  //     name: "Buy Milk",
  //     dueDate: "4/10/2023",
  //   },
  //   {
  //     name: "Go to College",
  //     dueDate: "4/10/2023",
  //   },
  //   {
  //     name: "Like this video",
  //     dueDate: "right now",
  //   },
  // ];

  // const [todoItems, setTodoItems] = useState(initialTodoItems)
  
  // const [todoItems, setTodoItems] = useState([])
  return (
    <TodoItemsContextProvider>
      {/* .provider lagaa ke as a component  use kre */}
    <center className="todo-container">
      <AppName />
      <AddTodo/>
      <WelcomeMessage/>
      <TodoItems></TodoItems>
    </center>
    </TodoItemsContextProvider>
  );
}

export default App;