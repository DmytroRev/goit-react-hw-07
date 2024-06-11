import { useDispatch, useSelector } from "react-redux";
import css from "../SearchBox/SearchBox.module.css";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

export const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  const onChangeFilter = (e) => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <div className={css.container}>
      <p className={css.content}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        name="text"
        value={filter}
        onChange={onChangeFilter}
      />
    </div>
  );
};
