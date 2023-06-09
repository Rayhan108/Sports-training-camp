

const ManageUsersTable = ({user,idx,handleMakeAdmin,handlemakeInstructor}) => {
 console.log(user);

    return (
       
             <tr>
        <th>{idx+1}</th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={user.photo} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
            
            
            </div>
          </div>
        </td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td> <button disabled={user.role === 'instructor'} onClick={()=>handlemakeInstructor(user)} className="btn btn-sm">Make Instructor</button> </td>
   <td> <button disabled={user.role === 'admin'} onClick={() => handleMakeAdmin(user)} className="btn btn-sm">Make Admin</button> </td>


      </tr>
        
    );
};

export default ManageUsersTable;