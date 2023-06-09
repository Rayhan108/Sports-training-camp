

const InstructorsTable = ({instructor,idx}) => {
    return (
        <tr>
        <th>{idx+1}</th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={instructor.photo} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
            
            
            </div>
          </div>
        </td>
        <td>{instructor.name}</td>
        <td>{instructor.email}</td>
       

      </tr>
    );
};

export default InstructorsTable;