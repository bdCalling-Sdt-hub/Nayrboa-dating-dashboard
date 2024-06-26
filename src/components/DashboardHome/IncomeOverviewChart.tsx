import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import Title from "../share/Title";
const IncomeOverviewChart = () => {
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
  return (
    <div className="bg-[#232D32] rounded p-4 ">
      <Title className=" mb-5">Subscription Growth</Title>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart height={250} data={data} barSize={20}>
          <defs>
            <linearGradient id="colorAmt" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#dd1122" stopOpacity={1} />
              <stop offset="95%" stopColor="#dd1122" stopOpacity={0.5} />
            </linearGradient>
          </defs>

          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="amt" fill="url(#colorAmt)" radius={[20, 20, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default IncomeOverviewChart;
