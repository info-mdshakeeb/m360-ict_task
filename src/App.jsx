

function App() {


  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <div className="max-w-md mx-auto overflow-hidden bg-white shadow-md rounded-xl md:max-w-2xl">
        <div className="p-8">
          <div className='flex items-center justify-between'>
            <div className="text-2xl font-semibold tracking-wide text-indigo-500 uppercase">Task Manager</div>
            <button className="p-1 mt-1 text-sm text-white bg-red-500 rounded ">
              Delete All
            </button>
          </div>
          <form

            className="justify-between mb-4 md:flex">
            <div className="">
              <input
                name="name"
                required
                type="text"
                className="p-2 mt-4 mr-2 border"
                placeholder="Enter task..."
              />
              <select
                name="priority"
                defaultValue={"lows"}
                className="p-2 mt-4 mr-2 border"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
              <button
                type="submit"
                className="p-2 mt-4 text-white bg-blue-500 rounded">
                Add Task
              </button>
            </div>
            <div className="items-center justify-center md:flex">
              <label className="mt-4 mr-2">Filter :</label>
              <select
                className="p-2 mt-4 mr-2 border"
              >
                <option value="all">All</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}

export default App;