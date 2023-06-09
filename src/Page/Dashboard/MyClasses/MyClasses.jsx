import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";

const MyClasses = () => {
  const { user } = useAuth();

  const { data: classes = [] } = useQuery({
    queryKey: ["classes", user?.email],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:5000/clases/${user?.email}`
      );
      return res.data;
    },
  });
  console.log(classes);
  return (
    <div>
      <SectionTitle header={"My classes"}></SectionTitle>
      <div className="overflow-x-auto">
        <table className="table text-center">
          {/* head */}
          <thead >
            <tr>
              <th>
               #
              </th>
              <th>Class Info</th>
              <th>Instructor Info</th>
              <th>Price</th>
              <th>Totall Enrolled</th>
              <th>Status</th>
              <th>Action</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody >
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
                      <div className="text-sm opacity-50">Seats:{eachClass?.seats}</div>
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
                <td className="text-right">00</td>
                <td>{eachClass?.status}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">Update</button>
                </th>
                <th>
                  <button className="btn btn-ghost btn-xs">Feedback</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClasses;
