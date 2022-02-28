import { useState } from "react";
import Accordion from "../../components/Accordion/Accordion";
import { useUser } from "../../context/UserContext";
import { addContact, addPet } from "../../services/pets";
import { useHistory } from "react-router-dom";

export default function AddPet() {
  const { user } = useUser();
  const history = useHistory();

  const [pet, setPet] = useState({name:'', birthday:''});
  const [trainer, setTrainer] = useState({
    type: "trainer",
  });
  const [walker, setWalker] = useState({
    type: "walker",
  });
  const [vet, setVet] = useState({
    type: "vet",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    // does this need a promiseAll?
    const addedPet = await addPet({ ownerId: user.id, ...pet });
    await addContact({ petId: addedPet.id, ownerId: user.id, ...trainer });
    await addContact({ petId: addedPet.id, ownerId: user.id, ...walker });
    await addContact({ petId: addedPet.id, ownerId: user.id, ...vet });
    history.push(`/pets`);
  };

  return (
    <section style={{ margin: "1rem" }}>
      <h1 style={{ textAlign: "center" }}>Add Pet</h1>
      <form
        style={{ display: "flex", flexDirection: "column" }}
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
        <button type="button" value="button" onClick={() => history.replace('/')}>
          Cancel
        </button>
        <button type="submit" value="submit">
          Save
        </button>
      </form>
    </section>
  );
}