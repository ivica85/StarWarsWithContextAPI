import React, { useState, createContext, useEffect } from "react";
import Axios from "axios";


export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [datas, setDatas] = useState([]);
  const [valueOfCard, setValueOfCard] = useState(4);
  const [selection, setSelection] = useState("people");

  const baseURL = `https://swapi.dev/api/`;
  const characterURL = `http://localhost:3005/characters`
  const dataURL = `${baseURL}${selection}/`;
  const queryURL = `${baseURL}${selection}/?search=${query}`;

  const hSearch = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(queryURL);
      const data = await res.json();
      console.log(data.results);

      setDatas(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const fetchpeople = async () => {
      const resultPeople = await Axios(dataURL);
      console.log(resultPeople.data.results);
      setDatas(resultPeople.data.results);
      if (query === "") {
        return setDatas(resultPeople.data.results);
      }
    };
    fetchpeople();
  }, [queryURL]);

  return (
    <div>
      <MovieContext.Provider
        value={{
          Query: [query, setQuery],
          Datas: [datas, setDatas],
          ValueOfCard: [valueOfCard, setValueOfCard],
          Selection: [selection, setSelection],
          baseURL,
          dataURL,
          queryURL,
          hSearch,
          characterURL
        }}
      >
        {children}
      </MovieContext.Provider>
    </div>
  );
};
