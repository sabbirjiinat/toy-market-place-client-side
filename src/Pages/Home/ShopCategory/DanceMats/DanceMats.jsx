import { useEffect, useState } from "react";
import DanceMatCard from "./DanceMatCard";


const DanceMats = () => {
    const [danceMats,setDanceMats] = useState([])
    
    useEffect(() => {
        fetch(`http://localhost:5000/toys/${`Dance Mats`}`)
            .then(res => res.json())
            .then(data => {
                setDanceMats(data);
        })
    },[])
    return (
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-12">
            {danceMats.map(danceMat => <DanceMatCard
                key={danceMat._id}
                danceMat={danceMat}
            ></DanceMatCard>)}
        </div>
    );
};

export default DanceMats;