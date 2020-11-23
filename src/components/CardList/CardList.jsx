import { useContext, useState } from "react";
import { MovieContext } from "../../Context/MovieContext";
import CardMovie from "../Card/CardMovie";
import CardPeople from "../Card/CardPeople";
import { Link } from "react-router-dom";
import uuid from "react-uuid";

const CardList = ({ data, valueOfCard, propsdata }) => {
  const { Selection, characterURL } = useContext(MovieContext);
  console.log(characterURL);

  const [selection] = Selection;
  const charactersURL = "https://starwars-visualguide.com/assets/img/characters/";
  const filmsURL = 'https://starwars-visualguide.com/assets/img/films/'

  console.log(data);

  function getId(url) {
    return url.split("/")[url.split("/").length - 2];
  }

  return (
    <div>
      <div className="card-list">
        {data
          .filter((name) => `${name}.${propsdata}`)
          .slice(0, valueOfCard)
          .map((nameData, i) =>
            propsdata === "people" ? (
              <div key={i}>
                <Link to={`/${selection}/${getId(nameData.url)}/`}>
                  <CardPeople
                    people={nameData}
                    key={uuid()}
                    style={{
                      background: `url(${charactersURL + getId(nameData.url)}.jpg)`,
                    }}
                  />
                </Link>
              </div>
            ) : (
              <div key={i}>
                <Link to={`/${selection}/${getId(nameData.url)}/`}>
                  <CardMovie
                    movie={nameData}
                    key={uuid()}
                    style={{
                      background: `url(${filmsURL + getId(nameData.url)}.jpg)`,
                    }}
                  />
                </Link>
              </div>
            )
          )}
      </div>

      <div></div>
    </div>
  );
};

export default CardList;
