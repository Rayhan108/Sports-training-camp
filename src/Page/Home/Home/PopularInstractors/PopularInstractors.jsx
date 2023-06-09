
import SectionTitle from "../../../../Component/SectionTitle/SectionTitle";
import useAuth from "../../../../hooks/useAuth";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";


const PopularInstractors = () => {
const {user}=useAuth();

const {data:instructors=[]}=useQuery({
    queryKey:['instructors',user?.email],
    queryFn:async ()=>{
        const res=await axios.get(`http://localhost:5000/instructors`)
        return res.data;
    }})

console.log(instructors);
   
    return (
        <div>
            <SectionTitle header="Popular Instructors "></SectionTitle>
        </div>
    );
};

export default PopularInstractors;