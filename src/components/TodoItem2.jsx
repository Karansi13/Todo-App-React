function TodoItem2() {


    let todoName = 'Go To College';
    let todoDate = '4/10//23';

    return (
        <div class="container">

        <div class="row kg-row">
          <div class="col-6">
            {todoName}
          </div>
          <div class="col-4">
            {todoDate}
          </div>
          <div class="col-2">
          <button type="button" className="btn btn-danger kg-button">Delete</button>
          </div>
        </div>
      </div>
    )
}

export default TodoItem2