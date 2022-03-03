import { useEffect, useState } from "react";
import Accordion from "../Accordion/Accordion";

export default function PetDetail({ handleSubmit, currentPet }) {
  const [updatedPet, setUpdatedPet] = useState(currentPet);
  const { contacts } = currentPet;
  const [vet, setVet] = useState({
    type: "vet",
    name: contacts[0].name,
    email: contacts[0].email,
    phone: contacts[0].phone,
    address: contacts[0].address,
    contact_id: contacts[0].contact_id,
  });
  const [trainer, setTrainer] = useState({
    type: "trainer",
    name: contacts[1].name,
    email: contacts[1].email,
    phone: contacts[1].phone,
    address: contacts[1].address,
    contact_id: contacts[1].contact_id,
  });
  const [walker, setWalker] = useState({
    type: "walker",
    name: contacts[2].name,
    email: contacts[2].email,
    phone: contacts[2].phone,
    address: contacts[2].address,
    contact_id: contacts[2].contact_id,
  });
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    setUpdatedPet(currentPet);
    setVet({ ...currentPet.contacts[0], type: "vet" });
    setTrainer({ ...currentPet.contacts[1], type: "trainer" });
    setWalker({ ...currentPet.contacts[2], type: "walker" });
  }, [currentPet.contacts, currentPet]);

  return (
    <form
      onSubmit={(e) =>
        handleSubmit(e, { ...updatedPet, contacts: [vet, trainer, walker] })
      }
      style={{ display: "flex", flexDirection: "column" }}
    >
      <label>
        Name
        <input
          type="text"
          // placeholder={updatedPet.name}
          value={updatedPet.name}
          onChange={(e) =>
            setUpdatedPet((previousState) => {
              return { ...previousState, name: e.target.value };
            })
          }
        />
      </label>

      <label>
        Birthday
        <input
          type="date"
          // placeholder='birthday'
          value={updatedPet.birthday}
          onChange={(e) =>
            setUpdatedPet((previousState) => {
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
              id={vet.name}
              placeholder="vet name"
              value={vet.name}
              onChange={(e) =>
                setVet((previousState) => {
                  return { ...previousState, name: e.target.value };
                })
              }
            />
            <input
              type="email"
              id={vet.email}
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
              id={vet.phone}
              placeholder="phone"
              value={vet.phone}
              onChange={(e) =>
                setVet((previousState) => {
                  return { ...previousState, phone: e.target.value };
                })
              }
            />
            <input
              type="text"
              id={vet.address}
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
              id={trainer.name}
              placeholder="name"
              value={trainer.name}
              onChange={(e) =>
                setTrainer((previousState) => {
                  return { ...previousState, name: e.target.value };
                })
              }
            />
            <input
              type="email"
              id={trainer.email}
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
              id={trainer.phone}
              placeholder="phone"
              value={trainer.phone}
              onChange={(e) =>
                setTrainer((previousState) => {
                  return { ...previousState, phone: e.target.value };
                })
              }
            />
            <input
              type="text"
              id={trainer.address}
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
              id={walker.name}
              placeholder="name"
              value={walker.name}
              onChange={(e) =>
                setWalker((previousState) => {
                  return { ...previousState, name: e.target.value };
                })
              }
            />
            <input
              type="email"
              id={walker.email}
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
              id={walker.phone}
              placeholder="phone"
              value={walker.phone}
              onChange={(e) =>
                setWalker((previousState) => {
                  return { ...previousState, phone: e.target.value };
                })
              }
            />
            <input
              type="text"
              id={walker.address}
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
      <button type="button" onClick={() => setEditing(true)}>
        Edit Pet
      </button>
      <button type="button">Cancel</button>
      <button type="submit" value="submit">
        Update {currentPet.name}
      </button>
    </form>
  );
}
