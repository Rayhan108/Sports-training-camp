 import { useForm } from "react-hook-form";

import useAuth from "../../../hooks/useAuth";
import { TbFidgetSpinner } from "react-icons/tb";
const token = import.meta.env.VITE_photo_upload_token;

const Addclass = () => {
  const { user, loader } = useAuth();
  const img_url = `https://api.imgbb.com/1/upload?&key=${token}`
  console.log(user);
  const {
    register,
    handleSubmit,
    //reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
      console.log(data);
    const formData = new FormData();
    formData.append('classImage', data.classImg[0])
    fetch(img_url, {
        method: 'POST',
        body: formData
    })
    .then(res => res.json())
    .then(imgRes => {
        console.log(imgRes);
      
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
              {...register("name", { required: true })}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
            {errors.name && (
              <span className="text-red-600"> Class name is required</span>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Class Image<span className="text-warning">*</span>
            </label>
           
            <input {...register("classImg", { required: true })} type="file" className="file-input file-input-bordered file-input-gray w-full " />
            {errors.classImg && (
              <span className="text-red-600"> Class name is required</span>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Instructor Name
            </label>
            <input
              type="text"
              defaultValue={user?.displayName}
              readOnly
              {...register("instructorName", { required: true })}
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
              {...register("instructorEmail", { required: true })}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Available Seats
            </label>
            <input
              type="number"
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
            {loader ? (
              <TbFidgetSpinner
                className="m-auto animate-spin"
                size={24}
              ></TbFidgetSpinner>
            ) : (
              "Add Class"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addclass;
