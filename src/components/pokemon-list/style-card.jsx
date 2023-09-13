import styled from 'styled-components'

export const List=styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    padding: 0;
    list-style: none; 
`
export const Card=styled.section`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 1px; 
    transition: 0.3s ease-in-out;
    padding: 5px;
    width: 170px; 
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3); 
    
    a {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
    } 
    
    &:hover{
        transform: scale(1.05); 
        cursor: pointer;
    }
`
export const PokemonType= styled.span`
    padding: 5px 10px;
    border-radius: 5px;
    font-weight: bold;
    text-decoration: none;
    border: 1px solid black;
    margin-right: 5px;
    color: white;
`
export const PokemonTypes= styled.div`
    margin: 10px 0; 
    gap: 10px;
`