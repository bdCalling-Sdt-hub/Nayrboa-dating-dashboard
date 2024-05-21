/* eslint-disable @typescript-eslint/no-explicit-any */

import ModelComponent from "@/components/share/ModelComponent";
import Title from "@/components/share/Title";
import {  Table } from "antd";
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react' 
import { useState } from "react";
import image from "../assets/article.png";
import rating from "@/assets/YellowStar.png";
import dot from "@/assets/dot.png";
import downBtn from "@/assets/down.png";


const data = [...Array(12).keys()].map((item, index) => ({
  sId: index + 1,
  name: <div className=" flex  gap-2 items-center"> <img src={image} className="w-9 h-9 rounded-full" alt="" /> <span> Mithila</span> </div>  ,
  email: "mithila@gmail.com" ,
  date: "December 9,2024" ,
  location: "Bangladesh" ,
  rating: <div className=" flex  gap-2 items-center text-center"> <img src={rating} className="w-4 h-4 rounded" alt="" /> <span> (4.5)</span> </div> ,
 
  action: {
    sId: index + 1,
    image: <img src={image} className="w-9 h-9 rounded" alt="" />,
    name: "Fahim",
    email: "fahim@gmail.com",
    status: "active",
    dateOfBirth: "24-05-2024",
    contact: "0521545861520",
  },
}));

const TrainingArticle = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [openModel, setOpenModel] = useState(false);
  const pageSize = 10;
  const columns = [
    {
      title: "S.N.",
      dataIndex: "sId",
      key: "sId",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
    },
    
    {
      title: <div className="">Actions</div>,
      dataIndex: "action",
      key: "action",
      render: (_: any, data: any) => (
        <div className=" ">
          <button onClick={showModal} className="text-white">
           <img src={dot} alt="" />
          </button>
          
        </div>
      ),
    },
  ];

  const handlePage = (page: any) => {
    setCurrentPage(page);
  };

  const showModal = () => {
    setOpenModel(true);
  };

  return (
    <div className=" bg-[#232D32] p-5 rounded">
      <div className="flex justify-between items-center mb-5 ">
      <Title>Total Review</Title>

      <Menu>
        <MenuButton className="inline-flex items-center gap-2 rounded-md  py-1.5 px-3 text-sm/6  text-white bg-[#29363C] shadow-inner  focus:outline-none">
          Feb-24-2024
   <img src={downBtn} alt="" />
        </MenuButton>
        <Transition
          enter="transition ease-out duration-75"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <MenuItems
            anchor="bottom end"
            className="w-32 origin-top-right rounded-lg border border-white bg-[#29363C] p-1 text-sm/6 text-white  focus:outline-none"
          >
            <MenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">              
              Feb-26-2024             
              </button>
            </MenuItem>
            <MenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">                
              Mar-02-2024            
              </button>
            </MenuItem>
           
                        
          </MenuItems>
        </Transition>
      </Menu>
      </div>
      <Table
        dataSource={data}
        columns={columns}
        pagination={{
          pageSize,
          total: 50,
          current: currentPage,
          onChange: handlePage,
        }}
        
        rowHoverable={false}
      />
      <ModelComponent
        openModel={openModel}
        setOpenModel={setOpenModel}
        data={""}
        type="article"
      />
    </div>
  );
};

export default TrainingArticle;
