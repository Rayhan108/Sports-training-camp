import { useQuery } from "@tanstack/react-query";
import ManageUsersTable from "./ManageUsersTable";


const ManageUsers = () => {
    const { data: allUsers = [], refetch } = useQuery(["allUsers"], async () => {
    
        const res = await fetch("http://localhost:5000/allUsers");
        return res.json();
      });
    return (
        <div>
            <h1 className="text-2xl text-center mb-5 font-bold">ALL USERS : {allUsers.length}</h1>
            <div className="overflow-x-auto">
  <table className="table ">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Email</th>
        <th>Instructor</th>
        <th>Admin</th>
      </tr>
    </thead>
    <tbody>
    {
    allUsers.map((user,idx)=><ManageUsersTable key={user?._id} user={user} idx={idx}></ManageUsersTable>)
}
   
    </tbody>
  </table>
</div>
          
        </div>
    );
};

export default ManageUsers;
