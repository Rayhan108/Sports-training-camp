import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import SectionTitle from "../../Component/SectionTitle/SectionTitle";
import ClassesCard from "./ClassesCard";
import Container from "../../Component/Container/Container";

import { toast } from "react-hot-toast";
import Swal from "sweetalert2";


const Classes = () => {
  const { user } = useAuth();

  const { data: allUsers = [] } = useQuery(["allUsers"], async () => {
    
    const res = await fetch("http://localhost:5000/allUsers");
    return res.json();
  });
 
  const { data: allApprovedClasses = [],refetch } = useQuery({
    queryKey: ["allApprovedClasses", user?.email],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/allApprovedClasses`);
      return res.data;
    },
  });


  const handleSelectClass =(id)=>{
    if(!user){
        Swal.fire({
            title: 'error!',
            text: 'You have to log in first to select this',
            icon: 'error',
            confirmButtonText: 'Ok'
          })
    }
    const data ={id:id,selectBy:user?.email} ;
    // console.log(data);
    fetch(`http://localhost:5000/selectedClass`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            toast.success("Select Successful!");
            refetch();
          }
        })};
        const loggedUser = allUsers.find((singleUser) => singleUser?.email == user?.email);

  return (
    <div>
      <SectionTitle header={"classes for you"}></SectionTitle>
      <Container>
        <div className="grid md:grid-cols-3 gap-3">
          {allApprovedClasses.map((singleClass) => (
            <ClassesCard
              key={singleClass?._id}
              singleClass={singleClass}
              handleSelectClass={handleSelectClass}
              loggedUser={loggedUser}
            ></ClassesCard>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Classes;
