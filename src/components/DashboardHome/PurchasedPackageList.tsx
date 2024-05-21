import { Table } from "antd";
import { Link } from "react-router-dom";
import image from "../../assets/user.jpg";
import Title from "../share/Title";

const data = [...Array(4).keys()].map((item, index) => ({
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
  const columns = [
    {
      title: "S.N.",
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
  return (
    <div className="">
 <div className="bg-[#232D32]  p-4 mt-2 rounded ">
      <div className="flex items-center justify-between">
        <Title className=" mb-5">Purchased Package List</Title>
        <Link
          to="/purchase-list"
          className="text-white text-lg underline"
        >
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