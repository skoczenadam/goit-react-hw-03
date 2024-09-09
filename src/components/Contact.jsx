import css from "../components/Contact.module.css";
import { IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

const Contact = ({ id, onName, onNumber, deleteContact }) => {
  return (
    <li className={css.contact_group}>
      <div className={css.contact_list}>
        <div className={css.contact}>
          <IoPerson />
          <p>{onName}</p>
        </div>
        <div className={css.contact}>
          <FaPhone />
          <p>{onNumber}</p>
        </div>
      </div>
      <button className={css.button} onClick={() => deleteContact(id)}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
