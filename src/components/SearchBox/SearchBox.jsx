import { useDispatch, useSelector } from "react-redux";
// import css from "../SearchBox/SearchBox.module.css";
import css from "./SearchBox.module.css";
// import { selectFilter } from "../../redux/contactsSlice";
import { selectFilter } from "../../redux/selectors";
import { setStatusFilter } from "../../redux/filtersSlice";
import { useId } from "react";

export default function SearchBox() {
  const id = useId();
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilter = (e) => {
    const name = e.target.value.trim();
    dispatch(setStatusFilter(name));
  };
  return (
    <div className={css.container}>
      <p className={css.content}>Find contact by name</p>
      <input
        className={css.input}
        type="text"
        id={id}
        value={filter}
        onChange={handleFilter}
      />
    </div>
  );
}
