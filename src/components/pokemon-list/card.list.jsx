import React, { useContext } from "react";
import { ThemeContext } from "../theme-toggler-button/theme-contest";
import { Link } from "react-router-dom";
import { PokemonImage } from "./pokemon-Image";
import { Card, PokemonTypes, List } from "./style-card";

export const CardList = ({ displayedPokemon }) => {
    const { theme } = useContext(ThemeContext);

    const cardStyle = {
        border: theme.card.border,
        backgroundColor: theme.card.backgroundColor,
    };

    const cardNameStyle = {
        color: theme.card.textColor,
        border: `1px solid ${theme.card.textColor}`,
        borderRadius: '80px',
        padding: '5px 10px'
    };

    return (
        <div>
            <List>
                {displayedPokemon.map((pokemon, index) => (
                    <Card
                        key={index}
                        style={cardStyle}
                    >
                        <Link to={`/pokemon/${pokemon.name}`}>
                            <span style={cardNameStyle}>{pokemon.name}</span>
                            <PokemonImage pokemonNumber={pokemon.id} />
                            <PokemonTypes>
                                {pokemon.types.map((type, index) => (
                                <span key={index} className={`pokemon-type ${type.type.name}`}>
                                        {type.type.name}
                                    </span>
                                ))}
                            </PokemonTypes>
                        </Link>
                    </Card>
                ))}
            </List>
        </div>
    );
};
