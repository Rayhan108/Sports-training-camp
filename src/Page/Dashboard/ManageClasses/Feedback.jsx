import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const Feedback = () => {
  const { id } = useParams();
  const {
    register,
    handleSubmit,

    reset,
    formState: { errors },
  } = useForm();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/dashboard/manageClass";
  const onSubmit = (data) => {
    console.log(data);

    fetch(`http://localhost:5000/feedback/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          reset();
          navigate(from, { replace: true });
          toast.success("Send succesfull");
        }
      });
  };
  return (
    <div className="flex space-y-10  items-center justify-center min-h-screen bg-gray-100 mb-5 mt-5">
      <div className=" w-1/2 px-6 py-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          Feedback
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Give A Reason
            </label>
            <textarea
              className="textarea textarea-error w-full"
              placeholder="Bio"
              {...register("feedback", { required: true })}
            ></textarea>

            {errors.feedback && (
              <span className="text-red-600"> this field is required</span>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600  "
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
