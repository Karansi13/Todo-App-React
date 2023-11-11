import { createContext } from "react";
import { useReducer } from "react";

export const TodoItemsContext = createContext({
    todoItems: [],
    addNewItem: ()=>{},
    deleteItem: ()=>{},
    });

    const todoItemsReducer =  (currTodoItems , action) => {
        let newTodoItems = currTodoItems;
        if(action.type === "NEW_ITEM") {
          newTodoItems = [
            ...currTodoItems,
            { name: action.payload.itemName, dueDate: action.payload.itemDueDate }
          ];
        } else if (action.type == "DELETE_ITEM") {
           newTodoItems = currTodoItems.filter((item)=> item.name !== action.payload.itemName)
        }
        return newTodoItems;
      }


const TodoItemsContextProvider = ({children}) => {
    
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);


  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };
      dispatchTodoItems(newItemAction)
  };
// ... spread operator purani values use krnna h to use kiye hai

// filter ki defination h ki jab tk true hoti h condittion vo final array me jate jati h aur jaisse hi false hhui condition vo drop krjati hai
  const deleteItem = (todoItemName) => {

    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoItemName,
      },
    };
    dispatchTodoItems(deleteItemAction)
  }

  return (
    <TodoItemsContext.Provider value={{
        todoItems: todoItems,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
        }}>
            {children}
        </TodoItemsContext.Provider>

  )
}

export default TodoItemsContextProvider