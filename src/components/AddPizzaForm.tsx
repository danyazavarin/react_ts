import React, {ChangeEvent, FC, FormEvent, useState} from "react";
import './styles.css'
import Pizza from "../models/Pizza";

const initState = {
    title: '',
    price: '',
    img: '',
}

interface AddPizzaFormProps {
    addPizza: (newPizza: Pizza) => void;
}

const AddPizzaForm: FC<AddPizzaFormProps> = ({addPizza}) => {
    const [newPizza, setNewPizza] =
        useState<{ title: string, price: string, img: string, }>(initState);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNewPizza({
            ...newPizza,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const {title, price, img} = newPizza;

        if (title && price && img) {
            addPizza({
                id: Date.now(),
                title,
                price: Number(price),
                img,
            })
        }
        setNewPizza(initState);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name='title' placeholder='Название' value={newPizza.title} onChange={handleChange}/>
            <input type="text" name='price' placeholder='Стоимость' value={newPizza.price} onChange={handleChange}/>
            <input type="text" name='img' placeholder='Изображение' value={newPizza.img} onChange={handleChange}/>
            <button type='submit'>+ Добавить в меню</button>
        </form>
    )
}

export default AddPizzaForm;