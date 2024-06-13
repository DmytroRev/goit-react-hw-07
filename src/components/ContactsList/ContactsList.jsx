import css from "./ContactsList.module.css";
import { Contact } from "../Contact/Contact";
import { useSelector } from "react-redux";
import { visibleContacts } from "../../redux/contactsSlice";

export const ContactList = () => {
  const filter = useSelector(visibleContacts);

  // const filterContacts = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  // );

  return (
    <ul className={css.container}>
      {filter.map((item) => {
        return (
          <li key={item.id}>
            <Contact item={item} />
          </li>
        );
      })}
    </ul>
  );
};
