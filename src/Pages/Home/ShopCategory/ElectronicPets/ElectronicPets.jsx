import { useEffect, useState } from "react";
import ElectronicPetCard from "./ElectronicPetCard";

const ElectronicPets = () => {
  const [electronicPets, setElectronicPets] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/toys/${"Electronic Pets"}`)
      .then((res) => res.json())
      .then((data) => {
        setElectronicPets(data);
      });
  }, []);
  return (
    <div className="grid grid-cols-3 gap-4 mt-12">
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
