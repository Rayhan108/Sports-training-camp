
import { Link } from "react-router-dom";

import logo from "../../../assets/Orange blue football sport logo.png"

const Navbar = () => {
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
            <Link to="" className=" font-bold">Dashboard</Link>
          </li> 
          
        </>
      );
    return (
        <div className="navbar fixed z-10  w-full bg-base-300  shadow-sm  ">


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
    
        <img className="ml-12"
            style={{ width: "50px" }}
            src={logo}
            alt=""
          />
     
          <h4  className=" normal-case text-center text-xl font-extrabold mt-0">Sports Training Camp</h4>
        </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        {navRoutes}
        </ul>
      </div>
    
      <div className="navbar-end text-right">
      <label className=" mr-5">
      
            <img style={{width:"50px"}} className="w-50 rounded-full circle" src={logo}  />
        
        </label>
     
          <Link to="/login" className="btn">Login</Link>
      </div>

 

    </div>
    );
};

export default Navbar;