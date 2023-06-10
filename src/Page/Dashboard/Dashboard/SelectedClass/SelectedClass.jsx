import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import axios from "axios";
import SectionTitle from "../../../../Component/SectionTitle/SectionTitle";
import Swal from "sweetalert2";


const SelectedClass = () => {
    const { user } = useAuth();

    const { data: mySelectedClasses = [],refetch } = useQuery({
      queryKey: ["myEnrolledClasses", user?.email],
      queryFn: async () => {
        const res = await axios.get(
          `https://assignment12-server-rayhan108.vercel.app/mySelectedClass/${user?.email}`
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
                fetch(`https://assignment12-server-rayhan108.vercel.app/selectClass/${id}`, {
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
              {mySelectedClasses.map((eachClass, i) => (
                
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
                    <button className="btn btn-ghost ">Pay</button>
                  </th>
                  <th>
                    <button onClick={()=>handleDelete(eachClass?._id)} className="btn btn-ghost">Delete</button>
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