import React, { useContext, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './CocktailForm.scss';
import { ICocktail } from '../../models/Cocktail';
import { CocktailContext } from '../../App';

interface ICocktailForm {
    cocktail: ICocktail | undefined,
    closeModal: Function;
}

const CocktailForm = (props: ICocktailForm) => {
    const [cocktails, setCocktails] = useContext<[ICocktail[], Function]>(CocktailContext);
    const [ingredients, setIngredients] = useState<string[]>(props.cocktail !== undefined ? props.cocktail.ingredients : [""]);

    const changeIngredient = (ingredient: string, index: number) => {
        const newIngredients = [...ingredients];
        newIngredients[index] = ingredient;
        setIngredients(newIngredients)
    }

    const validatedCocktail = () => {
        const newCocktails = [...cocktails];
        let cocktailIndex = 0;
        const cocktailToChange = cocktails.find((cocktail, index) => {
            cocktailIndex = index;
            return props.cocktail ? (cocktail.name === props.cocktail.name) : false;
        })
        if (cocktailToChange) {
            cocktailToChange.ingredients = ingredients;
            newCocktails[cocktailIndex] = cocktailToChange;
            setCocktails(newCocktails);
        }
        props.closeModal(undefined);
    }

    return (
        <div className='modal'>
            <h1>{props.cocktail !== undefined ? props.cocktail.name : ""}</h1>
            <div className='img_ingredient_container'>
                <img src={props.cocktail !== undefined ? props.cocktail.image : ""} alt="" />
                <div>
                    <h2>Ingrédients</h2>
                    <ul>
                        {props.cocktail !== undefined ? props.cocktail.ingredients.map(
                            (ingredient: string, index: number) => {
                                return (
                                    <TextField
                                        id="outlined-basic"
                                        key={ingredient}
                                        variant="outlined"
                                        value={ingredients[index]}
                                        onChange={(e) => changeIngredient(e.target.value, index)}
                                    />
                                )
                            }
                        ) : ""}
                    </ul>
                </div>
            </div>
            <div className='button_container'>
                <Button variant="contained" onClick={() => props.closeModal(undefined)}>ANNULER</Button>
                <Button variant="outlined" onClick={validatedCocktail}>VALIDER</Button>
            </div>
        </div>
    );
};

export default CocktailForm;