import { useState } from "react";
import Accordion from "../../components/Accordion/Accordion";
import { useUser } from "../../context/UserContext";
import { addContact, addPet, getPets } from "../../services/pets";
import { useHistory } from "react-router-dom";
import './AddPet.css'

export default function AddPet() {
  const { user, setAllPets } = useUser();
  const history = useHistory();

  const [pet, setPet] = useState({name:'', birthday:''});
  const [trainer, setTrainer] = useState({
    type: "trainer",
    name: '',
    email: '',
    phone: '',
    address: ''
  });
  const [walker, setWalker] = useState({
    type: "walker",
    name: '',
    email: '',
    phone: '',
    address: ''
  });
  const [vet, setVet] = useState({
    type: "vet",
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    // does this need a promiseAll?
    // await Promise.all(
    const addedPet = await addPet({ownerId: user.ownerId, birthday: pet.birthday, name: pet.name});
    await addContact({ petId: addedPet.petId, ownerId: user.ownerId, ...vet });
    await addContact({ petId: addedPet.petId, ownerId: user.ownerId, ...trainer });
    await addContact({ petId: addedPet.petId, ownerId: user.ownerId, ...walker });
    // )
    const pets = await getPets(user.ownerId);
    setAllPets(pets)
    history.push(`/pets?true`);
  };

  return (
    <section style={{ margin: "1rem" }}>
      <form className="add-pet-form"
        onSubmit={handleSubmit}
      >
        <label>
          Name
          <input
            type="text"
            placeholder="pet name"
            value={pet.name}
            onChange={(e) =>
              setPet((previousState) => {
                return { ...previousState, name: e.target.value };
              })
            }
            required
          />
        </label>

        <label>
          Birthday
          <input
            type="date"
            value={pet.birthday}
            onChange={(e) =>
              setPet((previousState) => {
                return { ...previousState, birthday: e.target.value };
              })
            }
          />
        </label>

        <Accordion
          heading={vet.type}
          copy={
            <>
              <input
                type="text"
                id="name"
                placeholder="veterinarian name"
                value={vet.name}
                onChange={(e) =>
                  setVet((previousState) => {
                    return { ...previousState, name: e.target.value };
                  })
                }
              />
              <input
                type="email"
                id="email"
                placeholder="email"
                value={vet.email}
                onChange={(e) =>
                  setVet((previousState) => {
                    return { ...previousState, email: e.target.value };
                  })
                }
              />
              <input
                type="text"
                id="phone"
                placeholder="phone number"
                value={vet.phone}
                onChange={(e) =>
                  setVet((previousState) => {
                    return { ...previousState, phone: e.target.value };
                  })
                }
              />
              <input
                type="text"
                id="address"
                placeholder="address"
                value={vet.address}
                onChange={(e) =>
                  setVet((previousState) => {
                    return { ...previousState, address: e.target.value };
                  })
                }
              />
            </>
          }
        />
        <Accordion
          heading={trainer.type}
          copy={
            <>
              <input
                type="text"
                id="name"
                placeholder="trainer name"
                value={trainer.name}
                onChange={(e) =>
                  setTrainer((previousState) => {
                    return { ...previousState, name: e.target.value };
                  })
                }
              />
              <input
                type="email"
                id="email"
                placeholder="email"
                value={trainer.email}
                onChange={(e) =>
                  setTrainer((previousState) => {
                    return { ...previousState, email: e.target.value };
                  })
                }
              />
              <input
                type="text"
                id="phone"
                placeholder="phone number"
                value={trainer.phone}
                onChange={(e) =>
                  setTrainer((previousState) => {
                    return { ...previousState, phone: e.target.value };
                  })
                }
              />
              <input
                type="text"
                id="address"
                placeholder="address"
                value={trainer.address}
                onChange={(e) =>
                  setTrainer((previousState) => {
                    return { ...previousState, address: e.target.value };
                  })
                }
              />
            </>
          }
        />
        <Accordion
          heading={walker.type}
          copy={
            <>
              <input
                type="text"
                id="name"
                placeholder="walker name"
                value={walker.name}
                onChange={(e) =>
                  setWalker((previousState) => {
                    return { ...previousState, name: e.target.value };
                  })
                }
              />
              <input
                type="email"
                id="email"
                placeholder="email"
                value={walker.email}
                onChange={(e) =>
                  setWalker((previousState) => {
                    return { ...previousState, email: e.target.value };
                  })
                }
              />
              <input
                type="text"
                id="phone"
                placeholder="phone number"
                value={walker.phone}
                onChange={(e) =>
                  setWalker((previousState) => {
                    return { ...previousState, phone: e.target.value };
                  })
                }
              />
              <input
                type="text"
                id="address"
                placeholder="address"
                value={walker.address}
                onChange={(e) =>
                  setWalker((previousState) => {
                    return { ...previousState, address: e.target.value };
                  })
                }
              />
            </>
          }
        />
        {/* <input type="file" /> */}
        <button type="button" value="button" onClick={() => history.replace('/pets')}>
          Cancel
        </button>
        <button type="submit" value="submit">
          Save
        </button>
      </form>
    </section>
  );
}