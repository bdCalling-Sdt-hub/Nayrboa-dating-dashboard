import { Form,Input, Modal } from "antd";
import Button from "../share/Button";

interface OfferModelProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }
const ContactModal: React.FC<OfferModelProps> = ({ open, setOpen }) => {
    const handleCancel = () => {
        setOpen(false);
      };
    return (
        <div>
            <Modal open={open} onCancel={handleCancel} footer={false} >

<Form  className="relative mb-5 mt-10" layout="vertical">
          <Form.Item
      
            name="phoneNum"
            label={<p className="text-white text-lg  ">Phone Number</p>}
          >
            <Input
              placeholder=" +8801888888997"
              type="number"
              className="bg-[#2E3C43] border text-white border-[#3a3a3a] placeholder:text-gray-400 py-3 hover:bg-transparent focus:bg-transparent"
              size="large"
            />
          </Form.Item>
          <Form.Item name="email" label={<p className="text-white text-lg ">Email</p>}>
            <Input
              placeholder="mithila@gmail.com"
              className="bg-[#2E3C43] border text-white border-[#3a3a3a] placeholder:text-gray-400 py-3 hover:bg-transparent focus:bg-transparent mb-7"
              size="large"
            />
          </Form.Item>         
          </Form>
          <Button className=" w-1/4  absolute bottom-2 end-5">save</Button>
            </Modal>
           
        </div>
    );
};

export default ContactModal;