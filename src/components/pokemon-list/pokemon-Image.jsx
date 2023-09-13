import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../theme-toggler-button/theme-contest';

export function PokemonImage({ pokemonNumber, initialPokemonArray }) {
    const { theme } = useContext(ThemeContext);
    const [pokemonData, setPokemonData] = useState({});
    const [pokemonArray, setPokemonArray] = useState(initialPokemonArray);

    useEffect(() => {
        const fetchPokemonData = async () => {
            try {
                const animatedSpriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemonNumber}.gif`;
                const defaultSpriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonNumber}.png`;

                const response = await fetch(animatedSpriteUrl);
                if (response.status === 200) {
                    setPokemonData({ spriteUrl: animatedSpriteUrl });
                } else {
                    setPokemonData({ spriteUrl: defaultSpriteUrl });
                }
            } catch (error) {
                console.error('Error fetching Pokemon data:', error);
            }
        };

        fetchPokemonData();
    }, [pokemonNumber]);

    const imageStyle = {
        backgroundColor: theme.sectionPokemon.backgroundColor,
    };

    return (
        <img src={pokemonData.spriteUrl} alt={`Pokemon ${pokemonNumber}`} style={imageStyle} />
    );
}
