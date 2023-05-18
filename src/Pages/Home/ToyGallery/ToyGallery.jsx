
const ToyGallery = () => {
    return (
        <div className="my-16">
            <h2 className="text-center text-3xl md:text-5xl my-10 text-gray-800">CATEGORIES FEATURES</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            <div>
                <img className="h-52 w-full object-cover hover:h-48 duration-300 hover:w-11/12 hover:mx-auto rounded-sm shadow-2xl" src="https://i.ibb.co/fYYy2vC/03-coolest-electronic-toys-2019.jpg" alt="" />
                <h4 className="text-center my-3 text-xl font-semibold hover:text-red-700 duration-300">The Coolest Guitar</h4>
            </div>
            <div>
                <img className="h-52 w-full object-cover hover:h-48 duration-300 hover:w-11/12 hover:mx-auto rounded-sm shadow-2xl" src="https://i.ibb.co/kqJ6Tyy/maxresdefault.jpg" alt="" />
                <h4 className="text-center my-3 text-xl font-semibold hover:text-red-700 duration-300">Home Made Toy</h4>
            </div>
            <div>
                <img className="h-52 w-full object-cover hover:h-48 duration-300 hover:w-11/12 hover:mx-auto rounded-sm shadow-2xl" src="https://i.ibb.co/w04x4qh/61tfep4-B4-FL-SL1305.jpg" alt="" />
                <h4 className="text-center my-3 text-xl font-semibold hover:text-red-700 duration-300">Gaming Cycle</h4>
            </div>
            <div>
                <img className="h-52 w-full object-cover hover:h-48 duration-300 hover:w-11/12 hover:mx-auto rounded-sm shadow-2xl" src="https://i.ibb.co/SsjJXnb/61-Nbb-W3ej-YS.jpg" alt="" />
                <h4 className="text-center my-3 text-xl font-semibold hover:text-red-700 duration-300">Dancing Robot</h4>
            </div>
            <div>
                <img className="h-52 w-full object-cover hover:h-48 duration-300 hover:w-11/12 hover:mx-auto rounded-sm shadow-2xl" src="https://i.ibb.co/25HNZgC/2022-02-13.jpg" alt="" />
                <h4 className="text-center my-3 text-xl font-semibold hover:text-red-700 duration-300">Toy Collection</h4>
            </div>
            <div>
                <img className="h-52 w-full object-cover hover:h-48 duration-300 hover:w-11/12 hover:mx-auto rounded-sm shadow-2xl" src="https://i.ibb.co/nCQX0Ps/Eilik-Robot.jpg" alt="" />
                <h4 className="text-center my-3 text-xl font-semibold hover:text-red-700 duration-300">Eilik Ai Robot</h4>
            </div>
          </div>
        </div>
    );
};

export default ToyGallery;