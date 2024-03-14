import { useSelector } from "react-redux"
import { useTodo } from "./redux/features/todo/todoSlice"

function App() {
  const todo = useSelector(useTodo)
  console.log(todo);
  return (
    <>
    </>
  )
}

export default App
