import React from "react";
import {Card} from "antd";
import Meta from "antd/es/card/Meta";
import StarButton from "./StarButton";
import { useDispatch } from "react-redux";
import { setFavorite } from "../actions";

const PokemonCard = ({name, img, pokeType, id, favorite})=> {
    const dispatch = useDispatch();
    const typeString = pokeType.map( (item) => item.type.name).join(", ")


    const handleFavorite = () => {
        dispatch(setFavorite({pokemonId: id}))
    }
    return (
        <Card
        //style={{width: 250, height: 250}}
        title={name}
        cover={<img src={img} alt={name} />}
        extra={<StarButton isFavorite={favorite}  onClick={handleFavorite} />}
        >
            <Meta description={typeString} />
            
        </Card>

    )
}

export default PokemonCard;