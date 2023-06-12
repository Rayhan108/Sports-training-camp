import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

import {   useLocation, useNavigate, useParams } from "react-router-dom";



import { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";



const UpdateClass = () => {
    const {user}=useAuth()
    const {id}=useParams();
    const [singleClass,setSingleClass]=useState({});
 
    useEffect(()=>{
        fetch(`https://assignment12-server-psi.vercel.app/class/${id}`)
        .then((res) => res.json())
         .then((data) => {
           setSingleClass(data);
         })
    },[id])
 
    const {
        register,
        handleSubmit,
        
        reset,
        formState: { errors },
      } = useForm();
      const location =useLocation()
      const navigate = useNavigate()
      const from = location.state?.from?.pathname || "/dashboard/myClass";
      const onSubmit = data => {
       
        const price = Number(data.price);
        data.price = price;
        const seats = Number(data.seats)
        data.seats=seats;
       
        // console.log(data);
        fetch(`https://assignment12-server-psi.vercel.app/updateClass/${id}`,
        {
            method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    }
          )
            .then((res) => res.json())
            .then((data) => {
              if(data.modifiedCount>0){
                reset()
                navigate(from, { replace: true })
            toast.success("update succesfull")
            
              }
              
            });
        };
        
        
   
    return (
        <div className="flex space-y-10  items-center justify-center min-h-screen bg-gray-100 mb-5 mt-5">
        <div className=" w-1/2 px-6 py-8 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
            Add New Class
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Class Name <span className="text-warning">*</span>
              </label>
              <input
                type="text"
               
              defaultValue={singleClass?.name}
              readOnly
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              />
           
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Class Image<span className="text-warning">*</span>
              </label>
              <input
                type="url"
              
                defaultValue={singleClass?.classImg}
                readOnly
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              />
         
            </div>
          
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Instructor Name
              </label>
              <input
                type="text"
             
                defaultValue={user?.displayName}
                readOnly
             
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Instructor Email
              </label>
              <input
                type="email"
               defaultValue={user?.email}
                readOnly
               
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Available Seats
              </label>
              <input
                type="number"
                defaultValue={singleClass?.seats}
                {...register("seats", { required: true })}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              />
              {errors.seats && (
                <span className="text-red-600"> Class name is required</span>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Price
              </label>
              <input
                type="number"
                defaultValue={singleClass?.price}
                {...register("price", { required: true })}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              />
              {errors.price && (
                <span className="text-red-600"> Class name is required</span>
              )}
            </div>
  
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600  "
            >
                Update Class
            
            </button>
          </form>
        </div>
      </div>
   
      );
};

export default UpdateClass;