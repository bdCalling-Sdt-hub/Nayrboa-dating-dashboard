import AuthWrapper from "@/components/share/AuthWrapper";
import Title from "@/components/share/Title";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    console.log(values);
    navigate("/auth/verify");
  };
  return (
    <AuthWrapper>
      <div className=" h-[470px]">
      <div className="text-center mb-12">
      <Title className="mt-8 mb-6">Forget Password</Title>
      </div>
      <Form layout="vertical" onFinish={onFinish}>
      <Form.Item name="email" label={<p className="text-white text-lg">Email Address</p>}>
            <Input
              placeholder="esteban_schiller@gmail.com"
              className="bg-[#2E3C43] border text-white border-[#3a3a3a] placeholder:text-gray-400 py-3 hover:bg-transparent focus:bg-transparent"
              size="large"
            />
          </Form.Item>

        <Form.Item>
        <button
            className="bg-red-600 h-12 text-white text-lg w-full mt-6  rounded  "
          >
            Send
          </button>
        </Form.Item>
      </Form>
      </div>
      
    </AuthWrapper>
  );
};

export default ForgetPassword;
