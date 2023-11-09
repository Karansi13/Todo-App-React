import { useState } from "react";

function AddTodo({ onNewItem }) {

  const [todoName, setTodoName] = useState()
  const [dueDate, setDueDate] = useState()


  const handleNameChange = (event) => {
    // console.log(event.target.value)
    setTodoName(event.target.value)
  }

  const handleDateChange = (event) => {
    // console.log(event.target.value)
    setDueDate(event.target.value)
  }

  const handleAddButtonChange = (event) => {
    onNewItem(todoName, dueDate)
    setDueDate("");
    setTodoName("");
  }


  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here" value={todoName} onChange={handleNameChange} />
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange}/>
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success kg-button" 
          onClick={handleAddButtonChange}
          // onClick={() => {
          //   // onNewItem('a', 'b')  // anonymous function deke hard coded vallue passs krkke cheeck kr rhe h
          // }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;