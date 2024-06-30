// import { DollarSignIcon, User } from "lucide-react";
import icon from "@/assets/icon.png";
import star from "@/assets/star.png";
const EarnStatus = () => {
  const earnStatus = [
    {
      count: "576+",
      title: "Total User",
      icon: <img src={icon} alt="" width={32} height={32} />,
      color: "#D2F6FF",
      bgColor: "#FFFFFF",
    },
    {
      count: "258+",
      title: "Total Man",
      icon: <img src={star} alt="" width={32} height={32} />,
      color: "#D2F6FF",
      bgColor: "#FFE3C7",
    },
    {
      count: "865+",
      title: "Total Women",
      icon: <img src={icon} alt="" width={32} height={32} />,
      color: "#D2F6FF",
      bgColor: "#514d34",
    },
    {
      count: "865+",
      title: "Total review",
      icon: <img src={star} alt="" width={32} height={32} />,
      color: "#D2F6FF",
      bgColor: "#DDE0FF",
    },
  ];
  return (
    <div className="grid grid-cols-4 gap-2">
      {earnStatus.map((data, index) => (
        <div
          key={index}
          className="flex items-center gap-5  p-5 rounded bg-[#232D32]"
        >
          <div
            className="w-16 h-16 flex items-center justify-center rounded-full"
            style={{ background: data.bgColor, color: data.color }}
          >
            {data.icon}
          </div>
          <div>
            <h2 className="text-[32px] font-semibold text-[#F7F7F7]">
              {data.count}
            </h2>
            <h3 className="text-[16px] font-normal text-[#F7F7F7]">
              {data.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EarnStatus;
