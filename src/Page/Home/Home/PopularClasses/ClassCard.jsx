import { Link } from "react-router-dom";


const ClassCard = ({s}) => {
    // console.log(s);
    return (
<div className="card card-compact bg-base-100 shadow-xl group">
  <figure>
    <img className=" group-hover:scale-110  transition" src={s?.classImg} alt="Shoes" style={{height:"300px"}} />
  </figure>
  <div className="card-body">
    <div className="flex gap-10 md:gap-0 sm:flex-row sm:items-center sm:justify-between">
      <div className="mt-3 sm:mt-0">
        <h2 className="card-title">{s?.instructorName}</h2>
        <p>Email: {s?.instructorEmail}</p>
      </div>
      <div className="mt-3 sm:mt-0">
        <h2 className="card-title">{s?.name}</h2>
        <p>Price: ${s?.price}</p>
        <p>Total Enrolled: {s?.enrolledStudents}</p>
      </div>
    </div>
    <div className="card-actions mt-3 sm:mt-0 justify-start ">
      <Link to="/classes">
        <button className="h-3rem bg-[#f7760c] text-white px-1rem py-1rem rounded-lg p-5">See All Classes</button>
      </Link>
    </div>
  </div>
</div>

    );
};

export default ClassCard;