import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";


const useMyEnrolledClasses = () => {
    const {user}=useAuth()
    const { data: enrolledClasses=[] } = useQuery({
        queryKey: ["enrolledClasses", user?.email],
        queryFn: async () => {
          const res = await axios.get(
            `http://localhost:5000/paidClass/${user?.email}`
          );
          return res.data;
        },
      });
    return [enrolledClasses]
};

export default useMyEnrolledClasses;