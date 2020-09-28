import React from 'react';
import './List.css'
import Card from './Card'

type ListProps = {
    header: string,
    cards: 
        {
            id: string,
            title: string,
            content: string
        }[]
    
}
const List: React.FC<ListProps> =(props) => {
    let listOfCards = props.cards.map(singleCard => <Card key={singleCard.id} title={singleCard.title} content={singleCard.content}></Card>)
    return (
        <section className="List">
            <header className='List-header'>
                <h2>{props.header}</h2>
            </header>
            <div className="List-cards">
                {listOfCards}
                <button type='button' className='List-add-button'>+ Add Random Card</button>
            </div>
        </section>
    )
}

export default List;