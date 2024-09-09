import css from "../components/SearchBox.module.css";

const SearchBox = ({ value, handleFilterChange }) => {
  return (
    <div className={css.searchBox}>
      <p className={css.text}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={handleFilterChange}
      />
    </div>
  );
};

export default SearchBox;
