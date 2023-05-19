import { useEffect, useState } from "react";
import RobotCard from "./RobotCard";

const Robots = () => {
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    fetch(
      `https://electronic-toy-world-server-site.vercel.app/toys/${`Robots`}`
    )
      .then((res) => res.json())
      .then((data) => {
        setRobots(data);
      });
  }, []);

  return (
    <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-12">
      {robots.map((robot) => (
        <RobotCard key={robot._id} robot={robot}></RobotCard>
      ))}
    </div>
  );
};

export default Robots;
