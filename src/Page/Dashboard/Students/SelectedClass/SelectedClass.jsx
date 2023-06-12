import { useQuery } from "@tanstack/react-query";

import axios from "axios";

import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import SectionTitle from "../../../../Component/SectionTitle/SectionTitle";


const SelectedClass = () => {
    const { user } = useAuth();
// const token = localStorage.getItem('access-token')
//     const { data: mySelectedClasses = [],refetch } = useQuery({
//       queryKey: ["mySelectedClasses", user?.email],
//       queryFn: async () => {
//         const res = await axios.get(
//           `https://assignment12-server-psi.vercel.app/mySelectedClass/${user?.email}`,{headers:{
//             authorization:`bearer ${token}`
//           }}
//         );
//         return res.data;
//       },
//     });
    const { data: mySelectedClasses = [],refetch } = useQuery({
      queryKey: ["mySelectedClasses", user?.email],
      queryFn: async () => {
        const res = await axios.get(
          `https://assignment12-server-psi.vercel.app/mySelectedClass/${user?.email}`
        );
        return res.data;
      },
    });
    const handleDelete=(id)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assignment12-server-psi.vercel.app/deleteSelectClass/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    // console.log(mySelectedClasses);
    return (
        <div>
        <SectionTitle header={"My selected classes"}></SectionTitle>
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
                <th>Pay</th>
                <th>Action</th>
                
              </tr>
            </thead>
            <tbody >
              {mySelectedClasses.map((singleclass, i) => (
                
                <tr key={singleclass._id}>
                   
                  <td>{i + 1}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={singleclass?.classImg}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{singleclass?.name}</div>
                        <div className="text-sm opacity-50">Seats:{singleclass?.seats}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                   {singleclass?.instructorName}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                     {singleclass?.instructorEmail}
                    </span>
                  </td>
                  <td className="text-right">{singleclass?.price}</td>
                
                  <td>{singleclass?.status}</td>
                  <th>
                   {/* {console.log(singleclass)} */}
                   <Link  to={`/dashboard/pay/${singleclass?._id}/${singleclass?.price}`} >
                   <button className="btn btn-ghost ">Pay</button>
                   </Link>
                  </th>
                  <th>
                    <button onClick={()=>handleDelete(singleclass?._id)} className="btn btn-ghost">Delete</button>
                  </th>
               
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default SelectedClass;