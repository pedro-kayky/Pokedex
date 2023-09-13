import React, { useState, useEffect, useContext } from "react";
import './pokemom-list.css';
import { CardList } from "./card.list";
import SearchBar from "../search/search";
import { ThemeContext, themes } from "../theme-toggler-button/theme-contest";
import { ToggleButton } from "../theme-toggler-button/toggle-button";
import Button from "../theme-toggler-button/button";
import FilterList from "../filter/filter";
import LoadingIndicator from "../loading/loading";
import { Panel, Header } from "./style-pokemon-list";

async function createDeck() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=400&offset=0');
    const deck = await response.json();
    return deck.results;
}

export async function getCards(deckId) {
    const pokemonDetailsPromises = deckId.map(async (pokemon) => {
        const response = await fetch(pokemon.url);
        return response.json();
    });

    return await Promise.all(pokemonDetailsPromises);
}

const CreateDeck = () => {
    const [allPokemon, setAllPokemon] = useState([]);
    const [displayedPokemon, setDisplayedPokemon] = useState([]);
    const [startIndex, setStartIndex] = useState(0);
    const [selectedType, setSelectedType] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [isLoadingImages, setIsLoadingImages] = useState(true); 
    const { theme, setTheme } = useContext(ThemeContext);

    const fetchAllPokemon = async () => {
        setIsLoadingImages(true); 

        const deckData = await createDeck();
        const allPokemonDetails = await getCards(deckData);
        setAllPokemon(allPokemonDetails);
        setIsLoading(false);
        setIsLoadingImages(false); 
    };

    const fetchFilteredPokemon = async (type = '', startIndex) => {
        setIsLoadingImages(true); 

        let filteredPokemonDetails = allPokemon;

        if (type !== '') {
            const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
            const data = await response.json();
            const typePokemon = data.pokemon.map(entry => entry.pokemon);
            const typePokemonDetails = await getCards(typePokemon);
            filteredPokemonDetails = typePokemonDetails;
        }

        const endIndex = startIndex + 10;
        const displayedPokemonSlice = filteredPokemonDetails.slice(0, endIndex);
        setDisplayedPokemon(displayedPokemonSlice);
        setIsLoading(false);
        setIsLoadingImages(false); 
    };

    useEffect(() => {
        fetchAllPokemon();
    }, []);

    useEffect(() => {
        fetchFilteredPokemon(selectedType, startIndex);
    }, [selectedType, startIndex]);

    const handleFilterChange = (type) => {
        setSelectedType(type);
        setStartIndex(0);
    };

    const toggleTheme = () => {
        setTheme(theme === themes.light ? themes.dark : themes.light);
    };

    const handleLoadMoreClick = () => {
        const newStartIndex = startIndex + 10;
        const endIndex = newStartIndex + 10;
        const newPokemonSlice = allPokemon.slice(newStartIndex, endIndex);

        
        const newDisplayedPokemon = newPokemonSlice.filter(
            (pokemon) => !displayedPokemon.some((existingPokemon) => existingPokemon.id === pokemon.id)
        );

    
        setDisplayedPokemon((prevDisplayedPokemon) => [...prevDisplayedPokemon, ...newDisplayedPokemon]);
        setStartIndex(newStartIndex);
    };

    useEffect(() => {
        document.body.style.backgroundColor = theme.body.backgroundColor;
    }, [theme]);

    useEffect(() => {
        if (allPokemon.length > 0 && displayedPokemon.length === 0) {
            const initialDisplayPokemon = allPokemon.slice(0, 10);
            setDisplayedPokemon(initialDisplayPokemon);
        }
    }, [allPokemon, displayedPokemon]);

    return (
        <Panel>
            <Header>
                <FilterList onLoadMore={(type) => handleFilterChange(type)} />
                <ToggleButton onToggle={toggleTheme} />
            </Header>
            <SearchBar />
            <CardList displayedPokemon={displayedPokemon} />
            {isLoadingImages ? (
                <LoadingIndicator />
            ) : (
                displayedPokemon.length < allPokemon.length && (
                    <Button onClick={handleLoadMoreClick}>
                        Load More Pokémon
                    </Button>
                )
            )}
        </Panel>
    );
}

export default CreateDeck;
