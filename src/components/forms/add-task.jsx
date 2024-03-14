import { useDispatch } from 'react-redux'
import { addTask } from '../../redux/features/todo/todoSlice'
import { v4 as uuidv4 } from 'uuid';

const AddTask = ({ setFilter }) => {
  const dispatch = useDispatch()

  const handleAddTodo = (e) => {
    e.preventDefault()
    const form = e.target
    const newTask = {
      id: uuidv4(),
      name: form.name.value,
      completed: false,
      priority: form.priority.value,
    };
    dispatch(addTask(newTask))
    setFilter("all")
    form.reset()
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
          placeholder="Enter task..." />
        <select
          name="priority"
          defaultValue={"low"}
          className="p-2 mt-4 mr-2 border" >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button type="submit" className="p-2 mt-4 text-white bg-blue-500 rounded">
          Add Task
        </button>
      </div>
      <div
        onChange={(e) => { e.stopPropagation(), setFilter(e.target.value) }}
        className="items-center justify-center md:flex">
        <label className="mt-4 mr-2">Filter :</label>
        <select className="p-2 mt-4 mr-2 border" >
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