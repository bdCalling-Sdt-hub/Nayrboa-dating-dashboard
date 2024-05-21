/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from "@/components/share/Button";
import ModelComponent from "@/components/share/ModelComponent";
import Title from "@/components/share/Title";
import { Table } from "antd";
import { CalendarCheck, ExternalLink} from "lucide-react";
import { useState } from "react";
import image from "../assets/user.jpg";
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react' 
import filterbtn from '@/assets/filter.png'
import Searchbtn from '@/assets/Search.png'

const data = [...Array(9).keys()].map((item, index) => ({
  sId: index + 1,
  image: <img src={image} className="w-9 h-9 rounded" alt="" />,
  name: "Fahim",
  email: "fahim@gmail.com",
  status: "active",
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

const UserDetails = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [openModel, setOpenModel] = useState(false);
  const [userData, setUserData] = useState({});
  const [type, setType] = useState("");

  const pageSize = 10;
  const columns = [
    {
      title: "S.N.",
      dataIndex: "sId",
      key: "sId",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
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
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: <div className="text-center ">Action</div>,
      dataIndex: "action",
      key: "action",
      render: (_: any, data: any) => (
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => handleUser(data.action)}
            className="hover:bg-primary p-1 rounded  border border-white"
          >
            <ExternalLink />
          </button>
          <button className="bg-secondary px-3 py-1 rounded ">
            Block
          </button>
        </div>
      ),
    },
  ];

  const handlePage = (page: any) => {
    setCurrentPage(page);
  };

  const handleUser = (values) => {
    setUserData(values);
    setOpenModel(true);
    setType("user");
  };

  return (
    <div>
      <Title> Total User List</Title>
      <div className=" flex justify-between items-center px-0 pr-5"
          style={{ 
            height: "80px",    
          }}
        >
          <div className='max-w-md   text-white  rounded-md'>
    <div className="relative flex items-center w-[352px] h-12 rounded-lg focus-within:shadow-lg bg-[#29363C] overflow-hidden">
        <div className="grid place-items-center h-full  text-white p-3">
          <img src={Searchbtn} alt="" className="h-6 w-6 " />
        </div>
      <input
        className="peer h-full w-full outline-none text-sm  pr-2 bg-[#29363C]"
        type="text"
        id="search"
        placeholder="Search something.." /> 
    </div>
</div>

          <div className="flex items-center gap-5">
      <Menu>
        <MenuButton className="inline-flex items-center gap-2 rounded-md border-white border py-1.5 px-3 text-sm/6  text-white bg-[#29363C] shadow-inner  focus:outline-none">
          Filters
   <img src={filterbtn} alt="" />
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
                Edit               
              </button>
            </MenuItem>
            <MenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">                
                Duplicate               
              </button>
            </MenuItem>
           
                        
          </MenuItems>
        </Transition>
      </Menu>
  
      <Button
            className="inline-flex items-center gap-2 rounded-md border-white border py-1.5 px-3 text-sm/6 bg-[#29363C]  text-white shadow-inner  focus:outline-none"
            onClick={() => {
              setOpenModel(true);
              setType("schedule");
            }}
            icon={<CalendarCheck size={20} />}
          >
            Schedule
          </Button>
  
  
          </div>
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
        data={userData}
        type={type}
      />
    </div>
  );
};

export default UserDetails;
