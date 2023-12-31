import { Navigate} from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useInstractor from "../../hooks/useInstractor";
import { toast } from "react-hot-toast";

const InstructorsRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const [isInstractor, isInstructorLoading] = useInstractor();
 
  if (loading || isInstructorLoading) {
    return (
      <div className="flex md:mt-64 items-center justify-center ">
        <div className="radial-progress animate-spin" style={{ "--value": 70 }}>
          70%
        </div>
      </div>
    );
  }
  if (user && isInstractor) {
    return children;
  }else{
    toast.error("You Are Not Instructors")
  }
  return <Navigate to="/" ></Navigate>;
};

export default InstructorsRoutes;
