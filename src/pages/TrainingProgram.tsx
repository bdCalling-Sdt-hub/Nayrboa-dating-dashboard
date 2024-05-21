/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from "@/components/share/Button";
import Title from "@/components/share/Title";
import { Form, Input } from "antd";
// import { Image } from "lucide-react"; 
import { useState } from "react";
import imgURL from "@/assets/imgURL.png"




const TrainingProgram = () => {
  const [imageUrl, setImageUrl] = useState("");
  
  const onFinish = (valeus: any) => {
    console.log(valeus);
  };
  const handleImage = (e: any) => {
    const file = e.target.files?.[0];
    const url = URL.createObjectURL(file);
    setImageUrl(url);
  };
  return (
    <div className=" bg-[#1C2428] me-[50px]  mb-[50px] mt-[14px] pt-[58px] ps-[36px]">
      <Title className="pb-">Create an events</Title>
      
      <div className="grid grid-cols-2 gap-5">
      
        <div className=" grid-cols-6">
        <Form onFinish={onFinish} layout="vertical">
        <Form.Item
            name="name"
            label={<p className="text-white text-lg ">Events  Name</p>}
          >
            <Input
              placeholder="Events  Name"
              className="bg-[#2E3C43] border text-white border-[#3a3a3a] placeholder:text-gray-400 py-3 hover:bg-transparent focus:bg-transparent"
              size="large"
            />
          </Form.Item>

          <Form.Item
            name="host"
            label={<p className="text-white text-lg ">Hosted by</p>}
          >
            <Input
              placeholder="Hosted by"
              className="bg-[#2E3C43] border text-white border-[#3a3a3a] placeholder:text-gray-400 py-3 hover:bg-transparent focus:bg-transparent"
              size="large"
            />
          </Form.Item>

          <Form.Item
            name=" startDate"
            
            label={<p className="text-white text-lg ">Start Date</p>}
          >
            <Input
              placeholder="mm/dd/yy"
              type="date"
              className="bg-[#2E3C43] border text-white border-[#3a3a3a] placeholder:text-gray-400 py-3 hover:bg-transparent focus:bg-transparent"
              size="large"
              min="1997-01-01" 
              max="2030-12-31"
            />
          </Form.Item>

          <Form.Item
            name=" endDate"
            
            label={<p className="text-white text-lg ">End Date</p>}
          >
            <Input
              placeholder="mm/dd/yy"
              type="date"
              className="bg-[#2E3C43] border text-white border-[#3a3a3a] placeholder:text-gray-400 py-3 hover:bg-transparent focus:bg-transparent"
              size="large"
              min="1997-01-01" 
              max="2030-12-31"
            />
          </Form.Item>

          <Form.Item
            name="eventType"
            label={<p className="text-white text-lg ">Event Type</p>}
          >
            <Input
              placeholder="onsite"
              className="bg-[#2E3C43] border text-white border-[#3a3a3a] placeholder:text-gray-400 py-3 hover:bg-transparent focus:bg-transparent"
              size="large"
            />
          </Form.Item>

          <Form.Item
            name="location"
            label={<p className="text-white text-lg ">Location</p>}
          >
            <Input
              placeholder="location.."
              className="bg-[#2E3C43] border text-white border-[#3a3a3a] placeholder:text-gray-400 py-3 hover:bg-transparent focus:bg-transparent"
              size="large"
            />
          </Form.Item>

          <Form.Item
            name="name"
            label={<p className="text-white text-lg ">Description</p>}
          >
         <textarea name="postContent" rows={4} cols={40} />
          </Form.Item>

          </Form>
        </div>

        <div className=" grid-cols-6">
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
  
          <div>
       <h2 className="text-md mb-2">Training Program Thumbnail</h2>
       <input
         type="file"
         className=" hidden"
         id="image"
         onChange={handleImage}
       />
       <label
         htmlFor="image"
         className="w-full border rounded flex justify-center items-center h-36 cursor-pointer"
       >
         {imageUrl ? (
           <img
             src={imageUrl}
             className="w-full h-full object-cover rounded"
             alt=""
           />
         ) : (
           <img src={imgURL} alt="" className="text-white "/>
         )}
       </label>
     </div>
        </div>
      
      <div>
     
       {/* <Form.Item
         label={<div className="text-white">Training Program Name</div>}
       >
         <Input
           placeholder="Enter package name"
           className="h-12 bg-transparent hover:bg-transparent focus:bg-transparent placeholder:text-gray-500 text-white"
         />
       </Form.Item>
    
      */}

 </div>
      </div>

    </div>
  );
};

export default TrainingProgram;
