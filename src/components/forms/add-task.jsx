import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addTask, useTodo } from '../../redux/features/todo/todoSlice'

const AddTask = () => {
  const dispatch = useDispatch()
  const tasks = useSelector(useTodo)

  const handleAddTodo = (e) => {
    e.preventDefault()
    const form = e.target
    const newTask = {
      id: tasks.length + 1,
      name: form.name.value,
      completed: false,
      priority: form.priority.value,
    };
    dispatch(addTask(newTask))
  }
  return (
    <form
      onSubmit={handleAddTodo}
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
          defaultValue={"low"}
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
  )
}
export default AddTask