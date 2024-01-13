import { Helmet } from "react-helmet-async";

import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstractors from "../PopularInstractors/PopularInstractors";
import AboutUs from "../AboutUs/AboutUs";
import Topplayer from "../TopPlayer/Topplayer";
import Subscribe from "../Subscribe/Subscribe";
import WhyJoinUs from "../WhyJoinUs/WhyJoinUs";
import HeroSlider from "../../../../Component/HeroSlider/HeroSlider";


const Home = () => {
 

 
  return (
    <>
      <Helmet>
        <title>Sports Training Camp| Home</title>
      </Helmet>
      <div className="">
  
        {/* <TopSlider></TopSlider> */}
        <HeroSlider/>
        <PopularClasses></PopularClasses>
        <PopularInstractors></PopularInstractors>
        <Topplayer></Topplayer>
        <Subscribe></Subscribe>
        <WhyJoinUs></WhyJoinUs>
        <AboutUs></AboutUs>
      </div>
    </>
  );
};

export default Home;
