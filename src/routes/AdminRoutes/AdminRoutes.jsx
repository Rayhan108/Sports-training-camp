
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAdmin from "../../hooks/useAdmin";


const AdminRoutes = ({children}) => {
    const {user,loading}=useAuth();
    const [isAdmin,isLoading]=useAdmin()
    const location = useLocation();
if(loading || isLoading){
    return <div className="flex md:mt-64 items-center justify-center ">
    <div className="radial-progress animate-spin" style={{"--value":70}}>70%</div>
  </div>
}
    if(user && isAdmin){
       return children;
    }
    return <Navigate to="/Login" state={{from:location}} replace></Navigate>
};

export default AdminRoutes;