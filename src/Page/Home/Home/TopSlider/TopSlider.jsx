import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./TopSlider.css"


import img1 from "../../../../assets/slider1.avif"
import img2 from "../../../../assets/slider2.avif"
import img3 from "../../../../assets/slider3.avif"
import img4 from "../../../../assets/slider4.avif"
import img5 from "../../../../assets/slider5.jpg"
import { Carousel } from "react-responsive-carousel";
import Container from "../../../../Component/Container/Container";




const TopSlider = () => {
    return (
        <>
  <Container>
  <Carousel>
         <div>
             <img src={img1} />
             <div className="absolute h-full flex items-center  rounded-xl   left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
        <div className="space-y-7 w-1/2 pl-12">
        <h1 className="text-6xl text-white font-bold">Welcome To Our Sports Trainig Camp</h1>
          <p className="font-bold text-white">We Provide you a great training in different Sports</p>
        <div>
        <button className="btn btn-primary mr-5">Discover More</button>
       
        </div>
        </div>
          </div>
            
         </div>
         <div>
             <img src={img2} />
             <div className="absolute h-full flex items-center  rounded-xl   left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
        <div className="space-y-7 w-1/2 pl-12">
        <h1 className="text-6xl text-white font-bold">Welcome To Our Sports Trainig Camp</h1>
          <p className="font-bold text-white">We Provide you a great training in different Sports</p>
        <div>
        <button className="btn btn-primary mr-5">Discover More</button>
       
        </div>
        </div>
          </div>
            
         </div>
         <div>
             <img src={img3} />
             <div className="absolute h-full flex items-center  rounded-xl   left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
        <div className="space-y-7 w-1/2 pl-12">
        <h1 className="text-6xl text-white font-bold">Welcome To Our Sports Trainig Camp</h1>
          <p className="font-bold text-white">We Provide you a great training in different Sports</p>
        <div>
        <button className="btn btn-primary mr-5">Discover More</button>
       
        </div>
        </div>
          </div>
             
         </div>
         <div>
             <img src={img4} />
             <div className="absolute h-full flex items-center  rounded-xl   left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
        <div className="space-y-7 w-1/2 pl-12">
        <h1 className="text-6xl text-white font-bold">Welcome To Our Sports Trainig Camp</h1>
          <p className="font-bold text-white">We Provide you a great training in different Sports</p>
        <div>
        <button className="btn btn-primary mr-5">Discover More</button>
       
        </div>
        </div>
          </div>
            
         </div>
         <div>
             <img src={img5} />
             <div className="absolute h-full flex items-center  rounded-xl   left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
        <div className="space-y-7 w-1/2 pl-12">
        <h1 className="text-6xl text-white font-bold">Welcome To Our Sports Trainig Camp</h1>
          <p className="font-bold text-white">We Provide you a great training in different Sports</p>
        <div>
        <button className="btn btn-primary mr-5">Discover More</button>
       
        </div>
        </div>
          </div>
            
         </div>
        
     </Carousel>

  </Container>
 </>
    );
};

export default TopSlider;