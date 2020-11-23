const SearchForm = ({ hSearch, hChange, placeholder, value, selection }) => {
  return (
    <div>
      <form onSubmit={hSearch}>
        <input
          className={"search-box"}
          type="search"
          name="query"
          value={value}
          onChange={hChange}
          placeholder={placeholder}
        />
        <br />
        <button className="searchBttn" type={"submit"}>
          Search {selection}
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
