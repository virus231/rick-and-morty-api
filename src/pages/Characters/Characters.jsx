import {useContext, useEffect, useState} from 'react';
import {GlobalContext} from '../../context/GlobalState'
import useFetch from '../../hooks/useFetch'
import {CharacterCard} from "../../components/CharacterCard/CharacterCard";
import {GetLoading} from "../../components/Loader/Loader";
import {Row} from "react-bootstrap";

export const Characters = () => {
    const { setUrl, isLoading } = useContext(GlobalContext);
    const [data, setData] = useState([]);
    const [nextPage, setNextPage] = useState(null);
    const [prevPage, setPrevPage] = useState(null);
    
    useFetch({ setData, setNextPage, setPrevPage }, "Characters");

    useEffect(() => {
        setUrl("https://rickandmortyapi.com/api/character");
    }, []);
    // console.log(data)

    const getCharacter = () => {
        return data.map(character => (
            <CharacterCard {...character} key={character.id} />
        ))
    }

    return (
        <div>
            <Row>
                {
                    isLoading ? GetLoading() : getCharacter()
                }
            </Row>
        </div>
    )
}