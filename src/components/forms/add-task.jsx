import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux'
import { Form, Input, Select, Button, Row, Col } from 'antd';
import { addTask } from '../../redux/features/todo/todoSlice'

const AddTask = ({ setFilter }) => {
  const dispatch = useDispatch()
  const { Option } = Select;

  const handleAddTodo = (values) => {
    const newTask = {
      id: uuidv4(),
      name: values.name,
      completed: false,
      priority: values.priority,
    };
    dispatch(addTask(newTask));
    setFilter("all");
  };
  return (
    <Form
      onFinish={handleAddTodo}
      className="justify-between mb-4 md:flex">
      <Row gutter={16}>
        <Col>
          <Form.Item
            name="name"
            rules={[{ required: true, message: 'Please input your task!' }]}>
            <Input placeholder="Enter task..." />
          </Form.Item>
        </Col>
        <Col>
          <Form.Item
            name="priority"
            initialValue="low"
          >
            <Select>
              <Option value="low">Low</Option>
              <Option value="medium">Medium</Option>
              <Option value="high">High</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col>
          <Form.Item>
            <Button htmlType="submit">
              Add Task
            </Button>
          </Form.Item>
        </Col>
        <Col>
          <Form.Item name="filter" style={{ minWidth: "100px" }}>
            <Select placeholder="Filter :" onChange={value => setFilter(value)}>
              <Option value="all">All</Option>
              <Option value="low">Low</Option>
              <Option value="medium">Medium</Option>
              <Option value="high">High</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>

    </Form>
  )
}
export default AddTask