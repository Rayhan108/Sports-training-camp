import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useInstractor from "../../hooks/useInstractor";

const InstructorsRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const [isInstractor, isInstructorLoading] = useInstractor();
  const location = useLocation();
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
  }
  return <Navigate to="/Login" state={{ from: location }} replace></Navigate>;
};

export default InstructorsRoutes;
