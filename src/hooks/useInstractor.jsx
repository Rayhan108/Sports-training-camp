import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";

const useInstractor = () => {
    const {user,loader}=useAuth();
    const {data:isInstractor}=useQuery({
        queryKey:['isInstructor',user?.email],
        enabled:!loader,
        queryFn:async ()=>{
            const res=await axios.get(`http://localhost:5000/users/instractor/${user.email}`)
            return res.data.instructor;
        }
    })
    return [isInstractor]
};

export default useInstractor;