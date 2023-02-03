import React from "react";
import {Card} from "antd";
import Meta from "antd/es/card/Meta";
import { StarOutlined } from "@ant-design/icons";

const PokemonCard = ({name, img,})=> {
    return (
        <Card
        //style={{width: 250, height: 250}}
        title={name}
        cover={<img src={img} alt={name} />}
        extra={<StarOutlined />}
        >
            <Meta description="Fire, Magic" />
            
        </Card>

    )
}

export default PokemonCard;