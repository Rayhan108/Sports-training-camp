import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";

const useInstractor = () => {
    const {user,loader}=useAuth();
    const {data:isInstractor,isInstructorLoading}=useQuery({
        queryKey:['isInstructor',user?.email],
        enabled:!loader,
        queryFn:async ()=>{
            const res=await axios.get(`https://assignment12-server-rayhan108.vercel.app/users/instractor/${user.email}`)
            return res.data.instructor;
        }
    })
    return [isInstractor,isInstructorLoading]
};

export default useInstractor;