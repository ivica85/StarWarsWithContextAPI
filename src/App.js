import React from "react";
import Routes from "./Routes/Routes";
import { MovieProvider } from "./Context/MovieContext";
const App = () => {
  return (
    <div>
      <MovieProvider>
        <Routes />
      </MovieProvider>
    </div>
  );
};

export default App;
