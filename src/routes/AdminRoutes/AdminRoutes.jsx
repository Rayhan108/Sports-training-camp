
import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAdmin from "../../hooks/useAdmin";

import toast from 'react-hot-toast'

const AdminRoutes = ({children}) => {
    const {user,loading}=useAuth();
    const [isAdmin,isLoading]=useAdmin()
  
if(loading || isLoading){
    return <div className="flex md:mt-64 items-center justify-center ">
    <div className="radial-progress animate-spin" style={{"--value":70}}>70%</div>
  </div>
}
    if(user && isAdmin){
       return children;
       
    }else{
        toast.error("You Are Not Admin")
    }
    return <>
    
    <Navigate to="/"></Navigate>
    
    </>
};

export default AdminRoutes;