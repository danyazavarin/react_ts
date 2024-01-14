import {FC, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Pizza from "../models/Pizza";

const PizzaFeature: FC = () => {
    const [pizza, setPizza] = useState<Pizza | null>(null);
    const {id} = useParams();

    useEffect(() => {
        const pizzasState = localStorage.getItem('pizzasState');

        if (pizzasState && id) {
            const pizzaList = JSON.parse(pizzasState);
            const searchId = +id;
            const currentPizza = pizzaList.find((pizza: Pizza) => pizza.id === searchId);
            setPizza(currentPizza);
        }
    }, []);

    return (
        <>
            <span className='heading'>Ваша пицца</span>
            <div className='pizza pizza-page'>
                <img src={`/images/${pizza?.img}`} alt={pizza?.title}/>
                <h2>{pizza?.title}</h2>
                <span>{pizza?.price} ₽</span>
                <p>Лучшая в городе!</p>
            </div>
        </>
    )
}

export default PizzaFeature;