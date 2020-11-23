const CardMovie = ({ movie,style }) => {
  return (
    <div className="card-container">
       <div className="img" style={style} />
      <h1>{movie.title}</h1>
    </div>
  );
};

export default CardMovie;
