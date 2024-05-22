import AuthWrapper from "@/components/share/AuthWrapper";
import Title from "@/components/share/Title"; 
import { Button, Input } from "antd";
import { useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const navigate = useNavigate();
  const onChange = (text: any) => {
    console.log("onChange:", text);
  };
  const sharedProps = {
    onChange,
  };
  const handleVerify = () => {
    navigate("/auth/reset");
  };
  
  return (
    <AuthWrapper>
      <div className="h-[560px]">
      <div className="text-center mb-24 mt-14">
        <Title className=" mb-8">Check your email</Title>
        <p className="text-[#F7F7F7]">We sent a reset link to contact@dscode...com
enter 5 digit code that mentioned in the email</p>
      </div>

      <Input.OTP
        size="large"
        className="otp-input  "
        style={{ width: "100%", height: "50px" }}
        length={5}
        formatter={(str) => str.toUpperCase()}
        {...sharedProps}
      />
      <button
            className="bg-red-600 h-12 text-white text-lg w-full   rounded-lg  mt-20 " onClick={handleVerify}
          >
           Verify Code
          </button>   
      <p className="text-center mt-10 text-[#6A6D7C]">
        You have not received the email?
        <Button className="pl-0 text-red-600" type="link">
          Resend
        </Button>
      </p>
      </div>
    
    </AuthWrapper>
  );
};

export default VerifyEmail;
