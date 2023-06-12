import { Helmet } from "react-helmet-async";
import TopSlider from "../TopSlider/TopSlider";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstractors from "../PopularInstractors/PopularInstractors";
import AboutUs from "../AboutUs/AboutUs";


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
        <AboutUs></AboutUs>
      </div>
    </>
  );
};

export default Home;
