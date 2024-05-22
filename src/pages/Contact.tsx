/* eslint-disable @typescript-eslint/no-explicit-any */

import Button from "@/components/share/Button";
import Title from "@/components/share/Title";
import { useState } from "react";
import phnImg from '@/assets/phnImg.png'
import mail from '@/assets/mail.png'
import edit from '@/assets/edit.png'
import ContactModal from "@/components/Contact/ContactModal";

const Contact = () => {
  const [open, setOpen] = useState(false);
   const showModal = () => {
    setOpen(true);
  };



 
  const earnStatus = [
    
    {
      count: '865+',
       title: 'Contact Us ( 10AM- 7 PM )',
       title2: '16793 / 0325624556' ,
      icon: <img src={phnImg} alt="" width={32} height={32} />,
      color: "#D2F6FF",
      bgColor: '#00A49B',
    },
    {
      count: '865+',
       title: 'For Corporate Deals & Complain',
       title2: 'letstalk@gmail.com' ,
      icon: <img src={mail} alt="" width={32} height={32} />,
      color: "#D2F6FF",
      bgColor: '#00A49B',
    },
  ];

  return (
    <div className=" bg-[#151B1E] ps-9 pb-52 rounded">
      <Title className="pt-9 pb-7">Contact Us</Title>
      <div className="flex gap-2 items-center  pb-[44px]">
      <div className="grid grid-cols-2 gap-8">
      {earnStatus.map((data, index) => (
        <div
          key={index}
          className="flex items-center gap-6  p-5 rounded bg-[#232D32] w-[455px]"
        >
          <div
            className="w-16 h-16 flex items-center justify-center rounded-full"
            style={{ background: data.bgColor, color: data.color }}
          >
            {data.icon}
          </div>
          <div>
          <h2 className="text-[16px] font-normal text-[#F7F7F7]">{data.title}</h2>
            <h3 className="text-[16px] font-normal text-[#F7F7F7] mt-2">{data.title2}</h3>
          </div>
        </div>
      ))}
    </div>
<div>
   </div>

        <Button onClick={showModal} className="px-6" >
          Add Number 
        </Button>
      </div>
 {/* modal  */}
      <ContactModal open={open}  setOpen={setOpen}  />


<div className=" flex  items-center gap-3 pb-10">
<div className="flex gap-3 items-center  p-2 ps-4 pe-4 bg-[#232D32] rounded">
        <img src={mail} alt="" className=" w-12 h-12 p-2  bg-red-700  text-white rounded-full" />
        <p className=" text-white text-lg font-normal"> letstalk@gmail.com</p>
        <p className=" border-e border-white h-7 border "></p>

        <img src={phnImg} alt="" className=" w-12 h-12 p-2  bg-red-700  text-white rounded-full" />
        <p className=" text-white text-lg font-normal"> letstalk@gmail.com</p>
        <p className=" border-e border-white h-7 border "></p>

        <img src={phnImg} alt="" className=" w-12 h-12 p-2  bg-red-700  text-white rounded-full" />
        <p className=" text-white text-lg font-normal"> letstalk@gmail.com</p>
        <p className=" border-e border-white h-7 border "></p>

        <img src={phnImg} alt="" className=" w-12 h-12 p-2  bg-red-700  text-white rounded-full" />
        <p className=" text-white text-lg font-normal"> letstalk@gmail.com</p>
      </div>
      <img src={edit} alt="" className="w-14 h-14 p-2  bg-[#F9E6E6]   rounded-full" />
</div>
<div className=" flex  items-center gap-3 pb-10">
<div className="flex gap-3 items-center  p-2 ps-4 pe-4 bg-[#232D32] rounded">
        <img src={mail} alt="" className=" w-12 h-12 p-2  bg-red-700  text-white rounded-full" />
        <p className=" text-white text-lg font-normal"> letstalk@gmail.com</p>
        <p className=" border-e border-white h-7 border "></p>

        <img src={phnImg} alt="" className=" w-12 h-12 p-2  bg-red-700  text-white rounded-full" />
        <p className=" text-white text-lg font-normal"> letstalk@gmail.com</p>
        <p className=" border-e border-white h-7 border "></p>

        <img src={phnImg} alt="" className=" w-12 h-12 p-2  bg-red-700  text-white rounded-full" />
        <p className=" text-white text-lg font-normal"> letstalk@gmail.com</p>
        <p className=" border-e border-white h-7 border "></p>

        <img src={phnImg} alt="" className=" w-12 h-12 p-2  bg-red-700  text-white rounded-full" />
        <p className=" text-white text-lg font-normal"> letstalk@gmail.com</p>
      </div>
      <img src={edit} alt="" className="w-14 h-14 p-2  bg-[#F9E6E6]   rounded-full" />
</div>

<div className=" flex  items-center gap-3 pb-10">
<div className="flex gap-3 items-center  p-2 ps-4 pe-4 bg-[#232D32] rounded">
        <img src={mail} alt="" className=" w-12 h-12 p-2  bg-red-700  text-white rounded-full" />
        <p className=" text-white text-lg font-normal"> letstalk@gmail.com</p>
        <p className=" border-e border-white h-7 border "></p>

        <img src={phnImg} alt="" className=" w-12 h-12 p-2  bg-red-700  text-white rounded-full" />
        <p className=" text-white text-lg font-normal"> letstalk@gmail.com</p>
        <p className=" border-e border-white h-7 border "></p>

        <img src={phnImg} alt="" className=" w-12 h-12 p-2  bg-red-700  text-white rounded-full" />
        <p className=" text-white text-lg font-normal"> letstalk@gmail.com</p>
        <p className=" border-e border-white h-7 border "></p>

        <img src={phnImg} alt="" className=" w-12 h-12 p-2  bg-red-700  text-white rounded-full" />
        <p className=" text-white text-lg font-normal"> letstalk@gmail.com</p>
      </div>
      <img src={edit} alt="" className="w-14 h-14 p-2  bg-[#F9E6E6]   rounded-full" />
</div>
<div className=" flex  items-center gap-3 pb-10">
<div className="flex gap-3 items-center  p-2 ps-4 pe-4 bg-[#232D32] rounded">
        <img src={mail} alt="" className=" w-12 h-12 p-2  bg-red-700  text-white rounded-full" />
        <p className=" text-white text-lg font-normal"> letstalk@gmail.com</p>
        <p className=" border-e border-white h-7 border "></p>

        <img src={phnImg} alt="" className=" w-12 h-12 p-2  bg-red-700  text-white rounded-full" />
        <p className=" text-white text-lg font-normal"> letstalk@gmail.com</p>
        <p className=" border-e border-white h-7 border "></p>

        <img src={phnImg} alt="" className=" w-12 h-12 p-2  bg-red-700  text-white rounded-full" />
        <p className=" text-white text-lg font-normal"> letstalk@gmail.com</p>
        <p className=" border-e border-white h-7 border "></p>

        <img src={phnImg} alt="" className=" w-12 h-12 p-2  bg-red-700  text-white rounded-full" />
        <p className=" text-white text-lg font-normal"> letstalk@gmail.com</p>
      </div>
      <img src={edit} alt="" className="w-14 h-14 p-2  bg-[#F9E6E6]   rounded-full" />
</div>
      
    </div>
  );
};

export default Contact;
