import React from "react";
import SearchForm from "./SearchForm";
import CocktailList from "./CocktailList";

const Home = () => {
    return (
        <main>
            <SearchForm />
            <CocktailList />
        </main>
    )
}

export default Home;