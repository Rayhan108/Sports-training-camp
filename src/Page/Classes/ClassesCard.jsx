import { motion } from "framer-motion";

const ClassesCard = ({ singleClass, handleSelectClass, loggedUser, i }) => {
  // console.log(singleClass);

  return (
    <motion.div
      className={`card w-96 ${
        singleClass?.seats == 0 ? "bg-red-700" : "bg-base-200"
      }  shadow-xl`}
      initial={{
        opacity: 0,
        translateX: i % 2 === 0 ? -50 : 50,
        translateY: -50,
      }}
      animate={{ opacity: 1, translateX: 0, translateY: 0 }}
      transition={{ duration: 0.3, delay: i * 0.2 }}
    >
      <figure className="px-10 pt-10">
        <img src={singleClass?.classImg} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <p>Instructor Name: {singleClass?.instructorName}</p>
        <h2 className="card-title">{singleClass?.name}</h2>
        <p>Available Seats: {singleClass?.seats}</p>
        <p>Price: ${singleClass?.price}</p>
        <div className="card-actions">
          <button
            onClick={() => handleSelectClass(singleClass?._id)}
            className={"btn btn-primary"}
            disabled={
              loggedUser?.role == "admin" ||
              loggedUser?.role == "instructor" ||
              singleClass?.seats == 0
            }
          >
            Select Class
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ClassesCard;
