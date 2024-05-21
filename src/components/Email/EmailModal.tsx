import {  Modal } from "antd";
import Button from "../share/Button";

interface OfferModelProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const EmailModel: React.FC<OfferModelProps> = ({ open, setOpen }) => {
  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div >
      <Modal open={open} onCancel={handleCancel} footer={false} >
        <h1 className="text-xl mt-12 mb-5 text-white">Feedback Reply</h1> 
      <p className=" text-lg font-thin mb-3 text-[#D9D9D9]">Feedback form: Jullu Jalal </p>
      <p className=" ps-3 pe-5 border text-[#D9D9D9]  border-[#a2a4a7] rounded-lg pt-3  h-[160px] "> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure </p>
         
         <h3 className="  text-lg font-thin mb-3 mt-5 "> Your Reply :</h3>
         <p className=" ps-3 pe-5 border text-[#D9D9D9]  border-[#a2a4a7] rounded-lg pt-3   h-[130px]"> The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p> 

         <Button className=" mx-auto mt-5 px-7">Submit</Button>

      </Modal>
    </div>
  );
};

export default EmailModel;
