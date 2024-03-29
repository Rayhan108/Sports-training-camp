import Container from "../../../../Component/Container/Container";
import SectionTitle from "../../../../Component/SectionTitle/SectionTitle";
import img from "../../../../assets/About.png"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
const AboutUs = () => {
  return (
    <div>
      <SectionTitle header="About Us"></SectionTitle>
      <Container>
        {" "}
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row ">
            <div className="lg:w-1/2 "
             
        data-aos="fade-left"
        data-aos-duration="1000"
            >
              <img src={img} className="w-3/4 rounded-lg shadow-2xl" />
            </div>
            <div className="lg:w-1/2 space-y-5 p-2"
            
             
        data-aos="fade-right"
        data-aos-duration="1000"
            >
              <p className="py-6 text-5xl font-bold">
              Elevate Your Game at the Sports Training Camp
              </p>
              <p className="">
              We are dedicated to helping athletes of all levels enhance their skills, achieve their goals, and unlock their full potential. Whether you are a beginner looking to learn the fundamentals or an experienced athlete striving for excellence, our camp offers a dynamic and immersive training experience.{" "}
              </p>
              <p className="">
              At Sports Training Camp, we bring together a team of expert coaches and trainers who are passionate about their respective sports. Our diverse range of training programs covers various disciplines, including soccer, basketball, tennis, swimming, track and field, and more. With state-of-the-art facilities and top-notch equipment, we provide a supportive and challenging environment where athletes can grow and thrive.
              </p>
              <button className="btn text-white bg-orange-500">Learn More</button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
