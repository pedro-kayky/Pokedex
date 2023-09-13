import React, { useState } from 'react';
import { FilterContainer,Select } from './styled-filter';


const FilterList = ({ onLoadMore }) => {
    const [selectedType, setSelectedType] = useState('');

    const handleTypeChange = async (event) => {
        const type = event.target.value;
        setSelectedType(type);
        await onLoadMore(type);
    };

    return (
        <FilterContainer>

            <Select value={selectedType} onChange={handleTypeChange}>
                <option value="">All Types</option>
                <option value="fire">Fire</option>
                <option value="water">Water</option>
                <option value="grass">Grass</option>
                <option value="steel">Steel</option>
                <option value="electric">Electric</option>
                <option value="dark">Dark</option>
                <option value="poison">Poison</option>
                <option value="flying">Flying</option>
                <option value="bug">Bug</option>
                <option value="ground">Ground</option>
                <option value="rock">Rock</option>
                <option value="fighting">Fighting</option>
                <option value="normal">Normal</option>
                <option value="ghost">Ghost</option>
                <option value="psychic">Psychic</option>
                <option value="ice">Ice</option>
                <option value="dragon">Dragon</option>
                <option value="fairy">Fairy</option>
            </Select>
        </FilterContainer>
    );
};

export default FilterList;
