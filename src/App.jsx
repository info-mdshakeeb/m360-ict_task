import AddTask from "./components/forms/add-task";
import ActionTasks from "./components/forms/action-task";

function App() {
  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <div className="max-w-md mx-auto overflow-hidden bg-white shadow-md rounded-xl md:max-w-2xl">
        <div className="p-8">
          <div className='flex items-center justify-between'>
            <div className="text-2xl font-semibold tracking-wide text-indigo-500 uppercase">Task Manager</div>
          </div>
          <AddTask />
          <div className="">
            <ActionTasks />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;