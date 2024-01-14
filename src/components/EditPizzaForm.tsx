import React, {ChangeEvent, FC, FormEvent, useState} from "react";
import './styles.css'
import Pizza from "../models/Pizza";

interface EditPizzaFormProps {
    data: Pizza;
    updatePizza: (newPizza: Pizza) => void;
    handleToggleEdit: () => void;
}

const EditPizzaForm: FC<EditPizzaFormProps> = ({data, updatePizza, handleToggleEdit}) => {
    const [editPizza, setEditPizza] = useState<Pizza>(data);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEditPizza({
            ...editPizza,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const {title, price, img} = editPizza;

        if (title && price && img) {
            updatePizza(editPizza);
            handleToggleEdit();
        }
    }

    return (
        <form onSubmit={handleSubmit} className='edit-form'>
            <input type="text" name='title' placeholder='Название' value={editPizza.title} onChange={handleChange}/>
            <input type="text" name='price' placeholder='Стоимость' value={editPizza.price} onChange={handleChange}/>
            <input type="text" name='img' placeholder='Изображение' value={editPizza.img} onChange={handleChange}/>
            <button type='submit'>Подтвердить</button>
        </form>
    )
}

export default EditPizzaForm;