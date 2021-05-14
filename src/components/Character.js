// Write your Character component here
import React from 'react';
import styled from 'styled-components';


//Making the charaters and propertis 
const creator = (item) =>{
    return (
        <CharactersSty key={item.name} className={item.name}>
        <h2>{item.name}</h2>
        <p>Gender: {item.gender}</p>
        <p>Height: {item.height}</p>
        <p>Birth Year: {item.birth_year}</p>
        <p>Films: {item.films.map(film =>{
            return (<span key={film}> {film}; </span>)
        })}</p>
        
        </CharactersSty>
    )
};


// general styles for all arrays
const CharactersSty = styled.div`
    display: block;
    width: 100%;
    text-align: center;
    margin: 15% 77%;
        span{
            color:#0fb980;
        };
`;

// Stling for each array
const IndCharacterSty = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  width: 40%;

`;



//componets for created arrays and values assinged
const CharacterComponents = props => {
    const {array} = props;
    

    return(
    <IndCharacterSty className="characters">
        {array.map(item => {
            return (creator(item))
        })}
    </IndCharacterSty>
    )
}


export default CharacterComponents; 