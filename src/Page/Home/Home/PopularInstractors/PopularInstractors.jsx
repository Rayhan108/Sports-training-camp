import SectionTitle from "../../../../Component/SectionTitle/SectionTitle";
import useAuth from "../../../../hooks/useAuth";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import PopularInstructorCard from "./PopularInstructorCard";
import Container from "../../../../Component/Container/Container";

const PopularInstractors = () => {
  const { user } = useAuth();

  const { data: instructors = [] } = useQuery({
    queryKey: ["instructors", user?.email],
    queryFn: async () => {
      const res = await axios.get(`https://assignment12-server-psi.vercel.app/instructors`);
      return res.data;
    },
  });

  // console.log(instructors);

  return (
    <div>
      <SectionTitle header="Popular Instructors "></SectionTitle>
      <Container>
        <div className="grid md:grid-cols-3 gap-10">
          {instructors.slice(2, 8).map((instructor, i) => (
            <PopularInstructorCard
              key={instructor?._id}
              instructor={instructor}
              i={i}
            ></PopularInstructorCard>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default PopularInstractors;
