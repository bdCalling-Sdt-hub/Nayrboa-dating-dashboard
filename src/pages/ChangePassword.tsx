import Button from "@/components/share/Button";
import Title from "@/components/share/Title";
import { Form, Input } from "antd";


const ChangePassword = () => {
  const onFinish = (values) => {
    console.log("Received values of form:", values);
  };

  return (
    <div className="bg-[#1C2428] pb-44">
      <Title className="ms-[510px] mb-5 pt-16">Changes password</Title>
      <div className="bg-[#2E3C43] w-1/3 mx-auto p-7 rounded  ">
        <Form onFinish={onFinish} layout="vertical" className="px-5">
          <h1 className=" text-center text-xl font-medium text-white mb-8 mt-10"> Change Password</h1>
          <Form.Item label={<div className="text-white">Current password</div>}>
            <Input
              placeholder="Enter current password"
              className="h-12 bg-transparent hover:bg-transparent focus:bg-transparent placeholder:text-gray-500 text-white mb-2"
            />
          </Form.Item>
          <Form.Item label={<div className="text-white">New password</div>}>
            <Input
              placeholder="Enter new password"
              className="h-12 bg-transparent hover:bg-transparent focus:bg-transparent placeholder:text-gray-500 text-white  mb-2"
            />
          </Form.Item>
          <Form.Item label={<div className="text-white">Confirm password</div>}>
            <Input
              placeholder="Enter confirm password"
              className="h-12 bg-transparent hover:bg-transparent focus:bg-transparent placeholder:text-gray-500 text-white  mb-2"
            />
          </Form.Item>

          <Form.Item> 
            <div className="flex gap-5 justify-center">
            <button className="px-5 py-2 border border-white text-white rounded">Reset</button>
            <Button>Save Changes</Button>
            </div>
           
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ChangePassword;
