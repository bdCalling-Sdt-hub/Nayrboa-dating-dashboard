import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Title from "../share/Title";

const data = [
  {
    name: "Jan",
    amt: 1700,
  },
  {
    name: "Fab",
    amt: 1510,
  },
  {
    name: "Mar",
    amt: 1990,
  },
  {
    name: "Apr",
    amt: 1600,
  },
  {
    name: "May",
    amt: 2281,
  },
  {
    name: "Jun",
    amt: 1500,
  },
  {
    name: "July",
    amt: 1800,
  },
  {
    name: "Aug",
    amt: 1300,
  },
  {
    name: "Sep",
    amt: 1500,
  },
  {
    name: "Oct",
    amt: 2000,
  },
  {
    name: "Nov",
    amt: 900,
  },
  {
    name: "Dec",
    amt: 2100,
  },
];
const SealOverviewChart = () => {
  return (
    <div className="bg-[#232D32] rounded p-4 text-gray-300">
      <Title className=" mb-5">Monthly Growth</Title>
      <ResponsiveContainer width="100%" className="h-[300px]" height={300}>
        <AreaChart data={data} syncId="anyId">
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="amt" stroke="#00D6FF" fill="#00D6FF" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SealOverviewChart;
