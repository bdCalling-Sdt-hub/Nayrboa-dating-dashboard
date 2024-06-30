import { Table } from "antd";
import { Link } from "react-router-dom";
import image from "../../assets/user.jpg";
import Title from "../share/Title";
import { Tag } from "antd";
import { Dropdown, Menu, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { CiMenuKebab } from "react-icons/ci";
const menu = (
  <Menu>
    <Menu.Item key="1">
      <a href="#">View</a>
    </Menu.Item>
    <Menu.Item key="2">
      <a href="#">Delete</a>
    </Menu.Item>
  </Menu>
);

const data = [...Array(3).keys()].map((item, index) => ({
  sId: index + 1,
  user: (
    <figure className="flex items-center gap-2">
      <img src={image} className="w-9 h-9 rounded" alt="" />
      <figcaption>Tushar</figcaption>
    </figure>
  ),
  name: `Tushar ${index}`,
  email: "tushar@gmail.com",
  date: "2024-10-25",
  location: "United state",
  coin: `10${index}`,
  states: ["Active"],
  action: (
    <Dropdown overlay={menu} trigger={["click"]}>
      <Button onClick={(e) => e.preventDefault()}>
        <CiMenuKebab />
      </Button>
    </Dropdown>
  ),
}));

const PurchasedPackageList = () => {
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
      title: "Locations",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Coins",
      dataIndex: "coin",
      key: "coin",
    },
    {
      title: "State",
      dataIndex: "states",
      key: ["Active"],
      render: (_, { states }) => (
        <>
          {states?.map((state) => {
            let color;
            if (state === "Active") {
              color = "red";
            }
            return (
              <Tag color={color} key={state}>
                {state.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Actions",
      dataIndex: "action",
      key: "action",
    },
  ];
  return (
    <div className="">
      <div className="bg-[#232D32]  p-4 mt-2 rounded ">
        <div className="flex items-center justify-between">
          <Title className=" mb-5">Total user list</Title>
          <Link to="/user-list" className="text-white text-lg underline">
            View All
          </Link>
        </div>
        <Table
          dataSource={data}
          columns={columns}
          pagination={false}
          rowHoverable={false}
          bordered={false}
        />
      </div>
    </div>
  );
};

export default PurchasedPackageList;
