import { useQuery } from "@tanstack/react-query";

import axios from "axios";

import { Link } from "react-router-dom";
import { useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import SectionTitle from "../../../../Component/SectionTitle/SectionTitle";

const MyClasses = () => {
  const { user } = useAuth();
  const [feedbackData, setFeedbackData] = useState("");
  // console.log(feedbackData);
  const { data: classes = [] } = useQuery({
    queryKey: ["classes", user?.email],
    queryFn: async () => {
      const res = await axios.get(
        `https://assignment12-server-psi.vercel.app/clases/${user?.email}`
      );
      return res.data;
    },
  });

 
  // handle see feedback
  const handleSeeFeedback = (feedback) => {
    if (feedback) {
      setFeedbackData(feedback);
    } else {
      setFeedbackData("When admin denied your class, you can see the reason in this field");
    }
    window.my_modal_3.showModal()
  };
  return (
    <div>
      <SectionTitle header={"My classes"}></SectionTitle>
      <div className="overflow-x-auto">
        <table className="table text-center">
          {/* head */}
          <thead className="font-bold text-xl">
            <tr>
              <th>#</th>
              <th>Class Info</th>
              <th>Instructor Info</th>
              <th>Price</th>
              <th>Totall Enrolled</th>
              <th>Status</th>
              <th>Action</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((eachClass, i) => (
              <tr key={eachClass._id}>
                <td>{i + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={eachClass?.classImg}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{eachClass?.name}</div>
                      <div className="text-sm opacity-50">
                        Seats:{eachClass?.seats}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {eachClass?.instructorName}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {eachClass?.instructorEmail}
                  </span>
                </td>
                <td className="text-right">{eachClass?.price}</td>
                <td >{eachClass?.enrolledStudents}</td>
                <td>{eachClass?.status}</td>
                <th>
                  <Link to={`/dashboard/update/${eachClass?._id}`}>
                    <button className="btn btn-ghost ">Update</button>
                  </Link>
                </th>
                <th>
                  <button
                    onClick={() =>
                      handleSeeFeedback(
                        eachClass
                          ?.feedback
                        
                      )
                    }
                    className="btn btn-ghost "
                  >
                    Show Feedback
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>

        <dialog id="my_modal_3" className="modal">
          <form method="dialog" className="modal-box">
            <button
              htmlFor="my-modal-3"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
            <h3 className="font-bold text-lg">Hello Instructors!</h3>
            <p className="py-4">{feedbackData}</p>
          </form>
        </dialog>
      </div>
    </div>
  );
};

export default MyClasses;
