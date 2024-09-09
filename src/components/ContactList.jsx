import Contact from "./Contact";
import css from "../components/ContactList.module.css";

const ContactList = ({ onContacts, deleteContact }) => {
  return (
    <ul className={css.lists}>
      {onContacts.map((contact) => (
        <Contact
          key={contact.id}
          id={contact.id}
          onName={contact.name}
          onNumber={contact.number}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
