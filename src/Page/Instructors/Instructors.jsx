import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import InstructorsTable from "./InstructorsTable";
import axios from "axios";
import SectionTitle from "../../Component/SectionTitle/SectionTitle";
import Container from "../../Component/Container/Container";


const Instructors = () => {
    const {user}=useAuth();

const {data:instructors=[]}=useQuery({
    queryKey:['instructors',user?.email],
    queryFn:async ()=>{
        const res=await axios.get(`https://assignment12-server-psi.vercel.app/instructors`)
        return res.data;
    }})
    return (
      <Container>
  <div className="overflow-x-auto">
              <SectionTitle header="All Instructors "></SectionTitle>
        <table className="table text-center ">
          {/* head */}
          <thead className=" text-xl font-bold">
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Email</th>
            
            </tr>
          </thead>
          <tbody>
          {
          instructors.map((instructor,idx)=><InstructorsTable key={instructor?._id} instructor={instructor} idx={idx} ></InstructorsTable>)
      }
         
          </tbody>
        </table>
      </div>

      </Container>
    );
};

export default Instructors;