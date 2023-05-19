import { useEffect, useState } from "react";
import ToyCard from "./ToyCard";

const ToyGallery = () => {
  const [toyGallery, setToyGallery] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/toyGallery")
      .then((res) => res.json())
      .then((data) => setToyGallery(data));
  }, []);

  return (
    <div className="my-10">
      <h2 className="text-center text-3xl md:text-5xl my-10 text-gray-800">
        CATEGORIES FEATURES
      </h2>
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {toyGallery?.map((toy) => (
          <ToyCard key={toy._id} toy={toy}></ToyCard>
        ))}
      </div>
    </div>
  );
};

export default ToyGallery;
