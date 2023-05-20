const TrendCard = ({ trend }) => {
  const { image, price, quantity, name, rating } = trend;
  return (
    <div  data-aos="fade-up"
    data-aos-anchor-placement="top-center" className="card md:h-96 bg-base-300 shadow-xl">
    <figure><img className="md:h-40 w-full object-cover"  src={image} alt="car!" /></figure>
    <div className="card-body">
      <h2 className="card-title ">
      {name}
    
      </h2>
      <p><span className="font-semibold text-gray-600">Quantity : </span>{quantity}</p>
        <p> <span className="font-semibold text-gray-600">Price : </span>{price}</p>
        <p><span className="font-semibold text-gray-600">Rating :</span>{rating}</p>
   
    </div>
  </div>
  
      
  );
};

export default TrendCard;
