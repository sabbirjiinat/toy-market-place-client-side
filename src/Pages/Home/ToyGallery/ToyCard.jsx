const ToyCard = ({ toy }) => {
  console.log(toy);
  const { image, title } = toy;
  return (
    <div>
      <img
        className="h-52 w-full object-cover hover:h-48 duration-300 hover:w-11/12 hover:mx-auto rounded-sm shadow-2xl"
        src={image}
        alt=""
      />
      <h4 className="text-center my-3 text-xl font-semibold hover:text-red-700 duration-300">
        {title}
      </h4>
    </div>
  );
};

export default ToyCard;
