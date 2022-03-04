import { useEffect, useState } from "react";
import Accordion from "../Accordion/Accordion";
import "./PetDetail.css";

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

  const cancelEdit = () => {
    setUpdatedPet(currentPet);
    setVet(currentPet.contacts[0]);
    setWalker(currentPet.contacts[2]);
    setTrainer(currentPet.contacts[1]);
    setEditing(false);
  };

  return (
    <form
      className="pet-page-pet-info"
      onSubmit={(e) =>
        handleSubmit(e, { ...updatedPet, contacts: [vet, trainer, walker] }) &&
        setEditing(false)
      }
    >
      <section className={!editing ? "not-editing" : "is-editing"}>
        {editing && (
          <label className="pet-name-label">
            <span>NAME </span>
            <input
              type="text"
              readOnly={!editing}
              value={updatedPet.name}
              onChange={(e) =>
                setUpdatedPet((previousState) => {
                  return { ...previousState, name: e.target.value };
                })
              }
            />
          </label>
        )}
        <label className="birthday-label">
          <span>BIRTHDAY </span>
          <input
            type="date"
            readOnly={!editing}
            value={updatedPet.birthday}
            onChange={(e) =>
              setUpdatedPet((previousState) => {
                return { ...previousState, birthday: e.target.value };
              })
            }
          />
        </label>
        <Accordion
          heading={'VETERINARIAN'}
          copy={
            <>
              <input
                type="text"
                id={vet.name}
                readOnly={!editing}
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
                readOnly={!editing}
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
                readOnly={!editing}
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
                readOnly={!editing}
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
          heading={'TRAINER'}
          copy={
            <>
              <input
                type="text"
                id={trainer.name}
                readOnly={!editing}
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
                readOnly={!editing}
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
                readOnly={!editing}
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
                readOnly={!editing}
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
          heading={'WALKER'}
          copy={
            <>
              <input
                type="text"
                id={walker.name}
                readOnly={!editing}
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
                readOnly={!editing}
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
                readOnly={!editing}
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
                readOnly={!editing}
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
      </section>
      <section className="pet-page-buttons">
        {!editing && (
          <button type="button" onClick={() => setEditing(true)}>
            Edit Pet
          </button>
        )}

        {editing && (
          <button type="button" onClick={() => cancelEdit()}>
            Cancel
          </button>
        )}

        {editing && (
          <button type="submit" value="submit">
            Update {currentPet.name}
          </button>
        )}
      </section>
    </form>
  );
}
