"üse client";
import AuthWrapper from "@/components/share/AuthWrapper";
import Title from "@/components/share/Title";
import { Checkbox, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    console.log(values);
    navigate("/");
  };
  return (
    <AuthWrapper>
      <div className="text-center mb-12 bg-[#1C2428] mx-auto">
        <Title className="mt-8 mb-6">Login to Account</Title>
        <p className="text-[#F7F7F7]">
          Please enter your email and password to continue
        </p>
      </div>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          name="email"
          label={<p className="text-white text-lg">Email Address</p>}
        >
          <Input
            placeholder="esteban_schiller@gmail.com"
            className="bg-[#2E3C43] border text-white border-[#3a3a3a] placeholder:text-gray-400 py-3 hover:bg-transparent focus:bg-transparent"
            size="large"
          />
        </Form.Item>
        <Form.Item
          name="password"
          label={<p className="text-white text-lg">Password</p>}
        >
          <Input.Password
            placeholder="Enter Your Password"
            className="bg-[#2E3C43] border text-white border-[#3a3a3a] placeholder:text-gray-400 py-3 hover:bg-transparent focus:bg-transparent"
            size="large"
            name="password"
          />
        </Form.Item>
        <Form.Item>
          <div className="flex justify-between items-center text-[#F7F7F7]">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox className="text-[#F7F7F7]">Remember me</Checkbox>
            </Form.Item>

            <Link className="login-form-forgot" to="/auth/forget-password">
              Forgot password
            </Link>
          </div>
        </Form.Item>
        <Form.Item>
          <button className="bg-red-600 h-12 text-white text-lg w-5/6 mt-6  rounded  ms-7 ">
            Sign In
          </button>
        </Form.Item>
      </Form>
    </AuthWrapper>
  );
};

export default Login;
