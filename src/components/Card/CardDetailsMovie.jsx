import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../../Context/MovieContext";
import { Link, useParams } from "react-router-dom";

const CardDetailsMovie = () => {  
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
          <h1>Title: {data.title}</h1>
          <h2>Episode: {data.episode_id}</h2>
          <h2>Director: {data.director}</h2>
          <h2>Producer: {data.producer}</h2>
          <h2>Relise Date: {data.release_date}</h2>
          <Link to="/">Back to homepage</Link>
        </div>
      )}
      </h3>
    </div>
  );
};

export default CardDetailsMovie;
