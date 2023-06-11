import { motion } from "framer-motion";

const PopularInstructorCard = ({instructor}) => {
    // console.log(instructor);
    const {name,photo,i}=instructor;
    return (
        <motion.div className="card w-auto bg-base-100 shadow-xl "
        
        initial={{
          opacity: 0,
          translateX: i % 2 === 0 ? -50 : 50,
          translateY: -50,
        }}
        animate={{ opacity: 1, translateX: 0, translateY: 0 }}
        transition={{ duration: 0.3, delay: i * 0.2 }}
        
        
        >
        <figure><img style={{height:"270px"}} className="object-cover" src={photo} /></figure>
        <div className="card-body ">
          <h2 className=" text-center font-bold">{name}</h2>
        
        </div>
      </motion.div>
    );
};

export default PopularInstructorCard;