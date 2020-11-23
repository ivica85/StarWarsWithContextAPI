import React, { useState } from "react";

const Search = () => {
  const [query, setQuery] = useState("");
  const [peoples, setPeople] = useState([]);

  const searchMovie = async (e) => {
    e.preventDefault();

    const url = `https://swapi.dev/api/people/?search=${query}`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data.results);

      setPeople(data.results);
    } catch (err) { 
      console.error(err);
    }
  };

  return (
    <div>
      <form onSubmit={searchMovie}>
        <label htmlFor="query">People Name</label>
        <input
          type="text" 
          name="query"
          placeholder="Ener Name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type={"submit"}>Search</button>
      </form>
      <div>
        {peoples
          .filter((name) => name.name)
          .map((filteredName, i) => (
          <ul key={i}><li >{filteredName.name}</li></ul>  
          ))}
      </div>
    </div>
  );
};

export default Search;
