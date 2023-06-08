import { FaGoogle } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import { GoogleAuthProvider } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { storeUserInDB } from "../../Utilities/utilities";
import { TbFidgetSpinner } from "react-icons/tb";

const SocialLogin = () => {
  const {googleSignIn,loader,setLoader}=useAuth();
  const provider = new GoogleAuthProvider();
  const location =useLocation()
const navigate = useNavigate()
const from = location.state?.from?.pathname || "/";
  // login with google
const handleGoogleLogin = () => {


  googleSignIn(provider)
    .then((result) => {
      console.log(result);
      navigate(from)
      const user = { name: result?.user?.displayName, email: result?.user?.email }
      storeUserInDB(user);
      setLoader(false)
     toast.success('Login Successfull')
    })
    .catch((error) => {
      setLoader(false)
      toast.error(error.message);
    });
};
  return (
    <div className="text-center">
      <div className="divider"></div>
      <button   onClick={handleGoogleLogin} className="btn btn-outline btn-info">

        <FaGoogle></FaGoogle>
        {
              loader?<TbFidgetSpinner  className='m-auto animate-spin' size={24}></TbFidgetSpinner>
              :
              ' Sign Up With Google'
            }
        
       
      </button>
    </div>
  );
};

export default SocialLogin;
