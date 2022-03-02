import "./Pets.css";
import { useState, useEffect } from "react";
import { getPets, updateContacts, updatePet } from "../../services/pets";
import { useUser } from "../../context/UserContext";
import PetDetail from "../../components/PetDetail/PetDetail";
import { Link, useHistory } from "react-router-dom";

export default function Pets() {
  const { user } = useUser();
  const [i, setI] = useState(0);
  const [currPet, setCurrPet] = useState({});
  const [allPets, setAllPets] = useState([]);
  const [loading, setLoading] = useState(false);

  

  useEffect(() => {
    async function getAllpets() {
      setLoading(true);
      const pets = await getPets(user.ownerId);
      setAllPets(pets);
      setLoading(false);
    }
    getAllpets();
  }, [user.ownerId]);

  useEffect(() => {
    setCurrPet(allPets[i]);
  }, [allPets, i]);

  const handleClick = (index) => {
    setI(index);
  };
  const handleSubmit = async (e, pet) => {
    e.preventDefault();
    console.log(pet, ",,,,,,,,,,,,,,,,", pet.contacts);
    await updateContacts(pet.contacts[0]);
    // await updateContacts(contacts[1]);
    // await updateContacts(contacts[2]);
    await updatePet(pet);

    const pets = await getPets(user.ownerId);
    await setAllPets(pets);
  };

  return (
    <>
      {allPets.map((pet, index) => (
        <button key={pet?.petId} onClick={() => handleClick(index)}>
          {pet.name}
        </button>
      ))}
      <Link to="/pets/add">
        <button type="button">Add Pet</button>
      </Link>

      {allPets.length > 0 && currPet?.petId ? (
        <PetDetail handleSubmit={handleSubmit} pet={currPet} />
      ) : (
        <div>
          You have no pets, <h1>Shame</h1>{" "}
        </div>
      )}
    </>
  );
}
