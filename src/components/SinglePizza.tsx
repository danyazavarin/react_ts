import React, {FC, useState} from "react";
import {AiFillEdit, AiFillDelete} from "react-icons/ai";
import Pizza from "../models/Pizza";
import EditPizzaForm from "./EditPizzaForm";
import {Link} from "react-router-dom";

interface SinglePizzaProps {
    pizza: Pizza;
    updatePizza: (newPizza: Pizza) => void;
    deletePizza: (id: number) => void;
}

const SinglePizza: FC<SinglePizzaProps> = ({pizza, updatePizza, deletePizza}) => {
    const [edit, setEdit] = useState<boolean>(false);

    const handleToggleEdit = () => {
        setEdit(!edit);
    }

    const handleDelete = () => {
        deletePizza(pizza.id);
    }

    return (
        <div className='pizza'>
            <img src={`/images/${pizza.img}`} alt={pizza.title}/>
            <h2>
                <Link to={`/pizza/${pizza.id}`}>
                    {pizza.title}
                </Link>
            </h2>
            <span>{pizza.price} ₽</span>
            <div className='pizza-controls'>
                <AiFillEdit onClick={handleToggleEdit}/>
                <AiFillDelete onClick={handleDelete}/>
            </div>
            {edit && <EditPizzaForm data={pizza} updatePizza={updatePizza} handleToggleEdit={handleToggleEdit}/>}
        </div>
    )
}

export default SinglePizza;