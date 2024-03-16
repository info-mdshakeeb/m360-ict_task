import { useDispatch } from 'react-redux'
import { editTask } from '../../redux/features/todo/todoSlice'
import { Form, Input, Button } from 'antd';

const UpdateTask = ({ edit, setEdit, task }) => {
  const dispatch = useDispatch()

  const handleUpdate = (values) => {
    dispatch(editTask({ ...edit, name: values.name }));
    setEdit({});
  };
  return (
    <Form onFinish={handleUpdate} style={{
      display: "flex",
      gap: "10px",
      width: "100%",
      marginTop: "25px",

    }}>
      <Form.Item style={{ width: "100%" }}
        name="name"
        rules={[{ required: true, message: 'Please input your task!' }]}
        initialValue={task.name}
      >
        <Input placeholder="Enter task..." />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit">
          Save
        </Button>
      </Form.Item>
    </Form>
  )
}

export default UpdateTask