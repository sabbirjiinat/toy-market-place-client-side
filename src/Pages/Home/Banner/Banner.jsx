const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full ">
          <img
            src="https://i.ibb.co/7Y4VdrH/electronic-toys.jpg"
            className="md:w-full h-[90vh] object-cover relative bg-black"
          />
          <div className="absolute h-full w-full flex flex-col space-y-3  justify-center items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) ">
            <h1 className="text-gray-400 md:text-6xl text-2xl font-semibold ">
              Let`s Play <br /> All Day
            </h1>
            <p className='text-gray-200 text-center'>
            A smart toy is an interactive toy which effectively  has its own intelligence by virtue <br /> of on-board electronics. These enable it to learn, behave according to preset patterns, and alter its actions <br /> depending upon environmental stimuli and user input.
            </p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/qnL9GWB/photo-1531048324985-45ab12882e58-1200x720.jpg"
            className="w-full  h-[90vh] object-cover"
                  />
                    <div className="absolute h-full w-full flex flex-col space-y-3  justify-center items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) ">
            <h1 className="text-gray-400 md:text-6xl text-2xl font-semibold ">
              Let`s Play <br /> All Day
            </h1>
            <p className='text-gray-200 text-center'>
            A smart toy is an interactive toy which effectively  has its own intelligence by virtue <br /> of on-board electronics. These enable it to learn, behave according to preset patterns, and alter its actions <br /> depending upon environmental stimuli and user input.
            </p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
