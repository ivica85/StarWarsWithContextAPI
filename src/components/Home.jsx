import { useContext } from "react";
import { MovieContext } from "../Context/MovieContext";
import ButtonLoadMore from "./ButtonLoadMore/ButtonLoadMore";
import CardList from "./CardList/CardList";
import SearchForm from "./SearchForm/SearchForm";
import SelectForm from "./SelectForm/SelectForm";
import Header from "./Header/Header";

const Home = () => {
  const { Query, Datas, ValueOfCard, Selection, hSearch } = useContext(
    MovieContext
  );

  const [query, setQuery] = Query;
  const [datas] = Datas;
  const [valueOfCard, setValueOfCard] = ValueOfCard;
  const [selection, setSelection] = Selection;

  return (
    <div>
      <Header />
      <SearchForm
        hSearch={hSearch}
        selection={selection}
        value={query}
        hChange={(e) => setQuery(e.target.value)}
        placeholder={selection === "people" ? "Search People" : "Search Movie"}
      />
      <SelectForm
        selection={selection}
        hSelection={(e) => {
          setSelection(e.target.value);
        }}
      />
      <CardList data={datas} valueOfCard={valueOfCard} propsdata={selection} />
      <ButtonLoadMore
        loadMore={() => {
          setValueOfCard(valueOfCard + 4);
        }}
      />
    </div>
  );
};

export default Home;
