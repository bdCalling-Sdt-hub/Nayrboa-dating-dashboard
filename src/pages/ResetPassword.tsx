import AuthWrapper from "@/components/share/AuthWrapper";
import Title from "@/components/share/Title"; 
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
    const navigate = useNavigate();
    const handleVerify = () => {
    navigate("/auth/set-new-password");
  };
    return (
        <AuthWrapper>
            <div className="h-[420px] my-auto" >
            <div className="text-center mb-4 mt-24">
        <Title className=" mb-8">Password reset</Title>
        <p className="text-[#F7F7F7]">Your password has been successfully reset. click
confirm to set a new password</p>
      </div> 
      <button
            className="bg-red-600 h-12 text-white text-lg w-full   rounded-lg  mt-14 " onClick={handleVerify}
          >
          Confirm
          </button>   
        </div>
        </AuthWrapper> 
        
    );
};

export default ResetPassword;