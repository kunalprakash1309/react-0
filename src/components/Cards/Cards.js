import React from 'react';



const Card = (props) => {
    return (
        <div className="card">
            <img alt="card" src={require(`../../images/${props.image}`)}  />
        </div>
    )
}
const Cards = () => {
    return (
        <div className="cards">
            <Card image="card1.png" />
            <Card image="card2.png" />
            <Card image="card3.png" />
        </div>
    )
}

export default Cards;