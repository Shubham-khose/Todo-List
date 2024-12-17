function TodoItem2() {
  let todoName = "Go to College";
  let todoDate = "19/10/2024";
  return (
    <div className="container">
      {/* 2nd row */}
      <div className="row kg-row">
        <div className="col col-6">{todoName}</div>
        <div className="col col-4">{todoDate}</div>
        <div className="col col-2">
          <button type="button" className="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem2;
