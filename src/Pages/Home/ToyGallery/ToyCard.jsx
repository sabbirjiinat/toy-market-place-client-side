import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const ToyCard = ({ toy }) => {

  const { image, title } = toy;
  return (
    <div data-aos="zoom-in-up" data-aos-duration="1000">
      <img
        className="h-52 w-full object-cover  rounded-sm shadow-2xl"
        src={image}
        alt=""
      />
      <h4 className="text-center my-3 text-xl font-semibold hover:text-red-700 duration-300 cursor-pointer">
        {title}
      </h4>
    </div>
  );
};

export default ToyCard;
