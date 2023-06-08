

const ManageUsersTable = ({user,idx}) => {
 
    return (
       
             <tr>
        <th>{idx+1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td> <button className="btn btn-sm">Make Instructor</button> </td>
        <td> <button className="btn btn-sm">Make Admin</button> </td>
      </tr>
        
    );
};

export default ManageUsersTable;