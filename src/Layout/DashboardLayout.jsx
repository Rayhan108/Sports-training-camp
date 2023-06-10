import { FaHome } from "react-icons/fa";
import { MdOutlineClass,MdOutlineHotelClass } from "react-icons/md";
import { GiClassicalKnowledge } from "react-icons/gi";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { SiInstructure,SiGoogleclassroom } from "react-icons/si";

import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useInstractor from "../hooks/useInstractor";



const DashboardLayout = () => {
// const isAdmin =true;
const [isInstructor] = useInstractor();
const [isAdmin,isLoading] = useAdmin();

if(isLoading){
  return <div className="flex md:mt-64 items-center justify-center ">
    <div className="radial-progress animate-spin" style={{"--value":70}}>70%</div>
  </div>
}
    return (
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col  ">
    {/* Page content here */}
    <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side  ">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content font-bold">
      {/* Sidebar content here */}

      {isAdmin && (
            <>
              <li>
                <NavLink to="manageClass"><MdOutlineClass></MdOutlineClass> Manage Classes</NavLink>
              </li>
              <li>
                <NavLink to="manageUsers"><AiOutlineUsergroupAdd></AiOutlineUsergroupAdd> Manage Users</NavLink>
              </li>
            </>
          )}
          {isInstructor && (
            <>
              <li>
                <NavLink to="myClass">
                  My Classes</NavLink>
              </li>
              <li>
                <NavLink to="addClass"><GiClassicalKnowledge></GiClassicalKnowledge> Add A Class</NavLink>
              </li>
            </>
          )}
          {!isAdmin && !isInstructor && (
            <>
              <li>
                <NavLink to="mySelectedClass"><MdOutlineHotelClass></MdOutlineHotelClass> My Selected Classes</NavLink>
              </li>
              <li>
                <NavLink to="enrolledClass"><GiClassicalKnowledge></GiClassicalKnowledge> My Enrolled Classes</NavLink>
              </li>
            </>
          )}
        
       <div className="divider"></div>
         <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
             <li><NavLink to="/"><SiInstructure></SiInstructure> Instractors</NavLink></li>
             <li><NavLink to="/"><SiGoogleclassroom></SiGoogleclassroom> Classes</NavLink></li>
    
                    
    </ul>
  
  </div>
</div>
    );
};

export default DashboardLayout;