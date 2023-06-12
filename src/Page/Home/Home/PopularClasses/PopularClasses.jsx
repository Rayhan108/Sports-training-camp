import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../../Component/SectionTitle/SectionTitle";
import useAuth from "../../../../hooks/useAuth";
import axios from "axios";






const PopularClasses = () => {
    const {user}=useAuth();
    const { data: popularClasses = [] } = useQuery({
        queryKey: ["allApprovedClasses", user?.email],
        queryFn: async () => {
          const res = await axios.get(
            `http://localhost:5000/mostEnrolled`
          );
          return res.data;
        },
      });
      console.log(popularClasses);
    return (
        <div>
            <SectionTitle header={"Popular Classes"}>

            </SectionTitle>
        </div>
    );
};

export default PopularClasses;