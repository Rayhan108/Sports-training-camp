import Container from "../../../../Component/Container/Container";
import SectionTitle from "../../../../Component/SectionTitle/SectionTitle";

import './Subscribe.css'
const Subscribe = () => {
    return (
     <Container>
           <div className="feature-item pt-8 my-20 bg-fixed  text-white">
        <SectionTitle  header={"Get excusive offers"}></SectionTitle>
        <div className=" bg-slate-900 bg-opacity-30 items-center pt-12 pb-20 px-6 md:px-28 md:w-[1175px]">
          
          <div className="md:w-1/2   text-left">
            <p className="font-extrabold text-3xl mb-3">Sign Up</p>
            <p className="font-semibold text-3xl mb-3">For <span className="text-amber-400">Exclusive Offers</span></p>
            <p className="font-semibold text-3xl mb-3">And <span className="text-amber-400">Latest News</span></p>
           
            <div className="relative">
        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
      </div>
          </div>
        </div>
      </div>
     </Container>
    );
};

export default Subscribe;