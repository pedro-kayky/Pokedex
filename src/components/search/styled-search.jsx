import styled from 'styled-components'

export const Searchbar = styled.div`
    display: flex;
    justify-content: center;
    `


export const Suggestioncontent = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    `


export const Suggestionitem = styled.div`
    align-items: center;
    padding: 8px;
    border-bottom: 1px solid #ccc;
    cursor: pointer;
    width: 70%;
    &:hover {
        background-color: #f0f0f0;
    }

    `

export const Sugestionimage = styled.img`
    width: 100%;
    max-width: 42px;
    height: auto;
    margin-left: 10px;
    flex-grow: 1; 
    `