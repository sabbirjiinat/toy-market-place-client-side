import { FcAbout } from "react-icons/fc";

const ClientReview = () => {
  return (
    <div className="bg-[rgb(35,29,76)] py-28 px-8 md:h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 my-10">
      <div className="text-white space-y-8">
        <h2 className="text-3xl font-bold">
          What Our Clients Say <br /> About Us
        </h2>
        <p className="text-gray-400">
          We appreciate your kind and honest <br /> feedback and invite you to
          our <br /> amazing store.
        </p>
        <button className="bg-[rgb(18,174,224)] px-10 py-3 rounded-full text-xl font-semibold hover:bg-[rgb(28,145,184)]">
          About Us
        </button>
      </div>
      <div  className="bg-[rgb(255,255,255)] shadow-xl rounded-2xl space-y-10 text-center hover:-translate-y-2 transition transform duration-300 ">
                  <FcAbout className="p-3 w-20 h-20"></FcAbout>
              <h3 className="text-left ps-10 font-semibold">
          What a great store for the  entire family! My kids love this  place
          because of the toys!
              </h3>
              <div className="flex items-center">
              <img className="h-12 w-12 rounded-full object-cover"  src="https://i.ibb.co/QbHjfp7/pexels-vanessa-loring-7869077.jpg" />
                  <div className="">
                  <p className="font-bold">Mandy Mathers</p>
              <p className="text-gray-400">CEO, Business Co</p>
            </div>
             </div>
          </div>
          

          <div className="bg-[rgb(255,255,255)] shadow-xl rounded-2xl space-y-10 text-center hover:-translate-y-2 transition transform duration-300 ">
                  <FcAbout className="p-3 w-20 h-20 "></FcAbout>
              <h3 className="text-left ps-10 font-semibold">
              Not only do the toys make our children squeal with joy, but the sales team is awesome!
              </h3>
              <div className="flex items-center">
              <img className="h-12 w-12 rounded-full object-cover"  src="https://i.ibb.co/SnkS0vH/header.png" />
                  <div className="">
                  <p className="font-bold">Peter Bowman</p>
              <p className="text-gray-400">CEO, Business Co</p>
            </div>
             </div>
          </div>
    </div>
  );
};

export default ClientReview;
