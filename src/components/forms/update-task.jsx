import { useDispatch } from 'react-redux'
import { editTask } from '../../redux/features/todo/todoSlice'

const UpdateTask = ({ edit, setEdit, task }) => {
  const dispatch = useDispatch()

  const handleUpdate = (e) => {
    e.preventDefault()
    dispatch(editTask({ ...edit, name: e.target.name.value, }))
    setEdit({})
  }
  return (
    <form onSubmit={handleUpdate}>
      <input
        name="name"
        defaultValue={task.name}
        required
        type="text"
        className="p-2 mt-4 mr-2 border"
        placeholder="Enter task..." />
      <button
        type="submit"
        className="p-2 mt-4 text-white bg-yellow-500 rounded">
        save
      </button>
    </form>
  )
}

export default UpdateTask