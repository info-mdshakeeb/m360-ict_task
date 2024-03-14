import { useState } from "react";
import { useSelector } from "react-redux";
import AddTask from "./components/forms/add-task";
import ActionTasks from "./components/action-task";
import { useTodo } from "./redux/features/todo/todoSlice";

function App() {
  const tasks = useSelector(useTodo)
  const [filter, setFilter] = useState("all")

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <div className="max-w-md mx-auto overflow-hidden bg-white shadow-md rounded-xl md:max-w-2xl">
        <div className="p-8">
          <div className='flex items-center justify-between'>
            <div className="text-2xl font-semibold tracking-wide text-indigo-500 uppercase">Task Manager</div>
            <div className="">
              <p>Total Task <span>: {tasks.length}</span></p>
              <p>Complete Task <span>: {(tasks.filter(tasks => tasks.completed === true)).length}</span></p>
            </div>
          </div>
          <AddTask setFilter={setFilter} />
          {tasks.length ? <ActionTasks filter={filter} /> : <p>No task Found</p>}
        </div>
      </div>
    </div>
  );
}
export default App;

// * Notes

/**
 * *  don't use react-router-dom 
 * * never use  optional chaining becaus there is no => null or undefined 
 */