import { useState } from "react";
import { useSelector } from "react-redux";
import { Card, Typography, Row } from 'antd';
import AddTask from "./components/forms/add-task";
import ActionTasks from "./components/action-task";
import { useTodo } from "./redux/features/todo/todoSlice";


function App() {
  const { Title, Text } = Typography;
  const tasks = useSelector(useTodo)
  const [filter, setFilter] = useState("all")

  return (
    <Card style={{ minHeight: '100vh', padding: '16px', backgroundColor: '#f5f5f5' }}>
      <Card style={{ maxWidth: '100%', margin: 'auto', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
        <div style={{ padding: '10px' }}>
          <Row justify="space-between" style={{ marginBottom: '10px' }} >
            <Title level={2} style={{ color: '#3f51b5' }}>Task Manager</Title>
            <div>
              <Text>Total Task: {tasks.length}</Text><br />
              <Text>Complete Task: {(tasks.filter(task => task.completed === true)).length}</Text>
            </div>
          </Row>
          <AddTask setFilter={setFilter} />
          {tasks.length ? <ActionTasks filter={filter} /> : <Text>No task Found</Text>}
        </div>
      </Card>
    </Card>
  );
}
export default App;


// * description

/**
 * *  don't use react-router-dom 
 * * never use  optional chaining becaus there is no => null or undefined 
 * ! i an not expert in antd design thats why first i use tailwind css after that i explore antd design and use it . I take halp form chatGpt and antd design documentation
 * * usually i use tailwind css and redix-ui with the shadcn style components
 */