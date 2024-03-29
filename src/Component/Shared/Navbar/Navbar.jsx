
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../../../assets/Orange blue football sport logo.png"
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const {user,logout}=useAuth();
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  const handleLogOut = () => {
    logout()
      .then(()=>{
        toast.success('Logout Success')
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
    const navRoutes = (
        <>
          <li>
            <NavLink className="nl ml-0 md:ml-3 font-bold" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/instructors"  className="nl ml-0 md:ml-10 font-bold">Instractors</NavLink>
          </li>
   
           <li> <NavLink to="/classes" className="nl  ml-0 md:ml-10 font-bold">Classes</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard" className="nl  ml-0 md:ml-10 font-bold">Dashboard</NavLink>
          </li> 
          <li>
          <div className="flex mt-3 md:mt-0 mb-3 mt-mb-0 flex-col gap-3 md:flex-row  md:gap-5">
      <label className="ml-0 md:ml-10">
            {user&& <div className="tooltip tooltip-bottom z-[10]" data-tip={user?.displayName}>
            <img style={{width:"40px"}} className="w-24 rounded-full circle" src={user?.photoURL} />
          </div>}
        
        </label> 
        {user? <button onClick={handleLogOut} className=" bg-[#f7760c] text-white px-3 py-2 rounded-lg p-5">LogOut</button>
         : <NavLink to="/login" className="nl  ml-0 md:ml-10 font-bold">Login</NavLink>}
      </div>
          </li> 
          <li>
            
 <label className="swap swap-rotate ml-0 md:ml-10">
          <input  type="checkbox" onChange={handleToggle} />

          <svg
            className="swap-on fill-current w-8 h-8 ml-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          <svg
            className="swap-off fill-current w-8 h-8 ml-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
          </li>
          
        </>
      );
    
    return (
        <div className="navbar  w-full bg-base-300  shadow-sm  ">


  <div className="md:navbar-start ">
        <div className="dropdown ">
          <label tabIndex={0} className="   lg:hidden">
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
            className=" dropdown-content  bg-base-100
             mt-3 z-[10] px-5 py-7 shadow  rounded-box w-52
            "
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
          <p  className=" normal-case text-center  text-xl font-extrabold mt-0">Sports Training Camp</p>
      </div>
      <div className="navbar-end hidden lg:flex">
          <ul className=" menu-horizontal  ">
            {navRoutes}
          </ul>
        </div>
    
           
      {/* <div className="navbar-end text-right">
      <label className=" mr-5">
            {user&& <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
            <img style={{width:"50px"}} className="w-50 rounded-full circle" src={user?.photoURL} />
          </div>}
        
        </label>
        {user? <button onClick={handleLogOut} className="btn">LogOut</button>
         : <Link to="/login" className="btn">Login</Link>}
      </div> */}

{/* 
 <label className="swap swap-rotate ">
          <input  type="checkbox" onChange={handleToggle} />

          <svg
            className="swap-on fill-current w-8 h-8 ml-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          <svg
            className="swap-off fill-current w-8 h-8 ml-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label> */}


    </div>
    );
};

export default Navbar;