
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import useMyEnrolledClasses from "../../../hooks/useMyEnrolledClasses";


const EnrolledClasses = () => {
 
      const [enrolledClasses]=useMyEnrolledClasses()
    //   console.log(enrolledClasses);
    return (
        <div>
            <SectionTitle header={"my enrolled classes"}></SectionTitle>
     <div className="overflow-x-auto w-1/2 mx-auto">
          <table className="table  text-center">
            {/* head */}
            <thead  className="font-bold text-xl text-center">
              <tr>
                <th>
                 #
                </th>
                <th>Class Info</th>
                <th>Instructor Info</th>
                <th>Status</th>
                
              </tr>
            </thead>
            <tbody className="text-center">
              {enrolledClasses.map((singleclass, i) => (
                
                <tr key={i} >
                   
                  <td>{i + 1}</td>
                  <td>
                    <div className="flex items-center ">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={singleclass?.classImg}
                            
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{singleclass?.className}</div>
                        <div className="text-sm opacity-50">Price:${singleclass?.classPrice}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                   {singleclass?.instructorName}
                    <br />
                    <span className="badge badge-ghost mb-5 badge-sm">
                     {singleclass?.instructorEmail}
                    </span>
                  </td>
                  <td className="mt-6 badge badge-ghost badge-sm">{singleclass?.status}</td>
                
                
             
                 
               
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    
    
    


        </div>
    );
};

export default EnrolledClasses;