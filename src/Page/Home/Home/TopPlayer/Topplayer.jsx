import Container from "../../../../Component/Container/Container";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import SectionTitle from "../../../../Component/SectionTitle/SectionTitle";
import img1 from "../../../../assets/top player/john-torcasio-GM4sf9ltjFE-unsplash.jpg";
import img2 from "../../../../assets/top player/john-torcasio-I6pKO0iKVAQ-unsplash.jpg";
// import img3 from "../../../../assets/top player/john-torcasio-T5PQiABBnZI-unsplash.jpg";
const Topplayer = () => {
  return (
    <>
      <Container>
        <SectionTitle header={"MEET our top players"}></SectionTitle>
        <div className="grid md:grid-cols-3 gap-3">
          <div className="rounded-lg  group bg-base-300  shadow-xl h-[410px]">
            <img className="group-hover:scale-95 " src={img1} />
            <div className="p-3 flex flex-row justify-between">
              <div className="">
                <h2 className="card-title">BILLIE BOB SMITH</h2>
                <div className="bg-orange-500 text-center w-2/4 p-1 rounded">
                  <p className="font-bold mx-auto ">Striker</p>
                </div>
              </div>
           <div>
            <p className="font-bold">Social Network</p>
            <div className="items-center justify-center mt-3 flex flex-row gap-3">
              <FaFacebook></FaFacebook>
                  <FaTwitter></FaTwitter>
                  <FaInstagram></FaInstagram>
                  <FaLinkedin></FaLinkedin>
              </div>
           </div>
            </div>
          </div>
          {/* -------------- */}
          <div className="rounded-lg  group bg-base-300  shadow-xl h-[410px]">
            <img className="group-hover:scale-95 " src={img2} />
            <div className="p-3 flex flex-row justify-between">
              <div className="">
                <h2 className="card-title">BILLIE BOB SMITH</h2>
                <div className="bg-orange-500 w-2/4 p-1 text-center rounded">
                  <p className="font-bold mx-auto ">Striker</p>
                </div>
              </div>
           <div>
            <p className="font-bold">Social Network</p>
            <div className="items-center justify-center mt-3 flex flex-row gap-3">
              <FaFacebook></FaFacebook>
                  <FaTwitter></FaTwitter>
                  <FaInstagram></FaInstagram>
                  <FaLinkedin></FaLinkedin>
              </div>
           </div>
            </div>
          </div>
          {/* -------------- */}
          <div className="rounded-lg  group bg-base-300  shadow-xl h-[410px]">
            <img className="group-hover:scale-95 " src={img1} />
            <div className="p-3 flex flex-row justify-between">
              <div className="">
                <h2 className="card-title">BILLIE BOB SMITH</h2>
                <div className="bg-orange-500 w-2/4 p-1 rounded text-center">
                  <p className="font-bold mx-auto ">Striker</p>
                </div>
              </div>
           <div>
            <p className="font-bold">Social Network</p>
            <div className="items-center justify-center mt-3 flex flex-row gap-3">
              <FaFacebook></FaFacebook>
                  <FaTwitter></FaTwitter>
                  <FaInstagram></FaInstagram>
                  <FaLinkedin></FaLinkedin>
              </div>
           </div>
            </div>
          </div>
          {/* -------------- */}

        </div>
        <div className="text-right mr-3 mt-7"><button className="btn-outline border-orange-500 text-black hover:bg-orange-500 hover:text-white btn">VIEW FULL TEAM</button></div>
      </Container>
    </>
  );
};

export default Topplayer;
