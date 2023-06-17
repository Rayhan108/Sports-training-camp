import { Helmet } from "react-helmet-async";
import TopSlider from "../TopSlider/TopSlider";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstractors from "../PopularInstractors/PopularInstractors";
import AboutUs from "../AboutUs/AboutUs";
import Topplayer from "../TopPlayer/Topplayer";
import Subscribe from "../Subscribe/Subscribe";
import WhyJoinUs from "../WhyJoinUs/WhyJoinUs";


const Home = () => {
 

 
  return (
    <>
      <Helmet>
        <title>Sports Training Camp| Home</title>
      </Helmet>
      <div className="">
  
        <TopSlider></TopSlider>
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
