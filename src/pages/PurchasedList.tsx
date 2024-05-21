import Title from "@/components/share/Title";
import { Table } from "antd";
import { useState } from "react";
import image from "../assets/user.jpg";
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react' 
import filterbtn from '@/assets/filter.png'
import downbtn from '@/assets/down.png'

const data = [...Array(10).keys()].map((item, index) => ({
  sId: index + 1,
  user: (
    <figure className="flex items-center gap-2">
      <img src={image} className="w-9 h-9 rounded" alt="" />
      <figcaption>Fahim</figcaption>
    </figure>
  ),
  package: "Gold",
  tId: "trx4574485541",
  startDate: "2024-10-25",
  endDate: "2025-10-25",
  payment: "$15",
}));

const PurchasedPackageList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const columns = [
    {
      title: "S.ID",
      dataIndex: "sId",
      key: "sId",
    },
    {
      title: "User",
      dataIndex: "user",
      key: "user",
    },
    {
      title: "Package",
      dataIndex: "package",
      key: "package",
    },
    {
      title: "T.ID",
      dataIndex: "tId",
      key: "tId",
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      key: "startDate",
    },
    {
      title: "End Dime",
      dataIndex: "endDate",
      key: "endDate",
    },
    {
      title: "Payment",
      dataIndex: "payment",
      key: "payment",
    },
  ];
  const handlePage = (page: any) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-[#232D32] rounded p-4 mt-2 ">
      <Title className=" mb-3">Purchased Package List</Title>
          {/* start  Search bar , filter , date   */}
      <div className=" flex justify-between items-center px-0 pr-5"
          style={{ 
            height: "80px",    
          }}
        >
          <div className='max-w-md   text-white border border-white rounded-md'>
    <div className="relative flex items-center w-[352px] h-12 rounded-lg focus-within:shadow-lg bg-[#1C2428] overflow-hidden">
        <div className="grid place-items-center h-full  text-white p-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>

        <input
        className="peer h-full w-full outline-none text-sm  pr-2 bg-[#1C2428]"
        type="text"
        id="search"
        placeholder="Search something.." /> 
    </div>
</div>

          <div className="flex items-center gap-5">
      <Menu>
        <MenuButton className="inline-flex items-center gap-2 rounded-md border-white border py-1.5 px-3 text-sm/6  text-white bg-[#1C2428] shadow-inner  focus:outline-none">
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
            className="w-32 origin-top-right rounded-lg border border-white bg-[#1C2428] p-1 text-sm/6 text-white  focus:outline-none"
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
  
      <Menu>
        <MenuButton className="inline-flex items-center gap-2 rounded-md border-white border py-1.5 px-3 text-sm/6 bg-[#1C2428]  text-white shadow-inner  focus:outline-none">
         Feb-24-2024
   <img src={downbtn} alt="" />
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
            className="w-38 origin-top-right rounded-lg border border-white bg-[#1C2428] p-1 text-sm/6 text-white  focus:outline-none"
          >
            <MenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">              
              Mar-24-2024               
              </button>
            </MenuItem>
            <MenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">                
              Apr-24-2024             
              </button>
            </MenuItem>
           
                        
          </MenuItems>
        </Transition>
      </Menu>
  
  
          </div>
        </div>
      <Table
        dataSource={data}
        columns={columns}
        rowHoverable={false}
        bordered={false}
        pagination={{
          pageSize,
          total: 50,
          current: currentPage,
          onChange: handlePage,
        }}
      />
    </div>
  );
};

export default PurchasedPackageList;
