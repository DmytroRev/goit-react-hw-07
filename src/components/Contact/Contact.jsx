import { IoMdContact } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { deleteContact } from "../../redux/contactsOps";

import css from "./Contact.module.css";
import { useDispatch } from "react-redux";

export const Contact = ({ item: { name, number, id } }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.container}>
      <div className={css.list}>
        <p className={css.listItem}>
          <IoMdContact className={css.icon} />
          {name}
        </p>
        <p>
          <FaPhone className={css.icon} />
          {number}
        </p>
      </div>
      <div>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};
