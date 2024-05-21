import {  Badge, Layout, Menu } from "antd";
import frame from '@/assets/Frame.png'
import Calendar from '@/assets/calendar.png'
import review from '@/assets/review.png'
import mail from '@/assets/mail.png'
import person from '@/assets/person.png'
import subscription from '@/assets/subscription.png'
import {
  Bell,
  LayoutDashboard,
  Lock,
  LogOut,
  Settings,
  User2,
  User2Icon,
} from "lucide-react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
const { Header, Sider, Content } = Layout;

const menuItems = [
  {
    path: "/",
    title: "Dashboard",
    icon: <LayoutDashboard width={24} height={24} />,
  },
  {
    path: "/user-details",
    title: "Total User ",
    icon: <User2 width={24} height={24} />,
  },
  {
    path: "/make-admin",
    title: "Make Admin",
    icon: <img src={frame} alt="" width={24} height={24}  />,
    // path: "/manages",
    // title: "Make Admin",
    // icon: <img src={frame} alt="" width={24} height={24}  />,
    // subMenu: [
    //   {
    //     path: "/promo-code",
    //     title: "Manage Promo",
    //     icon: <Container size={18} color="#fff" />,
    //   },
    //   {
    //     path: "/packages",
    //     title: "Manage Package",
    //     icon: <Boxes size={18} color="#fff" />,
    //   },
    // ],
  },
  {
    path: "/training-program",
    title: "Create an events",
    icon: <img src={Calendar} alt="" width={24} height={24}/>,
  },
  {
    path: "/training-articles",
    title: "Total Review",
    icon: <img src={review} alt="" width={24} height={24}/>,
  },
  {
    path: "/chat",
    title: "Email",
    icon: <img src={mail} alt="" width={24} height={24}/>,
  },
  {
    path: "/chat",
    title: "Subscription",
    icon: <img src={subscription} alt="" width={24} height={24}/>,
  },

  {
    path: "/settings",
    title: "Settings",
    icon: <Settings size={18} color="#fff" />,
    subMenu: [
      {
        path: "/about",
        title: "About Us",
      },
      {
        path: "/slider",
        title: "Contact Us",
      },
      {
        path: "/terms-and-conditions",
        title: "Terms & Conditions",
      },
      {
        path: "/privacy-policy",
        title: "Privacy Policy",
      },
      {
        path: "/change-password",
        title: "Change Password",
      },
      
      {
        path: "/faq",
        title: "Profile",
      },
    ],
  }, 
];

const content = (
  <div className="w-40">
    <p className="mb-2">
      {" "}
      <Link to="/profile" className="flex items-center gap-2">
        {" "}
        <User2Icon size={18} /> <span className="text-md">Profile</span>
      </Link>
    </p>
    <p className="mb-3">
      {" "}
      <Link to="/change-password" className="flex items-center gap-2">
        {" "}
        <Lock size={18} /> <span className="text-md">Change password</span>
      </Link>
    </p>
  </div>
);
const { SubMenu } = Menu;

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/auth/login");
  };
  return (
    <Layout>
      <Sider
        width={300}
        
        className="sidebar-menu "
        style={{
          overflow: "auto",
          zIndex: 2,
          backgroundColor: "#232D32",
          height:"100vh"
        }}
        trigger={null}
      >
        <img src={logo} alt="" className=" mx-auto mb-[34px] mt-[50px] w-[100px] h-[47px] " />
        <Menu
          mode="inline"
          className="mx-auto"
          style={{ background: "#232D32", color: "white" , width: '232px'   }}
         
          defaultSelectedKeys={["1"]}
        >
          {menuItems.map((item, index) =>
            item.subMenu ? (
              <SubMenu
                key={`sub-${index}`}
                icon={item.icon}
                style={{ color: "#fff", fontSize: "16px" , marginBottom: "50px" }}
                title={item.title}
              >
                {item.subMenu.map((subItem, subIndex) => (
                  <Menu.Item
                    key={`sub-${index}-${subIndex}`}
                   
                    style={{
                      color: "#fff",
                      fontSize: "16px",
                      marginTop: "30px",
                    }}
                  >
                    <Link to={`${item.path}${subItem.path}`}>
                      {subItem.title}
                    </Link>
                  </Menu.Item>
                ))}
              </SubMenu>
            ) : (
              <Menu.Item
                key={`item-${index}`}
                icon={item.icon}
                style={{
                  color: "#fff",
                  fontSize: "16px",
                  marginBottom: "50px",

                  // background: pathname === "/" ? "#DD1122" : "",
                }}
              >
                <Link to={item.path}>{item.title}</Link>
              </Menu.Item>
            )
          )}
          <Menu.Item
            key="500"
            className=""
            icon={<LogOut size={20} />}
            style={{ color: "#fff", fontSize: "16px" }}
            onClick={handleLogout}
          >
            Logout
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>

      <Header className=" flex justify-between items-center px-0 ps-5 pr-5 bg-black pt-[50px]"
          style={{ 
            height: "100px",    
          }}
        >
          <div className='max-w-md   text-white  rounded-md'>
    <div className="relative flex items-center w-[512px] h-12 rounded-lg focus-within:shadow-lg bg-[#1C2428] overflow-hidden">
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
            <Badge count={5} className="cursor-pointer">
              <Bell size={30} color="#fff" />
            </Badge>
           
              <div
            className="flex items-center gap-2 rounded-md  py-1.5 px-3 text-sm/6 bg-[#29363C]  text-white  "           
            
          >
            <img src={person} alt="" width={22} height={22}  />
          <p>  Schedule</p> 
          </div> 
              
           
          </div>
        </Header>

       
        <Content
          style={{
            background: "black",           
          }}
        >
          <div className="rounded p-3" style={{width:"100%"}}>
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default Dashboard;
