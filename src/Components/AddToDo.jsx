function AddToDo() {
  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col col-6">
          <input type="text" placeholder="Enter todo Here" />
        </div>
        <div className="col col-4">
          <input type="data" />
        </div>
        <div className="col col-2">
          <button type="button" className="btn btn-success kg-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddToDo;
