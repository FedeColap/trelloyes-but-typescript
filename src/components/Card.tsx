import React from 'react';
import './Card.css'

type CardProps = {
    title: string,
    content: string
}
const Card: React.FC<CardProps> =(props) => {
    return (
        <div className="Cards">
            <h3>{props.title}</h3>
            <p>{props.content}</p>
            <button type='button'>delete</button>
        </div>
    )
}

export default Card;