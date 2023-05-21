import { useEffect, useState } from "react";
import TrendCard from "./TrendCard";

const TrendingToys = () => {
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    fetch("https://electronic-toy-world-server-site.vercel.app/trending")
      .then((res) => res.json())
      .then((data) => {
        setTrending(data);
      });
  }, []);
  return (
    <>
      <div className="flex justify-center">
        <h2 className=" text-5xl font-semibold">Trending Toys</h2>
        <p className="badge badge-secondary">NEW</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-10">
        {trending?.map((trend) => (
          <TrendCard key={trend._id} trend={trend}></TrendCard>
        ))}
      </div>
    </>
  );
};

export default TrendingToys;
