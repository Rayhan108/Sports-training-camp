
import logo from "../../../assets/Orange blue football sport logo.png"
const Footer = () => {
    return (
    
    <footer className="w-full  text-white mt-5">
    <div className="container bg-base-200 mx-auto py-6 px-4">
      <div className="flex flex-wrap items-center justify-between">
        <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-20 w-20" />
        <span className="ml-2 text-black text-lg font-semibold">Sports Training Camp</span>
          
        </div>
        <div className="text-black text-sm">
        <span className="footer-title">Address</span> 
              <p className="mb-1">123 Main Street,Srimongol,Sylet</p>
              <p className="mb-1">Bangladesh</p>
              <p>Post Code: 3000</p>
            </div>
            <div className="text-black text-sm">
            <span className="footer-title">Contact Info</span> 
              <p className="mb-1 lg:mt-4">Phone: +88016586589845</p>
              <p>Email: info@sportseducationcamp.com</p>
            </div>
      </div>
      <hr className="my-4" />
      <div className="text-center py-3 text-black bg-base-300 text-sm">
            <p>&copy; {new Date().getFullYear()} Sports Training Camp. All rights reserved.</p>
          </div>
    </div>
  </footer>
    );
};

export default Footer;