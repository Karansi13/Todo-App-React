import { useRef } from "react";
import { useContext } from "react";
import { BiSolidMessageAltAdd } from 'react-icons/bi';
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo({ onNewItem }) {

  const {addNewItem} = useContext(TodoItemsContext)
  const todoNameElement = useRef();
  const dueDateElement = useRef();


  const handleAddButtonChange = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    addNewItem(todoName, dueDate)
  }


  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddButtonChange}>
        <div className="col-6">
          <input type="text" ref={todoNameElement} placeholder="Enter Todo Here"  />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement}/>
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success kg-button" 
          onClick={handleAddButtonChange}
          // onClick={() => {
          //   // onNewItem('a', 'b')  // anonymous function deke hard coded vallue passs krkke cheeck kr rhe h
          // }}
          >
            <BiSolidMessageAltAdd/>
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;