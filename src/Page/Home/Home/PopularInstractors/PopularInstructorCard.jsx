

const PopularInstructorCard = ({instructor}) => {
    // console.log(instructor);
    const {name,photo}=instructor;
    return (
        <div className="card w-96 bg-base-200 shadow-xl ">
        <figure><img style={{height:"200px"}} className="object-cover" src={photo} /></figure>
        <div className="card-body ">
          <h2 className=" text-center font-bold">{name}</h2>
        
        </div>
      </div>
    );
};

export default PopularInstructorCard;