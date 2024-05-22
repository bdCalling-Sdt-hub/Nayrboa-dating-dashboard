import {  Modal } from "antd";
import user from '@/assets/user.jpg'
import bg from '@/assets/bg.png'
import { Link } from "react-router-dom";
interface OfferModelProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }
const NotificationModal: React.FC<OfferModelProps> = ({ open, setOpen }) => {
    const handleCancel = () => {
        setOpen(false);
      };
    return (
        <div className="bg-[#29363C]">
             <Modal open={open} onCancel={handleCancel} footer={false} >
 <h1 className=" text-lg text-white pt-4 pb-2 px-3 "> Notification</h1> 
 <p className=" border-y px-3 me-10"></p>

 <div className="flex gap-2 items-center mt-4 relative">
    <img src={user} alt=""  className="h-12 w-12 rounded-full"/>
    <p className="text-lg"> <span className="font-medium"> Mim Akter </span> send  a massage  </p>
 </div>
 <div className="flex gap-2 items-center mt-4">
    <img src={bg} alt=""  className="h-12 w-12 rounded-full"/>
    <p className="text-lg"> <span className="font-medium"> Mim Akter </span> send  a massage  </p>
 </div>
 <div className="flex gap-2 items-center mt-4">
    <img src={user} alt=""  className="h-12 w-12 rounded-full"/>
    <p className="text-lg"> <span className="font-medium"> Mim Akter </span> send  a massage  </p>
 </div>
 <div className="flex gap-2 items-center mt-4">
    <img src={bg} alt=""  className="h-12 w-12 rounded-full"/>
    <p className="text-lg"> <span className="font-medium"> Mim Akter </span> send  a massage  </p>
 </div>
 <div className="flex gap-2 items-center mt-4 mb-4">
    <img src={user} alt=""  className="h-12 w-12 rounded-full"/>
    <p className="text-lg"> <span className="font-medium"> Mim Akter </span> send  a massage  </p>
 </div>

 <Link to='/notification'>  <button className="text-red-600  underline text-lg absolute bottom-3 end-10 "> View All</button>  </Link> 

             </Modal>
        </div>
    );
};

export default NotificationModal;