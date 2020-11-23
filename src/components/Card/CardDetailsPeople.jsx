import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../../Context/MovieContext";
import { Link, useParams } from "react-router-dom";

const CardDetailsPeople = () => {  
  const { dataURL } = useContext(MovieContext);
  const { id } = useParams();


  const API = `${dataURL}${id}`;
  console.log(API);

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();




  useEffect(() => {
    fetch(`${API}`, {})
      .then((res) => res.json())
      .then((response) => { 
        setData(response);
        setIsLoading(false);
        console.log(`${API}`);
      })
      .catch((error) => console.log(error));
  }, [API]);



  return (
    <div>
      <h3>
       
        {!isLoading && (
        <div>
          <h1>Name: {data.name}</h1>
          <h2>Height: {data.height}</h2>
          <h2>Mass: {data.mass}</h2>
          <h2>Hair Color: {data.hair_color}</h2>
          <h2>Skin Color: {data.skin_color}</h2>
          <h2>Eye Color: {data.eye_color}</h2>
          <h2>Birth Year: {data.birth_year}</h2>
          <h2>Gender: {data.gender}</h2>
          <Link to="/">Back to homepage</Link>
        </div>
      )}
      </h3>
    </div>
  );
};

export default CardDetailsPeople;
