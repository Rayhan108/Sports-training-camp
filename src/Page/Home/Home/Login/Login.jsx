import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {AiFillEyeInvisible} from "react-icons/ai"
import SocialLogin from "../../../../Component/Shared/SocialLogin/SocialLogin";
import useAuth from "../../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
const Login = () => {
  const [isShow,setISShow]= useState(false)
  const {SignIn}=useAuth()

  const location =useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit, reset,
  formState: { errors },
  } = useForm();

  const onSubmit = data => {
      console.log(data)
      SignIn(data.email,data.password)
      .then(result=>{
        console.log(result);
        navigate(from)
        reset();
     toast.success('login successfull')
      })
      .catch((error) => {
        // console.log(error.message);
       toast.error(error.message);
      });
      
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
      <div className="max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          Login
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email<span className="text-warning">*</span>
            </label>
            <input
              type="email"
              {...register("email",{required:true})}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
             {errors.email && (
                  <span className="text-red-600">email is required</span>
                )}
          </div>
          <div className="mb-6">
         <div className="flex justify-between">
         <label
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password<span className="text-warning">*</span>
            </label>
           <label>
           <AiFillEyeInvisible className="text-2xl mt-1" onClick={()=>setISShow(!isShow)}></AiFillEyeInvisible>
           </label>
         </div>
            <input
              name="password"
              {...register("password", {
                required: true,
           })}
              type={isShow?"text":"password"}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
          {errors.password && (
                  <span className="text-red-600">Password is required</span>
                )}
          </div>
          <button 
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600  "
          >
            Login
          </button>
          <p className="mt-5 text-center">
            Do not Have Account?{" "}
            <Link to="/signUp">
              <span className="text-amber-700"> SignUp</span>
            </Link>
          </p>
          <SocialLogin></SocialLogin>
        </form>
      </div>
    </div>
  );
};

export default Login;
