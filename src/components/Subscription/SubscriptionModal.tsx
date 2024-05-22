import { Form, Input, Modal } from "antd";
import Button from "../share/Button"; 

const { TextArea } = Input;

interface OfferModelProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }
const SubscriptionModal: React.FC<OfferModelProps> = ({ open, setOpen }) => {
    const handleCancel = () => {
        setOpen(false);
      };
      const onFinish = (valeus: any) => {
        console.log(valeus);
      };

      const defaultArray = ["Have 3 Interests", "Have 4 pictures", " Have 4 pictures" , "Indicate a relationship goal" ,"Indicate a relationship goal" ,"Indicate a relationship goal" , "Be Photo Verified"];

    
    return (
        <div>
               <Modal open={open} onCancel={handleCancel} footer={false} >
        <h1 className="text-xl mt-12 mb-6 text-white">Edit Subscription</h1>
        <Form onFinish={onFinish} layout="vertical">
          <Form.Item
            name="name"
            label={<p className="text-white text-lg ">Title</p>}
          >
            <Input
            //   placeholder="Enter full name" 
            defaultValue="Basic"
              className="bg-[#2E3C43] border text-white border-[#3a3a3a] placeholder:text-gray-400 py-3 hover:bg-transparent focus:bg-transparent"
              size="large"
            />
          </Form.Item>
          <Form.Item name="email" label={<p className="text-white text-lg">Description </p>}>
          <TextArea
   defaultValue={defaultArray.join('\n')}
    className="bg-[#2E3C43] border text-white border-[#3a3a3a] placeholder:text-gray-400 py-3 hover:bg-transparent focus:bg-transparent"
    size="large"
    rows={10}
  />
           
          </Form.Item>
   
          <Button className=" w-full mx-auto mt-5">Edit</Button>
        </Form>
      </Modal>
        </div>
    );
};

export default SubscriptionModal;