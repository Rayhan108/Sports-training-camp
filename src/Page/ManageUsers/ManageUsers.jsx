import { useQuery } from "@tanstack/react-query";
import ManageUsersTable from "./ManageUsersTable";
import { toast } from "react-hot-toast";


const ManageUsers = () => {
    const { data: allUsers = [], refetch } = useQuery(["allUsers"], async () => {
    
        const res = await fetch("http://localhost:5000/allUsers");
        return res.json();
      });
    //   make admin
      const handleMakeAdmin = (user) => {
        fetch(
          `http://localhost:5000/admin/${user._id}`,
          {
            method: "PATCH",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.modifiedCount) {
              refetch();
               
              toast.success(`${user.name} is an Admin Now!`)
            }
          });
      };
    //   make instructor
    const handlemakeInstructor =(user)=>{
        fetch( `http://localhost:5000/instructor/${user._id}`,{
            method:"PATCH",
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount){
                refetch();
                toast.success(`${user.name} is an Instructor Now!`)
            }
        })
    }

    return (
        <div>
            <h1 className="text-2xl text-center mb-5 font-bold">ALL USERS : {allUsers.length}</h1>
            <div className="overflow-x-auto">
  <table className="table ">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Instructor</th>
        <th>Admin</th>
      </tr>
    </thead>
    <tbody>
    {
    allUsers.map((user,idx)=><ManageUsersTable key={user?._id} user={user} idx={idx} handleMakeAdmin={handleMakeAdmin} handlemakeInstructor={handlemakeInstructor}></ManageUsersTable>)
}
   
    </tbody>
  </table>
</div>
          
        </div>
    );
};

export default ManageUsers;
