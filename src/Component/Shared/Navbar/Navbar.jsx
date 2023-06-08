
import { Link } from "react-router-dom";

import logo from "../../../assets/Orange blue football sport logo.png"
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const {user,logout}=useAuth();
  
    const navRoutes = (
        <>
          <li>
            <Link className=" font-bold" to="/">Home</Link>
          </li>
          <li>
            <Link to=""  className=" font-bold">Instractors</Link>
          </li>
   
           <li> <Link to="" className=" font-bold">Classes</Link>
          </li>
          <li>
            <Link to="dashboard" className=" font-bold">Dashboard</Link>
          </li> 
          
        </>
      );
      const handleLogOut = () => {
        logout()
          .then(()=>{
            toast.success('Logout Success')
          })
          .catch((error) => {
            toast.error(error.message);
          });
      };
    return (
        <div className="navbar  w-full bg-base-300  shadow-sm  ">


  <div className="navbar-start ">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            
           {navRoutes}
          </ul>
        </div>
    
       <Link to="/">
       
       <div>
    
        <img className="mr-3"
            style={{ width: "50px" }}
            src={logo}
            alt=""
          />
     
        </div>
        </Link>
          <h4  className=" normal-case text-center text-xl font-extrabold mt-0">Sports Training Camp</h4>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        {navRoutes}
        </ul>
      </div>
    
           
      <div className="navbar-end text-right">
      <label className=" mr-5">
            {user&& <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
            <img style={{width:"50px"}} className="w-50 rounded-full circle" src={user?.photoURL} />
          </div>}
        
        </label>
        {user? <button onClick={handleLogOut} className="btn">LogOut</button>
         : <Link to="/login" className="btn">Login</Link>}
      </div>

 

    </div>
    );
};

export default Navbar;