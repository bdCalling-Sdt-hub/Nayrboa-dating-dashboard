
import ErrorImg from '@/assets/404.png'
import Button from "@/components/share/Button";
import { Link } from 'react-router-dom';
const ErrorPage = () => {
    return (
        <div className="bg-black py-[145px] ">
            <div className=" mx-auto bg-[#2E3C43] w-1/3 text-center rounded-lg pb-6 ">
                <div className='px-[120px] pt-[102px] pb-[80px] '>
                <img src={ErrorImg} alt="" width={600} height={300}  className='mx-auto '/>    
                </div>
                <p className='text-white text-xl'> Looks like you’ve got lost…. </p>
                <Button className="   w-1/2    mx-auto mt-10 mb-24">
                   <Link to='/'> Back To Dashboard</Link>
                    </Button>
            </div>
          
        </div>
    );
};

export default ErrorPage;