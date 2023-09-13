import styled from 'styled-components'

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    background-color: #fff; 
    margin: 0; 
    padding: 0; 
`
export const Pokemon = styled.img`
    width: 200px;
    height: 200px;
`
export const Menu = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 5px;
`
export const Name = styled.span`
    font-size: 24px;
    margin-top: 10px;
    color: mediumseagreen;
`
export const HealthBar = styled.div`
    width: 100px;
    height: 10px;
    background-color:  mediumspringgreen;
    margin-top: 10px;
`
export const States = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 20px;
    position: relative;
    color: mediumseagreen;
`
export const Object = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Label = styled.label`
    color:black;
`
export const VerticalLine = styled.div`
    border-left: 1px solid #ccc;
    height: 30px;
`
export const StatItem = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`
export const HorizontalLine = styled.hr`
    border: none;
    border-top: 1px solid #ccc;
    width: 90%;
`
export const SkillContainer = styled.div`
    text-align: center;
`

export const MoveContainer = styled.div`
    text-align: center;
`

export const SkillList = styled.ul`
    margin-top: 20px;
    padding: 0;
    list-style: none;
`

export const Skill = styled.li`
    background-color: #f2f2f2;
    border: 1px solid #ccc;
    padding: 10px;
    margin: 40px;
    transition: transform 0.2s, box-shadow 0.2s;
    cursor: pointer;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }
`

export const SkillName = styled.h2`
    font-size: 18px;
    margin: 0;
    color: #333;
`

export const SkillDescription = styled.p`
    font-size: 14px;
    margin-top: 5px;
    color: #999;
`

export const Move = styled.li`
    display: flex;
    background-color: #f2f2f2;
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`

export const MoveList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
`

export const BackButton = styled.button`
    border-radius: 20px;
    padding: 10px;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    width: 200px;
    margin-bottom: 10px;
    background-color: chocolate;
    color: white;
    a{
    text-decoration:none;
    color:inherit;
    }

    &:hover {
        background-color: darkred;
    }
`