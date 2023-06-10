


const ClassesCard = ({singleClass,handleSelectClass,loggedUser}) => {
    // console.log(singleClass);

   
    return (
<div className={`card w-96 ${singleClass?.seats==0?"bg-red-700" :"bg-base-200"}  shadow-xl`}>
        <figure className="px-10 pt-10">
          <img src={singleClass?.classImg} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <p>Instructor Name: {singleClass?.instructorName}</p>
          <h2 className="card-title">{singleClass?.name}</h2>
          <p>Available Seats: {singleClass?.seats}</p>
          <p>Price: <span className="text-xl"> ৳</span> {singleClass?.price}</p>
          <div className="card-actions">
            <button onClick={()=>handleSelectClass(singleClass?._id)} className={"btn btn-primary"}
            disabled={loggedUser?.role=='admin'||loggedUser?.role=='instructor'||singleClass?.seats == 0}
            
            >Select Class</button>
          </div>
        </div>
      </div>
    );
};

export default ClassesCard;