import { useEffect, useState } from "react";
import { useUser } from "../../context/UserContext";
import { getContacts } from "../../services/pets";
import "./Contacts.css";

export default function Contacts() {
  const { user } = useUser();
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    async function getAllContacts() {
      const contactFetch = await getContacts(user.ownerId);
      setContacts(contactFetch);
    }
    getAllContacts();
  }, [contacts, user.ownerId]);

  return (
    <section>
      <div className="contacts-wrapper">
        {user.ownerId ? (
          contacts?.map((contact) => (
            <div key={contact.contactId}>
              <h2 className="contacts-wrapper-title">{contact.type}</h2>
              <p>{contact.name}</p>
              <p>{contact?.phone}</p>
              <p>{contact?.email}</p>
              <p>{contact?.address}</p>
            </div>
          ))
        ) : (
          <h1>...LOading</h1>
        )}
      </div>
    </section>
  );
}
