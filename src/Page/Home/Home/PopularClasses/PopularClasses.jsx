// import { useQuery } from "@tanstack/react-query";
import Container from "../../../../Component/Container/Container";
import SectionTitle from "../../../../Component/SectionTitle/SectionTitle";
// import useAuth from "../../../../hooks/useAuth";
// import axios from "axios";
import ClassCard from "./ClassCard";
import { useEffect, useState } from "react";

const PopularClasses = () => {
  const [classes, setClasses] = useState([]);
  //   const { user } = useAuth();
  //   const { data: popularClasses = [] } = useQuery({
  //     queryKey: ["popularClasses", user?.email],
  //     queryFn: async () => {
  //       const res = await axios.get(`https://assignment12-server-psi.vercel.app/mostEnrolled`);
  //       return res.data;
  //     },
  //   });

  useEffect(() => {
    fetch("https://assignment12-server-psi.vercel.app/mostEnrolled")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);

  return (
   <Container>
     <div >
   
      <SectionTitle header={"Popular Classes"}>
      </SectionTitle>
      <div className="grid md:grid-cols-3 gap-5">
          {classes?.slice(0,6).map((s) => (
            <ClassCard key={s?._id} s={s}></ClassCard>
          ))}
        </div>
    </div>
   </Container>
  );
};

export default PopularClasses;
