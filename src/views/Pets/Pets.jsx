import "./Pets.css";
import { useState, useEffect } from 'react';
import { getPets } from "../../services/pets";
import { useUser } from "../../context/UserContext";
import PetDetail from "../../components/PetDetail/PetDetail";

export default function Pets() {
    const { user } = useUser();
    const [ i ,setI ] =  useState(0);
    const [currPet, setCurrPet ] = useState({});
    const [ allPets, setAllPets ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    
    useEffect(() => {
        async function getAllpets() {
            setLoading(true);
            const pets = await getPets(user.ownerId);
            setAllPets(pets)
            setCurrPet(pets[i] )
            setLoading(false)
        } 
        getAllpets()
        
    }, [i,user.ownerId]);
    
    
    const handleClick = (index) => {
    setI(index)
    
    }
    const handleSubmit= (e) => {
        e.preventDefault();
        alert('hey')

    }
  
    return ( <>
    { allPets.map((pet, index) =>
    <button key={pet.petId} onClick={() => handleClick(index)}>{pet.name}</button>)
    }
    <button> addPet </button>
    
    { !loading ? <PetDetail  handleSubmit={handleSubmit} pet={currPet}/> : <div>There are none</div>}
    
    </>
    )};
