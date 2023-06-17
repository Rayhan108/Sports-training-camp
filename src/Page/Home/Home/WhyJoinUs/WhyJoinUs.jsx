import Container from "../../../../Component/Container/Container";
import SectionTitle from "../../../../Component/SectionTitle/SectionTitle";
import { GiTeacher } from "react-icons/gi";
import { TbAwardFilled } from "react-icons/tb";
import { BsFillHouseGearFill } from "react-icons/bs";
import { MdOutlineContactSupport } from "react-icons/md";

const WhyJoinUs = () => {
  return (
    <div>
      <Container>
        <SectionTitle header={"WHy join us"}></SectionTitle>
        <div className="md:flex md:flex-row gap-5 ">
          <div className="md:mt-32 ">
            <p className="text-red-700 mb-5 font-bold">Why You Join ???</p>
           
            <h1 className="font-bold text-xl">
              {" "}
              Life is like soccer, we need GOALS.
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur doloremque vel adipisci ad, atque neque rem illum
              sapiente reiciendis iusto id.
            </p>
            <div className="divider "></div>
          </div>
          <div className="grid md:grid-cols-2 gap-5 group">
            <div className="card-body bg-white ">
              <h2 className="card-title font-bold">
                <GiTeacher className="text-red-700 font-bold text-3xl"></GiTeacher>{" "}
                Professional Coach
              </h2>
              <p>
                Potenti orci eu sagittis vestibulum sapien laoreet rutrum
                sociosqu lacus vulputate pretium
              </p>
            </div>
            <div className="card-body bg-white group-hover:scale-110">
              <h2 className="card-title font-bold">
                {" "}
                <TbAwardFilled className="text-red-700 font-bold text-3xl"></TbAwardFilled>
                Prestigious Club
              </h2>
              <p>
                Potenti orci eu sagittis vestibulum sapien laoreet rutrum
                sociosqu lacus vulputate pretium
              </p>
            </div>
            <div className="card-body bg-white">
              <h2 className="card-title font-bold">
                {" "}
                <BsFillHouseGearFill className="text-red-700 font-bold text-3xl"></BsFillHouseGearFill>
                Amenities
              </h2>
              <p>
                Potenti orci eu sagittis vestibulum sapien laoreet rutrum
                sociosqu lacus vulputate pretium
              </p>
            </div>
            <div className="card-body bg-white">
              <h2 className="card-title font-bold">
                {" "}
                <MdOutlineContactSupport className="text-red-700 font-bold text-3xl"></MdOutlineContactSupport>
                Support
              </h2>
              <p>
                Potenti orci eu sagittis vestibulum sapien laoreet rutrum
                sociosqu lacus vulputate pretium
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhyJoinUs;
