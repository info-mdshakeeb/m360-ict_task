import { useSelector, useDispatch } from "react-redux";
import { delateTask, toggleStatus, useTodo } from "../redux/features/todo/todoSlice";
import { useState } from "react";
import UpdateTask from "./forms/update-task";
import { Button, List, Typography } from 'antd';

const ActionTasks = ({ filter }) => {
  const dispatch = useDispatch();
  const tasks = useSelector(useTodo);
  const [edit, setEdit] = useState({});

  return (
    <List
      style={{
        padding: '10px',
        backgroundColor: '#f5f5f5',
        borderRadius: '12px',
        marginBottom: '10px'
      }}
      itemLayout="horizontal"
      dataSource={tasks.filter((task) => filter === 'all' || task.priority === filter)}
      renderItem={task => (
        <List.Item
          key={task.id}
          actions={[
            <Button
              danger={task.completed}
              key={task.id}
              type="primary" onClick={() => dispatch(toggleStatus(task))}>
              {task.completed ? 'Mark as incomplete' : 'Mark as complete'}
            </Button>,
            !edit?.id && <Button onClick={() => setEdit(task)}>Edit</Button>,
            <Button
              key={task.id}
              danger onClick={() => dispatch(delateTask(task))}>Delete</Button>
          ]} >
          <List.Item.Meta
            title={edit?.id === task.id ? <UpdateTask edit={edit} setEdit={setEdit} task={task} /> : <Typography.Text style={{
              textDecoration: task.completed ? 'line-through' : 'none',
              color: task.completed ? task.priority === 'high' ? 'red' : task.priority === 'medium' ? 'orange' : 'green' : 'black'
            }}>{task.name}</Typography.Text>}
          />
        </List.Item>
      )}
    />
  );
};

export default ActionTasks;