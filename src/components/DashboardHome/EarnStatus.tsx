// import { DollarSignIcon, User } from "lucide-react"; 
import icon from '@/assets/icon.png'
import star from '@/assets/star.png'
const EarnStatus = () => {
  const earnStatus = [
    {
      count: '576+',
       title: 'Total User',
      icon: <img src=" https://s3-alpha-sig.figma.com/img/ea3d/5d0e/b59bfcec1350a31c0e1c871cbb1090d4?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jvaRJNJxDGUOGUqJgKsaNAxoG78BwM94AAd~17vHut1pMbTZ2Tx4efeVv882NC0G~i~fLnYf4WgbVeAtLddkRRSS0iPXDA6LZLr6ef4KUP0ch3drV38oZkoxezw7cjqe9zEBnr2A5e4Kg6P1rB~IbFbhp5ILXMDRFy9EaNOalA4pvkjJxVdEftpLQFK~5ktLxhQ-0yIXFOVzV8ieg3daBtfa9AwWtlBar64oLaXiX7rOvAYfwGAVkl2iBXwGb~SmdRs7Rzyn4GjnvJLM9qE4PQrE5C7HV7jtAa1TbcpqgPxVTyN7Gc0HnW-H2Cp0uuBme-PU--onKsdBHtga8KmEsA__" alt="" width={32} height={32} />,
      color: "#D2F6FF",
      bgColor: '#FFFFFF',
    },
    {
      count: '258+',
       title: 'Total Man',
      icon: <img src="https://s3-alpha-sig.figma.com/img/5425/ed62/b604dde087fc33f18062044f91500470?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GWHnDsA-8ylpER5uEQrdbfi46DSb7KBZJDCoKxi96npsRAcSSG~vbRtXf89bMmvTTfU3a7ls2VPbFLjEBmw8FuB5PxE93H8va~G5A3cpfHv2zsidfwuZQ8FjJJBBDHbvC2PWgYHrNnWj0YYn5OfnXwN7~zCFW41CPt7xzNwXeKpGz9pr~eZxIE8xzKf6jcSHCV746a99NE8hmul48Pu0L3k6-cRYCdHXmDd2nGjxYVeXqBBtYbN5H5~-b1fFarrJBWJ9Z5HG~HgLtsLhEqk611UfHGfanxmFdB4hFxXHHK1bwEBDNRl14tV-NtX7bJZWT0QWkD1p7cGVwdxPWGy76w__" alt="" width={32} height={32} />,
      color: "#D2F6FF",
      bgColor: '#FFE3C7',
    },
    {
      count: '865+',
       title: 'Total Women',
      icon: <img src={icon} alt="" width={32} height={32} />,
      color: "#D2F6FF",
      bgColor: '#514d34',
    },
    {
      count: '865+',
       title: 'Total review',
      icon: <img src={star} alt="" width={32} height={32} />,
      color: "#D2F6FF",
      bgColor: '#DDE0FF',
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
          <h2 className="text-[32px] font-semibold text-[#F7F7F7]">{data.count}</h2>
            <h3 className="text-[16px] font-normal text-[#F7F7F7]">{data.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EarnStatus;
