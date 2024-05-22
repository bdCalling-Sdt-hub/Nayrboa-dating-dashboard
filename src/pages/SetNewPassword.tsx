import AuthWrapper from "@/components/share/AuthWrapper";
import Title from "@/components/share/Title";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";

const SetNewPassword = () => {
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    console.log(values);
    navigate("/auth/login");
  };
  return (
    <AuthWrapper> 
      <div className="h-[620px]">
      <div className="text-center mb-4 mt-16 ">
        <Title className=" ">Set a new password</Title>
        <p className="text-[#F7F7F7] mt-6 mb-10">Create a new password. Ensure it differs from
previous ones for security</p>
      </div> 
      <Form layout="vertical" onFinish={onFinish}>
        
        <Form.Item
            name="password"
            label={<p className="text-white text-lg ">New password</p>}
          >
            <Input.Password
              placeholder="Write new password"
              className="bg-[#2E3C43] border text-white border-[#3a3a3a] placeholder:text-gray-400 py-3 hover:bg-transparent focus:bg-transparent mb-5"
              size="large"
              name="password"
            />
          </Form.Item>
          
          <Form.Item
            name="confirmPassword"
            label={<p className="text-white text-lg ">Confirm Password</p>}
          >
            <Input.Password
              placeholder="Write confirm password"
              className="bg-[#2E3C43] border text-white border-[#3a3a3a] placeholder:text-gray-400 py-3 hover:bg-transparent focus:bg-transparent"
              size="large"
              name="password"
            />
          </Form.Item>

        <Form.Item>
        <button
            className="bg-red-600 h-12 text-white text-lg w-full   rounded-lg  mt-14 "  >
          Reset Password
          </button>
        </Form.Item>
      </Form>
      </div>
     
    </AuthWrapper>
  );
};

export default SetNewPassword;
