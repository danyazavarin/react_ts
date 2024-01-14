import React, {FC} from "react";
import Pizza from "../models/Pizza";
import SinglePizza from "./SinglePizza";

interface DisplayPizzasProps {
    pizzaList: Pizza[];
    updatePizza: (newPizza: Pizza) => void;
    deletePizza: (id: number) => void;
}

const DisplayPizzas: FC<DisplayPizzasProps> = ({pizzaList, updatePizza, deletePizza}) => {
    return (
        <div className='container'>
            {pizzaList.map(pizza => <SinglePizza updatePizza={updatePizza} deletePizza={deletePizza} key={pizza.id} pizza={pizza} />)}
        </div>
    )
}

export default DisplayPizzas;