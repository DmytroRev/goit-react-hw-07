import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../ContactForm/ContactForm";
import { ContactList } from "../ContactsList/ContactsList";
// import { SearchBox } from "../SearchBox/SearchBox";
// import SearchBox from "../SearchBox/SearchBox";
import SearchBox from "../SearchBox/SearchBox";
import css from "./App.module.css";
import { selectError, selectLoading } from "../../redux/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={css.container}>
      <h1 className={css.content}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
      {loading && <div>Loading contacts...</div>}
      {error && <div>Error loading contacts...</div>}
    </div>
  );
}
