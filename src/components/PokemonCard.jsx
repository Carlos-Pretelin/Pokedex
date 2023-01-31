import React from "react";
import {Card} from "antd";
import Meta from "antd/es/card/Meta";
import { StarOutlined } from "@ant-design/icons";

const PokemonCard = ({name, sprite})=> {
    return (
        <Card
        //style={{width: 250, height: 250}}
        title={name}
        cover={<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt="Ditto" />}
        extra={<StarOutlined />}
        >
            <Meta description="Fire, Magic" />
        </Card>
    )
}

export default PokemonCard;