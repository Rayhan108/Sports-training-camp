import { FaHome } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";



const DashboardLayout = () => {
const isAdmin =true;
const isInstructor =false;
    return (
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
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
                <NavLink to="manageClass">Manage Classes</NavLink>
              </li>
              <li>
                <NavLink to="manageUsers">Manage Users</NavLink>
              </li>
            </>
          )}
          {isInstructor && (
            <>
              <li>
                <NavLink to="myClass">My Classes</NavLink>
              </li>
              <li>
                <NavLink to="addClass">Add A Class</NavLink>
              </li>
            </>
          )}
          {!isAdmin && !isInstructor && (
            <>
              <li>
                <NavLink to="mySelectedClass">My Selected Classes</NavLink>
              </li>
              <li>
                <NavLink to="enrolledClass">My Enrolled Classes</NavLink>
              </li>
            </>
          )}
        
       <div className="divider"></div>
         <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
             <li><NavLink to="/"> Instractors</NavLink></li>
             <li><NavLink to="/">Classes</NavLink></li>
    
                    
    </ul>
  
  </div>
</div>
    );
};

export default DashboardLayout;