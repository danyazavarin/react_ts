import React, {FC, useEffect, useState} from 'react';
import AddPizzaForm from "../components/AddPizzaForm";
import Pizza from "../models/Pizza";
import DisplayPizzas from "../components/DisplayPizzas";

const HomeFeature: FC = () => {
    const [pizzaList, setPizzaList] = useState<Pizza[]>([]);

    const addPizza = (newPizza: Pizza) => {
        const newPizzaList = [...pizzaList, newPizza];
        setPizzaList(newPizzaList);
        localStorage.setItem('pizzasState', JSON.stringify(newPizzaList));
    }

    const updatePizza = (newPizza: Pizza) => {
        const newPizzaList = pizzaList.map(pizza => pizza.id === newPizza.id ? newPizza : pizza);
        setPizzaList(newPizzaList);
        localStorage.setItem('pizzasState', JSON.stringify(newPizzaList));
    }

    const deletePizza = (id: number) => {
        const newPizzaList = pizzaList.filter(pizza => pizza.id !== id);
        setPizzaList(newPizzaList);
        localStorage.setItem('pizzasState', JSON.stringify(newPizzaList));
    }

    useEffect(() => {
        const pizzasState = localStorage.getItem('pizzasState');
        pizzasState && setPizzaList(JSON.parse(pizzasState));
    }, [])

    return (
        <div className="App">
            <div className='wrap'>
                <span className='heading'>Наша пиццерия</span>
                <AddPizzaForm addPizza={addPizza}/>
                <DisplayPizzas pizzaList={pizzaList} updatePizza={updatePizza} deletePizza={deletePizza}/>
            </div>
        </div>
    );
}

export default HomeFeature;