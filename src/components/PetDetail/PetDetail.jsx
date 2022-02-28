import { useState } from "react";
import Accordion from "../Accordion/Accordion";

export default function PetDetail({ handleSubmit, pet }) {
  const [currentPet, setCurrentPet] = useState({ ...pet });

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <label>
        Name
        <input
          type="text"
          placeholder={currentPet.name}
          value={currentPet.name}
          onChange={(e) =>
            setCurrentPet((previousState) => {
              return { ...previousState, name: e.target.value };
            })
          }
        />
      </label>

      <label>
        Birthday
        <input
          type="text"
          placeholder={currentPet.birthday}
          value={currentPet.birthday}
          onChange={(e) =>
            setCurrentPet((previousState) => {
              return { ...previousState, birthday: e.target.value };
            })
          }
        />
      </label>

      <Accordion
        heading={currentPet.contacts[0].type}
        copy={
          <>
            <input
              type="text"
              id={currentPet.contacts[0].name}
              placeholder={currentPet.contacts[0].name}
              value={currentPet.contacts[0].name}
              onChange={(e) =>
                setCurrentPet((previousState) => {
                  return { ...previousState, name: e.target.value };
                })
              }
            />
            <input
              type="email"
              id={currentPet.contacts[0].email}
              placeholder={currentPet.contacts[0].email}
              value={currentPet.contacts[0].email}
              onChange={(e) =>
                setCurrentPet((previousState) => {
                  return { ...previousState, email: e.target.value };
                })
              }
            />
            <input
              type="text"
              id={currentPet.contacts[0].phone}
              placeholder={currentPet.contacts[0].phone}
              value={currentPet.contacts[0].phone}
              onChange={(e) =>
                setCurrentPet((previousState) => {
                  return { ...previousState, phone: e.target.value };
                })
              }
            />
            <input
              type="text"
              id={currentPet.contacts[0].address}
              placeholder={currentPet.contacts[0].address}
              value={currentPet.contacts[0].address}
              onChange={(e) =>
                setCurrentPet((previousState) => {
                  return { ...previousState, address: e.target.value };
                })
              }
            />
          </>
        }
      />
      <Accordion
        heading={currentPet.contacts[1].type}
        copy={
          <>
            <input
              type="text"
              id={currentPet.contacts[1].name}
              placeholder={currentPet.contacts[1].name}
              value={currentPet.contacts[1].name}
              onChange={(e) =>
                setCurrentPet((previousState) => {
                  return { ...previousState, name: e.target.value };
                })
              }
            />
            <input
              type="email"
              id={currentPet.contacts[1].email}
              placeholder={currentPet.contacts[1].email}
              value={currentPet.contacts[1].email}
              onChange={(e) =>
                setCurrentPet((previousState) => {
                  return { ...previousState, email: e.target.value };
                })
              }
            />
            <input
              type="text"
              id={currentPet.contacts[1].phone}
              placeholder={currentPet.contacts[1].phone}
              value={currentPet.contacts[1].phone}
              onChange={(e) =>
                setCurrentPet((previousState) => {
                  return { ...previousState, phone: e.target.value };
                })
              }
            />
            <input
              type="text"
              id={currentPet.contacts[1].address}
              placeholder={currentPet.contacts[1].address}
              value={currentPet.contacts[1].address}
              onChange={(e) =>
                setCurrentPet((previousState) => {
                  return { ...previousState, address: e.target.value };
                })
              }
            />
          </>
        }
      />
      <Accordion
        heading={currentPet.contacts[2].type}
        copy={
          <>
            <input
              type="text"
              id={currentPet.contacts[2].name}
              placeholder={currentPet.contacts[2].name}
              value={currentPet.contacts[2].name}
              onChange={(e) =>
                setCurrentPet((previousState) => {
                  return { ...previousState, name: e.target.value };
                })
              }
            />
            <input
              type="email"
              id={currentPet.contacts[2].email}
              placeholder={currentPet.contacts[2].email}
              value={currentPet.contacts[2].email}
              onChange={(e) =>
                setCurrentPet((previousState) => {
                  return { ...previousState, email: e.target.value };
                })
              }
            />
            <input
              type="text"
              id={currentPet.contacts[2].phone}
              placeholder={currentPet.contacts[2].phone}
              value={currentPet.contacts[2].phone}
              onChange={(e) =>
                setCurrentPet((previousState) => {
                  return { ...previousState, phone: e.target.value };
                })
              }
            />
            <input
              type="text"
              id={currentPet.contacts[2].address}
              placeholder={currentPet.contacts[2].address}
              value={currentPet.contacts[2].address}
              onChange={(e) =>
                setCurrentPet((previousState) => {
                  return { ...previousState, address: e.target.value };
                })
              }
            />
          </>
        }
      />
      <button type="submit" value="submit">
        Update {pet.name}
      </button>
    </form>
  );
}
