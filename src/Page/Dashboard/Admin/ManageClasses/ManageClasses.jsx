import { useQuery } from "@tanstack/react-query";

import axios from "axios";

import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import SectionTitle from "../../../../Component/SectionTitle/SectionTitle";


const ManageClasses = () => {
    const { user } = useAuth();

  const { data: allClasses = [],refetch } = useQuery({
    queryKey: ["classes", user?.email],
    queryFn: async () => {
      const res = await axios.get(
        `https://assignment12-server-psi.vercel.app/allClasses`
      );
      return res.data;
    },
  });
  const handleApproved=(id)=>{

    fetch(`https://assignment12-server-psi.vercel.app/approvedClass/${id}`,{
      method:'PATCH',
    })
    .then(res=>res.json())
    .then(data=>{
        // console.log(data);
        if(data.modifiedCount){
            toast.success(`Approve Success!`)
            refetch()
        }
    })
 
  }
  const handleDenied=(id)=>{

    fetch(`https://assignment12-server-psi.vercel.app/deniedClass/${id}`,{
      method:'PATCH',
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        if(data.modifiedCount){
            toast.success(`Denied Success!`)
            refetch()
        }
    })
 
  }
    return (
        <div>
            <SectionTitle header={"Manage classes"}></SectionTitle>
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
                <th>Feedback</th>
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
                    <button disabled={eachClass?.status === 'approved'||eachClass?.status === 'denied'} onClick={()=>handleApproved(eachClass?._id)} className="btn btn-ghost ">Approve </button>
                  </th>
                  <th>
                    <button disabled={eachClass?.status === 'denied'||eachClass?.status === 'approved'} onClick={()=>handleDenied(eachClass?._id)} className="btn btn-ghost">Denied</button>
                  </th>
                  <th>
                   <Link to={`/dashboard/feedback/${eachClass?._id}`}>
                   <button className="btn btn-ghost ">Send Feedback</button>
                   </Link>
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