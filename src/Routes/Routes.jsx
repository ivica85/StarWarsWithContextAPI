import {useContext} from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../components/Home";
import {MovieContext} from '../Context/MovieContext'
import CardDetailsPeople from "../components/Card/CardDetailsPeople";
import CardDetailsMovie from "../components/Card/CardDetailsMovie";

const Routes = () => {

  const {Query} = useContext(MovieContext)

  const [query] = Query

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path={`/people/:id/`} component={CardDetailsPeople} exact />
        <Route path={`/films/:id/`} component={CardDetailsMovie} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
