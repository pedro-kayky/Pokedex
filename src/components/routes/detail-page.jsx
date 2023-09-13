import React, { useEffect, useState } from 'react';
import { useParams,Link } from 'react-router-dom';
import { Main, Pokemon ,Menu, Name, HealthBar, States, Object, Label, VerticalLine, StatItem, HorizontalLine,SkillContainer, SkillList, SkillDescription, SkillName, Skill, MoveContainer, MoveList, Move, BackButton } from './styled-detail-page';


const DetailPage = () => {
    const { name } = useParams();
    const [pokemonDetails, setPokemonDetails] = useState(null);
    const [abilityDescriptions, setAbilityDescriptions] = useState({});
    const [pokemonMoves, setPokemonMoves] = useState([]);

    useEffect(() => {
        async function fetchPokemonDetails() {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
                const data = await response.json();
                setPokemonDetails(data);
                setPokemonMoves(data.moves);
            } catch (error) {
                console.error("Error fetching Pokemon details:", error);
            }
        }

        fetchPokemonDetails();
    }, [name]);

    useEffect(() => {
        async function fetchAbilityDescriptions() {
            const descriptions = {};

            for (const ability of pokemonDetails.abilities) {
                descriptions[ability.ability.name] = await getAbilityDescription(ability.ability.url);
            }

            setAbilityDescriptions(descriptions);
        }

        if (pokemonDetails) {
            fetchAbilityDescriptions();
        }
    }, [pokemonDetails]);

    if (!pokemonDetails) {
        return <div>Loading...</div>;
    }

    const healthStat = pokemonDetails.stats.find(stat => stat.stat.name === 'hp');
    const maxHealth = healthStat ? healthStat.base_stat : 1;

    
    return (
    <Main>
            <Pokemon
            src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} 
            />
            <Menu>
                <Name>{pokemonDetails.name}</Name>
                <HealthBar style={{ width: `${(healthStat.base_stat / maxHealth) * 170}%` }} />
                <span>{pokemonDetails.stats[0].base_stat} / {pokemonDetails.stats[0].base_stat} PS</span>
            </Menu>
            <States>
                <Object>
                    <span>{pokemonDetails.height}M</span>
                    <Label>Altura</Label>
                    </Object>
                <VerticalLine/>

                <StatItem>
                    {pokemonDetails.types.map((type, index) => (
                        <span key={index} className={`pokemon-type ${type.type.name}`}>
                            {type.type.name}
                        </span>
                    ))}
                </StatItem>

                <VerticalLine/>
                    <Object>
                    <span>{pokemonDetails.weight}KG</span>
                    <Label>Peso</Label>
                    </Object>
                </States>

            <HorizontalLine/>
            <SkillContainer>
                <h2>Habilidades</h2>
                <SkillList>
                    {pokemonDetails.abilities.map((ability, index) => (
                        <Skill key={index}> 
                            <SkillName>
                            {ability.ability.name}
                            </SkillName>
                            <SkillDescription>
                                {abilityDescriptions[ability.ability.name] || "Loading..."}
                            </SkillDescription>
                            </Skill>
                    ))}
                </SkillList>
                </SkillContainer>
            <MoveContainer>
                <h2>Movimentos</h2>
                <MoveList>
                    {pokemonMoves.map((move, index) => (
                            <Move key={index}> 
                            <span>{move.move.name}</span>
                            </Move>
                    ))}
                </MoveList>
                </MoveContainer>

                <BackButton>
                <Link to="/">voltar</Link>
                </BackButton>
                
            </Main>
    );
}

async function getAbilityDescription(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.effect_entries[0].effect;
    } catch (error) {
        console.error("Error fetching ability description:", error);
        return "Description not available.";
    }
}

export default DetailPage;
