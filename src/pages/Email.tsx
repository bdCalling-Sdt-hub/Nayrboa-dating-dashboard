/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import image from "../assets/user.jpg";
import Title from "@/components/share/Title";
import { Table } from "antd";
import { Trash2 } from "lucide-react";
import arrow from "@/assets/Frame.png"
import EmailModel from "@/components/Email/EmailModal";

const data = [...Array(15).keys()].map((item, index) => ({
  
  
  name: "Fahim",
  discription: "Our Bachelor of Commerce program is ACBSP-accredited.",
  time: "8:35 Am" ,
  status: <p>  <Trash2 /> </p>,
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


const Email = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const pageSize = 10;
  const columns = [
    

    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Discription",
      dataIndex: "discription",
      key: "discription",
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
    },
   
    {
      title: <div className="text-center ">Action</div>,
      dataIndex: "action",
      key: "action",
      render: (_: any, data: any) => (
        <div className="flex items-center justify-center gap-3 px-3 py-1 rounded border border-red-600 w-1/2 mx-auto" onClick={showModal} >
          <img src={arrow} alt=""  />
         <p className="text-red-600"> Replied </p>
       </div>
      ),
    },
    {
      title: " ",
      dataIndex: "status",
      key: "status",
    },
  ];

  const handlePage = (page: any) => {
    setCurrentPage(page);
  };


  return (
    <div style={{backgroundColor:"#232d32",borderRadius:"5px",height:"98%",overflow:"scroll"}}>
    <h1 className="text-xl text-white" style={{paddingLeft:"30px",paddingTop:"20px",marginBottom:"20px",fontWeight:"semibold"}}>Email</h1>
  
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
     <EmailModel open={open} setOpen={setOpen} />
  </div>
  );
};

export default Email;
