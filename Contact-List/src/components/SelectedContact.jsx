import React, { useEffect, useState } from "react";

export default function SelectedContact({ contactId, setSelectedContactId }) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${contactId}`
        );
        const result = await response.json();
        console.log(result);
        setContact(result); 
      } catch (error) {
        console.error(error);
      }
    }
    fetchContact();
  }, [contactId]);

  
  if (contact)
  return (
    <div className="selectedContact">
      <h2>{contact.name}</h2>
      <p>{contact.email}</p>
      <p>{contact.phone}</p>
      <button onClick={() => setSelectedContactId(0)}>Back</button>
    </div>
  );
}