/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
//import Button from "@/components/share/Button";
import Title from "@/components/share/Title";
import { Form, Input,Button,Flex } from "antd";

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
    <div className=" bg-[#1C2428] me-[50px]  mb-[50px] mt-[14px] pt-[58px] ps-[40px] pe-[120px] rounded" style={{height:"98%",overflow:"scroll"}}>
      <Title className="pb-5 ">Create an events</Title>
      
      <div className="grid grid-cols-2 gap-10">
      
        <div className=" grid-cols-6">
        <Form onFinish={onFinish} layout="vertical">
        <Form.Item
            name="name"
            label={<p className="text-white text-md ">Events  Name</p>}
          >
            <Input
              placeholder="Events  Name"
              className="bg-[#2E3C43] border text-white border-[#3a3a3a] placeholder:text-gray-400 py-3 hover:bg-transparent focus:bg-transparent"
              size="large"
            />
          </Form.Item>

          <Form.Item
            name="host"
            label={<p className="text-white text-md ">Hosted by</p>}
          >
            <Input
              placeholder="Hosted by"
              className="bg-[#2E3C43] border text-white border-[#3a3a3a] placeholder:text-gray-400 py-3 hover:bg-transparent focus:bg-transparent"
              size="large"
            />
          </Form.Item>

          <Form.Item
            name=" startDate"
            
            label={<p className="text-white text-md ">Start Date</p>}
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
            
            label={<p className="text-white text-md ">End Date</p>}
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
            label={<p className="text-white text-md ">Event Type</p>}
          >
            <Input
              placeholder="onsite"
              className="bg-[#2E3C43] border text-white border-[#3a3a3a] placeholder:text-gray-400 py-3 hover:bg-transparent focus:bg-transparent"
              size="large"
            />
          </Form.Item>

          <Form.Item
            name="location"
            label={<p className="text-white text-md ">Location</p>}
          >
            <Input
              placeholder="location.."
              className="bg-[#2E3C43] border text-white border-[#3a3a3a] placeholder:text-gray-400 py-3 hover:bg-transparent focus:bg-transparent"
              size="large"
            />
          </Form.Item>

          <Form.Item
            name="name"
            label={<p className="text-white text-md ">Description</p>}
          >
         <textarea name="description" placeholder="Write here" rows={5} cols={40} className="bg-[#2E3C43] w-full border rounded-lg text-white border-[#3a3a3a] placeholder:text-gray-400 py-3 hover:bg-transparent focus:bg-transparent placeholder:ps-2" />
          </Form.Item>

          </Form>
        </div>

        <div className=" grid-cols-6">
        <Form onFinish={onFinish} layout="vertical"> 
        <Form.Item
            name="category"
            label={<p className="text-white text-md ">Category</p>}
          > 
            <Input
              placeholder="music"
              className="bg-[#2E3C43] border text-white border-[#3a3a3a] placeholder:text-gray-400 py-3 hover:bg-transparent focus:bg-transparent"
              size="large"
            />
          </Form.Item>

  
          <div>
       <h2 className="text-white text-lg mb-2 ">Event Image</h2>
       <input
        
         className=" bg-transparent"
    
         onChange={handleImage}
       />
       <label
         htmlFor="image"
         className="w-full border-2 border-[#2E3C43] rounded-lg flex justify-center items-center h-[340px] cursor-pointer"  onChange={handleImage}
       >
         {imageUrl ? (
           <img
             src={imageUrl}
             className="w-full h-full object-cover rounded"
             alt=""
           />
         ) : (
           <img src={imgURL} alt=""    className="w-[194px] h-[194px] "/>
         )}
       </label>
     </div>

     <Flex vertical gap="small" style={{ width: '100%' }}>
       <Button type="primary" block style={{height:"50px",backgroundColor:"red",marginTop:"10px",fontSize:"18px",fontWeight:"semibold"}}>
     
         Save event
       </Button>
    </Flex>
     
     </Form>
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
