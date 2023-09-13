import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Autosuggest from 'react-autosuggest';
import './search.css';
import LoadingIndicator from '../loading/loading';
import { Searchbar, Suggestioncontent, Sugestionimage, Suggestionitem } from './styled-search';

const SearchBar = () => {
    const [searchText, setSearchText] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [not, setError] = useState(null);
    const navigate = useNavigate();

    const getPokemonData = async (name) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
        if (response.ok) {
            return await response.json();
        }
        return null;
    };

    const getSuggestions = async (value) => {
        if (value.trim() === '') {
            return [];
        }

        try {
            setIsLoading(true);

            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1000`);
            const data = await response.json();

            const allPokemonNames = data.results.map((pokemon) => pokemon.name);
            const inputValue = value.trim().toLowerCase();
            const filteredPokemonNames = allPokemonNames.filter((name) =>
                name.toLowerCase().startsWith(inputValue)
            );

            const limitedSuggestions = filteredPokemonNames.slice(0, 3);

            const pokemonDataPromises = limitedSuggestions.map(getPokemonData);
            const pokemonData = await Promise.all(pokemonDataPromises);

            return pokemonData;
        } catch (error) {
            setError('Erro ao buscar os Pokémon. Verifique o nome e tente novamente.');
            return [];
        } finally {
            setIsLoading(false);
        }
    };

    const handleSearch = async (pokemonName) => {
        if (pokemonName) {
            const response = await getPokemonData(pokemonName);

            if (response) {
                navigate(`/pokemon/${pokemonName}`);
            } else {
                alert(`Pokémon '${pokemonName}' não encontrado. Por favor, verifique o nome e tente novamente.`);
                setSearchText('');
            }
        }
    };

    const onSuggestionSelected = (event, { suggestion }) => {
        setSearchText(suggestion.name);
        handleSearch(suggestion.name);
    };

    const inputProps  = {
        placeholder: 'Digite o nome do Pokémon',
        value: searchText,
        onChange: (event, { newValue }) => {
            setSearchText(newValue);
            setError(null); 
        },
        onKeyPress: (e) => {
            if (e.key === 'Enter') {
                handleSearch(searchText);
            }
        },
        className:"input-search"
        
    };
    return (
        <Searchbar>
            
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={async ({ value }) => {
                    const suggestions = await getSuggestions(value);
                    setSuggestions(suggestions);
                }}
                onSuggestionsClearRequested={() => {
                    setSuggestions([]);
                }}
                getSuggestionValue={(suggestion) => suggestion.name}
                renderSuggestion={(suggestion, { isHighlighted }) => (
                    <Suggestionitem highlighted={isHighlighted}>
                        <Suggestioncontent>
                            <Sugestionimage
                                src={suggestion.sprites?.front_default}
                                alt={suggestion.name}
                            />
                            {suggestion.name}
                        </Suggestioncontent>
                    </Suggestionitem>
                )}
                inputProps={inputProps}
                onSuggestionSelected={onSuggestionSelected}
                
            />

            {isLoading && <LoadingIndicator />}
            

        </Searchbar>
    );
};

export default SearchBar;
