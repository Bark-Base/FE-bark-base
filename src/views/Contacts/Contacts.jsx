import { useEffect, useState } from "react";
import { useUser } from "../../context/UserContext";
import { getContacts } from "../../services/pets";
import "./Contacts.css";

export default function Contacts() {
    const { user } = useUser();
    const [ contacts, setContacts ] = useState([]);

    useEffect(() => {
        async function getAllContacts() {
           const contactFetch = await getContacts(user.ownerId)
           setContacts(contactFetch);
        }
        getAllContacts();
      
    }, [contacts, user.ownerId]);
    
    return (
        <section>
            {user.ownerId ? contacts?.map((contact) => <p key={contact.contactId}>{contact.name && contact.type}</p>) : <h1>...LOading</h1>}
        </section>
    )
}