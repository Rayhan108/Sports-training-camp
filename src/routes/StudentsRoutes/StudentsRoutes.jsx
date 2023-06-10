import { Navigate} from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import useAuth from "../../hooks/useAuth";
import useInstractor from "../../hooks/useInstractor";
import { toast } from "react-hot-toast";

const StudentsRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const { isAdmin, isLoading } = useAdmin();
  const { isInstractor, isInstructorLoading } = useInstractor();

  if (loading || isLoading || isInstructorLoading) {
    return (
      <div className="flex md:mt-64 items-center justify-center ">
        <div className="radial-progress animate-spin" style={{ "--value": 70 }}>
          70%
        </div>
      </div>
    );
  }

  if (user && !isInstractor && !isAdmin) {
    return children;
  }else{
    toast.error("You Are Not Student")
  }

  return <Navigate to="/" ></Navigate>;
};

export default StudentsRoutes;
