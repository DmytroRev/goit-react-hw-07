import css from "./ContactsList.module.css";
import { Contact } from "../Contact/Contact";
import { selectContacts } from "../../redux/selectors";
import { selectFilteredContacts } from "../../redux/contactsSlice";
// import { selectNameFilter } from "../../redux/filtersSlice";
import { useSelector } from "react-redux";

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilteredContacts);

  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  );

  return (
    <ul className={css.container}>
      {filterContacts.map((item) => {
        return (
          <li key={item.id}>
            <Contact name={item.name} number={item.number} id={item.id} />
          </li>
        );
      })}
    </ul>
  );
};
