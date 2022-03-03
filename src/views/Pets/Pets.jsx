import "./Pets.css";
import { useState, useEffect } from "react";
import { getPets, updateContacts, updatePet } from "../../services/pets";
import { useUser } from "../../context/UserContext";
import PetDetail from "../../components/PetDetail/PetDetail";
import { Link } from "react-router-dom";

export default function Pets() {
  const { user, allPets, setAllPets, loading } = useUser();
  const [i, setI] = useState(allPets.length - 1);
  const [currPet, setCurrPet] = useState(allPets[0] || {});

  useEffect(() => {
    setCurrPet(allPets[i]);
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
    setAllPets(pets);
  };

  const petPage = (
    <section>
      {allPets
        .sort((a, b) => a.petId - b.petId)
        .map((pet, index) => (
          <button
            key={pet.petId}
            className={index === i ? "selectedPet" : "unselectedPet"}
            onClick={() => handleClick(index)}
          >
            {pet.name}
          </button>
        ))}
      <Link to="/pets/add">
        <button type="button">Add Pet</button>
      </Link>
      {allPets[0]?.petId && (
        <PetDetail
          handleSubmit={handleSubmit}
          currentPet={currPet || allPets[0]}
        />
      )}
    </section>
  );

  return <section>{loading ? <h1>...Loading</h1> : petPage}</section>;
}
