import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";

const ManageClasses = () => {
    const { user } = useAuth();

  const { data: allClasses = [] } = useQuery({
    queryKey: ["classes", user?.email],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:5000/allClasses`
      );
      return res.data;
    },
  });
    return (
        <div>
            <SectionTitle header={"My classes"}></SectionTitle>
        <div className="overflow-x-auto">
          <table className="table text-center">
            {/* head */}
            <thead  className="font-bold text-xl">
              <tr>
                <th>
                 #
                </th>
                <th>Class Info</th>
                <th>Instructor Info</th>
                <th>Price</th>
                <th>Status</th>
                <th>Approved</th>
                <th>Denied</th>
                <th>Send Feedback</th>
              </tr>
            </thead>
            <tbody >
              {allClasses.map((eachClass, i) => (
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
                  
                  <td>{eachClass?.status}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">Approved</button>
                  </th>
                  <th>
                    <button className="btn btn-ghost btn-xs">Denied</button>
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

export default ManageClasses;