import "./Pets.css";
import { useState, useEffect } from "react";
import { getPets, updateContacts, updatePet } from "../../services/pets";
import { useUser } from "../../context/UserContext";
import PetDetail from "../../components/PetDetail/PetDetail";
import { Link } from "react-router-dom";


export default function Pets() {
 
  const { user, allPets, setAllPets } = useUser();
  const [i, setI] = useState(allPets.length - 1);
  const [currPet, setCurrPet] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
      setLoading(true);
      setCurrPet(allPets[i]);
      setLoading(false);
  }, [allPets, i]);

  const handleClick = (index) => {
    setI(index);
  };
  const handleSubmit = async (e, pet) => {
    e.preventDefault();
    await updatePet(pet);
    await updateContacts(pet.petId, pet.contacts[0]);
    await updateContacts(pet.petId, pet.contacts[1]);
    await updateContacts(pet.petId, pet.contacts[2]);

    const pets = await getPets(user.ownerId);
    await setAllPets(pets);
  };

  const petPage = (
    <section>
      {allPets.map((pet, index) => (
        <button key={pet.petId} onClick={() => handleClick(index)}>
          {pet.name}
        </button>
      ))}
      <Link to="/pets/add">
        <button type="button">Add Pet</button>
      </Link>

      {allPets.length && currPet ? (
        <PetDetail handleSubmit={handleSubmit} pet={currPet} />
      ) : (
        <h1>Add your pet here!</h1>
      )}
    </section>
  );

  return <section>{loading ? <h1>...Loading</h1> : petPage}</section>;
}
