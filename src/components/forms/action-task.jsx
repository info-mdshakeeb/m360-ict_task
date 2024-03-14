import { useSelector } from "react-redux"
import { useTodo } from "../../redux/features/todo/todoSlice"

const ActionTasks = () => {
  const tasks = useSelector(useTodo)
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id} className={`border p-2 mt-2 `}>
          {task.name}
          <button className="p-2 mt-4 text-white bg-red-500 rounded">
            Delete
          </button>
          <button className="p-2 mt-4 text-white bg-blue-500 rounded">
            Edit
          </button>
        </div>
      ))}
    </div>
  )
}

export default ActionTasks