
import useMyEnrolledClasses from "../../../hooks/useMyEnrolledClasses";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";


const PaymentHistory = () => {
    const [enrolledClasses]=useMyEnrolledClasses()
    return (
        <div>
        <SectionTitle header={"Payment history"}></SectionTitle>
   

        <div className="overflow-x-auto  mx-auto">
      <table className="table  text-center">
        {/* head */}
        <thead  className="font-bold text-xl text-center">
          <tr>
            <th>
             #
            </th>
            <th>Class Name</th>
            <th>Price</th>
            <th>Status</th>
            <th>TxnID</th>
            
          </tr>
        </thead>
        <tbody className="text-center">
          {enrolledClasses.map((singleclass, i) => (
            
            <tr key={i}>
               
              <td>{i + 1}</td>
              <td>
                
                   {singleclass?.className}
               
              </td>
              <td>
              Price:${singleclass?.classPrice}
               
              </td>
              <td className="mt-3 badge badge-ghost badge-sm">{singleclass?.status}</td>
              <td>
               {singleclass?.transactionId}
              </td>
           
            
            
         
             
           
            </tr>
          ))}
        </tbody>
      </table>
    </div>


    </div>
    );
};

export default PaymentHistory;