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
            
         </div>
         <div>
             <img src={img2} />
            
         </div>
         <div>
             <img src={img3} />
             
         </div>
         <div>
             <img src={img4} />
            
         </div>
         <div>
             <img src={img5} />
            
         </div>
        
     </Carousel>

  </Container>
 </>
    );
};

export default TopSlider;