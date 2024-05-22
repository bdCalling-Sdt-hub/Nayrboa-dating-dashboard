import { Form, Input, Modal } from "antd";
import Button from "../share/Button";

interface OfferModelProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AdminModel: React.FC<OfferModelProps> = ({ open, setOpen }) => {
  const handleCancel = () => {
    setOpen(false);
  };
  const onFinish = (valeus: any) => {
    console.log(valeus);
  };

  return (
    <div >
      <Modal open={open} onCancel={handleCancel} footer={false} >
        <h1 className="text-xl mt-12 mb-6 text-white">Make Admin</h1>
        <Form onFinish={onFinish} layout="vertical">
          <Form.Item
            name="name"
            label={<p className="text-white text-lg ">Full Name</p>}
          >
            <Input
              placeholder="Enter full name"
              className="bg-[#2E3C43] border text-white border-[#3a3a3a] placeholder:text-gray-400 py-3 hover:bg-transparent focus:bg-transparent"
              size="large"
            />
          </Form.Item>
          <Form.Item name="email" label={<p className="text-white text-lg">E-mail</p>}>
            <Input
              placeholder="Enter admin email"
              className="bg-[#2E3C43] border text-white border-[#3a3a3a] placeholder:text-gray-400 py-3 hover:bg-transparent focus:bg-transparent"
              size="large"
            />
          </Form.Item>
          <Form.Item
            name="password"
            label={<p className="text-white text-lg">Password</p>}
          >
            <Input.Password
              placeholder="Enter admin password"
              className="bg-[#2E3C43] border text-white border-[#3a3a3a] placeholder:text-gray-400 py-3 hover:bg-transparent focus:bg-transparent"
              size="large"
              name="password"
            />
          </Form.Item>
          <Form.Item name="email" label={<p className="text-white text-lg">User-Type</p>}>
            <Input
              placeholder="Admin"
              className="bg-[#2E3C43] border text-white border-[#3a3a3a] placeholder:text-gray-400 py-3 hover:bg-transparent focus:bg-transparent"
              size="large"
            />
          </Form.Item>
          <Button className=" w-full mx-auto mt-5">Submit</Button>
        </Form>
      </Modal>
    </div>
  );
};

export default AdminModel;
