import Title from "@/components/share/Title";
import { CircleCheckBig } from "lucide-react";
import lockImg from "@/assets/lock.png";
import Button from "@/components/share/Button";
import { useState } from "react";
import SubscriptionModal from "@/components/Subscription/SubscriptionModal";

const Subscription = () => {
        const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
    return (
        <div className="bg-[#1C2428] pt-10 px-12 rounded">
             <Title> Make Subscription</Title>

<div className=" grid lg:grid-cols-3 grid-cols-1 text-white   mt-6 pb-40 gap-10">
    {/* 1st card  */}
    <div className="  bg-black rounded-lg p-3 ps-5 relative">
        <h1 className=" text-2xl font-serif mb-3 mt-2 "> Basic</h1>
         <div className="  flex gap-4 mb-5">
            <p className="  text-2xl font-serif "> Get 3 Locks</p> 
            <img src={lockImg} alt=""  width={26} height={3} />
         </div>
         <p className=" flex gap-2 text-lg mb-6"> <span>  <CircleCheckBig /> </span>  Have 3 Interests
 </p>
         <p className=" flex gap-2 text-lg mb-6"> <span>  <CircleCheckBig /> </span>  Have 4 pictures
 </p>
         <p className=" flex gap-2 text-lg mb-6"> <span>  <CircleCheckBig /> </span>   Have 4 pictures
 </p>
         <p className=" flex gap-2 text-lg mb-6"> <span>  <CircleCheckBig /> </span>  Indicate a relationship goal
 </p>
         <p className=" flex gap-2 text-lg mb-6"> <span>  <CircleCheckBig /> </span> Indicate a relationship goal
 </p>
         <p className=" flex gap-2 text-lg mb-6"> <span>  <CircleCheckBig /> </span>  Indicate a relationship goal
 </p>
         <p className=" flex gap-2 text-lg mb-6"> <span>  <CircleCheckBig /> </span>  Be Photo Verified
 </p>
 <Button className=" absolute bottom-2  w-1/2  mt-12 mb-4 " onClick={showModal}>Edit Now</Button>
    </div>

    {/* 2nd  */}
    <div className=" relative bg-black rounded-lg p-3 ps-5">
        <h1 className=" text-2xl font-serif mb-3 mt-2 "> Gold</h1>
         <div className="  flex gap-4 mb-5">
            <p className="  text-2xl font-serif "> Get 9 Locks</p> 
            <img src={lockImg} alt=""  width={26} height={3} />
         </div>
         <p className=" flex gap-2 text-lg mb-6"> <span>  <CircleCheckBig /> </span>  See who likes you
 </p>
         <p className=" flex gap-2 text-lg mb-6"> <span>  <CircleCheckBig /> </span>  Video dating
 </p>
         <p className=" flex gap-2 text-lg mb-6"> <span>  <CircleCheckBig /> </span>  Incognito mode

 </p>
         <p className=" flex gap-2 text-lg mb-6"> <span>  <CircleCheckBig /> </span>  Unlimited extend
goal
 </p>
         <p className=" flex gap-2 text-lg mb-6"> <span>  <CircleCheckBig /> </span>Unlimited backtrack
 </p>
         <p className=" flex gap-2 text-lg mb-6"> <span>  <CircleCheckBig /> </span>  Unlimited rematch
 </p>
         <p className=" flex gap-2 text-lg mb-6"> <span>  <CircleCheckBig /> </span>  Icebreakers
 </p>
         <p className=" flex gap-2 text-lg mb-6"> <span>  <CircleCheckBig /> </span>  Dating quizzes
 </p>
 <Button className=" w-1/2  mt-12 mb-4 absolute bottom-2" onClick={showModal}>Edit Now</Button>
    </div>
  


{/* 3rd card  */}
    <div className=" relative bg-black rounded-lg p-3 ps-5">
        <h1 className=" text-2xl font-serif mb-3 mt-2 "> Premium</h1>
         <div className="  flex gap-4 mb-5">
            <p className="  text-2xl font-serif "> Get 6 Locks</p> 
            <img src={lockImg} alt=""  width={26} height={3} />
         </div>
         <p className=" flex gap-2 text-lg mb-6"> <span>  <CircleCheckBig /> </span>  Direct Message
 </p>
         <p className=" flex gap-2 text-lg mb-6"> <span>  <CircleCheckBig /> </span>  Unlimited swipes
 </p>
         <p className=" flex gap-2 text-lg mb-6"> <span>  <CircleCheckBig /> </span>  Spotlight(to be see on)
 </p>
         <p className=" flex gap-2 text-lg mb-6"> <span>  <CircleCheckBig /> </span>  Have 5 interest
 </p>
         <p className=" flex gap-2 text-lg mb-6"> <span>  <CircleCheckBig /> </span> Have 6 pictures
 </p>
         <p className=" flex gap-2 text-lg mb-6"> <span>  <CircleCheckBig /> </span>  Indicate a relationship goal
 </p>
         <p className=" flex gap-2 text-lg mb-6"> <span>  <CircleCheckBig /> </span>  Indicate a relationship goal
 </p>
         <p className=" flex gap-2 text-lg mb-6"> <span>  <CircleCheckBig /> </span> Profile verified
 </p>

 <Button className=" w-1/2  mt-12 mb-4 absolute bottom-2" onClick={showModal}>Edit Now</Button>
    </div>


</div>
{/* Modal  */}
<SubscriptionModal open={open} setOpen={setOpen} />
        </div>
    );
};

export default Subscription;