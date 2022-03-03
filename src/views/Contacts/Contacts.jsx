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
              <h1 className="contact-type">{contact.type}</h1>
              <p className="contact-field" >
                {contact.name}
              </p>
              <p className="contact-field">{contact?.phone}</p>
              <p className="contact-field">{contact?.email}</p>
              <p className="contact-field">{contact?.address}</p>
            </div>
          ))
        ) : (
          <h1>...LOading</h1>
        )}
      </div>
    </section>
  );
}
