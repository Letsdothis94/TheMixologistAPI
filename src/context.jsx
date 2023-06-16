import React, { useState, useEffect, useContext } from "react";

const AppContext = React.createContext();
const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`;

const AppProvider = ({ children }) => {
    const [cocktails, setCocktails] = useState([]);
    const [searchTerm, setSearchTerm] = useState('a');
    const [loading, setLoading] = useState(true);

    const fetchDrinks = async () => {  
        setLoading(true); 
        try {
            const req = await fetch(`${url}${searchTerm}`);
            const res = await req.json();
            const {drinks} = res;
            if(drinks){
                const newCocktails = drinks.map((item) => {
                    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;
                    return (
                        {
                            id: idDrink,
                            name: strDrink,
                            image: strDrinkThumb,
                            info: strAlcoholic,
                            glass: strGlass,  
                        }
                    )
                })
                setCocktails(newCocktails);
            } else {
                setCocktails([]);
            }
            setLoading(false);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        fetchDrinks();
    }, [searchTerm]);

    return (
        <AppContext.Provider
            value={{
                cocktails,
                setSearchTerm,
                loading,
            }}
            >
                {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };