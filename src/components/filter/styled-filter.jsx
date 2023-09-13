import styled from 'styled-components'

export const FilterContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const Select = styled.select`
    font-size: 16px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
    transition: border-color 0.3s ease;

    &:focus {
        border-color: #007bff;
    }
`;