import "./App.css";
import ContactForm from "./ContactForm";
import SearchBox from "./SearchBox";
import ContactList from "./ContactList";
import { useState, useEffect } from "react";

const phoneBook = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const App = () => {
  // const [contacts, setContacts] = useState(() => {
  //   try {
  //     const contactsFromLocalStore = localStorage.getItem("phonebook");
  //     if (contactsFromLocalStore !== null) {
  //       return JSON.parse(contactsFromLocalStore);
  //     }
  //     return {};
  //   } catch (e) {
  //     return [];
  //   }
  // });
  const [contacts, setContacts] = useState(phoneBook);
  const [filter, setFilter] = useState("");

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const deleteContact = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  const addContact = (newContact) => {
    setContacts((prev) => [...prev, newContact]);
  };

  useEffect(() => {
    localStorage.setItem("phonebook", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox value={filter} handleFilterChange={handleFilterChange} />
      <ContactList
        onContacts={visibleContacts}
        deleteContact={deleteContact}
      />
    </div>
  );
};

export default App;
