import ContactForm from "../ContactForm/ContactForm";
import { ContactList } from "../ContactsList/ContactsList";
import { SearchBox } from "../SearchBox/SearchBox";
import css from "./App.module.css";

export default function App() {
  return (
    <div className={css.container}>
      <h1 className={css.content}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
