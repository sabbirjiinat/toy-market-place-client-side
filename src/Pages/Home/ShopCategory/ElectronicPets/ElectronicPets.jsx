import { useEffect, useState } from "react";
import ElectronicPetCard from "./ElectronicPetCard";

const ElectronicPets = () => {
  const [electronicPets, setElectronicPets] = useState([]);

  useEffect(() => {
    fetch(
      `https://electronic-toy-world-server-site.vercel.app/myToys?SubCategory=${`Electronic Pets`}`
    )
      .then((res) => res.json())
      .then((data) => {
        setElectronicPets(data);
      });
  }, []);
  return (
    <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-12">
      {electronicPets.map((electronicPet) => (
        <ElectronicPetCard
          key={electronicPet._id}
          electronicPet={electronicPet}
        ></ElectronicPetCard>
      ))}
    </div>
  );
};

export default ElectronicPets;
