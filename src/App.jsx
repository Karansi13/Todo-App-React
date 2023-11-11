import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState } from "react";
import { TodoItemsContext } from "./store/todo-items-store";

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
  
  const [todoItems, setTodoItems] = useState([])

  const addNewItem = (itemName, itemDueDate) => {
      console.log(`item name: ${itemName} date: ${itemDueDate}`)
      const newTodoItems = [
        ...todoItems,
        { name: itemName, dueDate: itemDueDate }
      ];
      setTodoItems(newTodoItems)
  };
// ... spread operator purani values use krnna h to use kiye hai

// filter ki defination h ki jab tk true hoti h condittion vo final array me jate jati h aur jaisse hi false hhui condition vo drop krjati hai
  const deleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter(item=> item.name !== todoItemName)
    setTodoItems(newTodoItems)
    console.log(`Item deleted : ${todoItemName}`)
  }

  
  return (
    <TodoItemsContext.Provider value={{
      todoItems: todoItems,
      addNewItem: addNewItem,
      deleteItem: deleteItem,
      }}>
      {/* .provider lagaa ke as a component  use kre */}
    <center className="todo-container">
      <AppName />
      <AddTodo/>
      <WelcomeMessage/>
      <TodoItems></TodoItems>
    </center>
    </TodoItemsContext.Provider>
  );
}

export default App;