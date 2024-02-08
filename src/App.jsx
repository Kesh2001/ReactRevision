// A component is a funtion with a capital first letter that encapsulates a reusable UI element of the page.

export default function App(){ // you can only return 1 element in a Component
  return (
  <>
  <form className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input type="text" id="item"/>
    </div>
    <button className="btn">Add</button>
  </form>

  <h1 className="header">ToDo List</h1>
  <ul className="list">
    <li>
      <label>
        <input type="checkbox"/>
        Item 1
      </label>
      <button className="btn btn-danger">Delete</button>
    </li>
    <li>
      <label>
        <input type="checkbox"/>
        Item 2
      </label>
      <button className="btn btn-danger">Delete</button>
    </li>
  </ul>
  </>
  )
}