import { useContext } from "react";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import UserContext from "./usercontext";

const Login = () => {
  const userContext = useContext(UserContext);
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    const response = await userContext.login(values.username);
    if (response) {
      navigate("../");
    }
  };
  return (
    <Form layout="inline" onFinish={handleSubmit}>
      <Form.Item name="username" label="User Name">
        <Input type="text" />
      </Form.Item>
      <Button htmlType="submit" type="primary">
        Login
      </Button>
    </Form>
  );
};

export default Login;
