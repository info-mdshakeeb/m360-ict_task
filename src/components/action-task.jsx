import { useSelector, useDispatch } from "react-redux"
import { delateTask, toggleStatus, useTodo } from "../redux/features/todo/todoSlice"
import { useState } from "react"
import UpdateTask from "./forms/update-task"

const ActionTasks = ({ filter }) => {
  const dispatch = useDispatch()
  const tasks = useSelector(useTodo)
  const [edit, setEdit] = useState({})

  return (
    <>
      {tasks
        .filter((task) => filter === 'all' || task.priority === filter)
        .map((task) => (
          <div key={task.id} className={`border p-2 mt-2 ${task.completed ? (task.priority === 'low' ? 'border-green-500' : task.priority === 'medium' ? 'border-yellow-500' : 'border-red-500') : ''}`}>
            {edit?.id === task.id ?
              <UpdateTask edit={edit} setEdit={setEdit} task={task} />
              : <p className={`${task.completed ? 'line-through' : ''}`}>{task.name}</p>
            }
            <button
              onClick={() => dispatch(toggleStatus(task))}
              className="p-2 mt-4 mr-2 text-white bg-green-500 rounded">
              {task.completed ? 'Mark as incomplete' : 'Mark as complete'}
            </button>
            {!edit?.id && <button
              onClick={() => setEdit(task)}
              className="p-2 mt-4 mr-2 text-white bg-yellow-500 rounded">
              Edit
            </button>}
            <button onClick={() => dispatch(delateTask(task))}
              className="p-2 mt-4 text-white bg-red-500 rounded">
              Delete
            </button>
          </div>
        ))}
    </>
  )
}

export default ActionTasks