import { ICocktail } from '../../models/Cocktail';
import './CocktailCard.scss';

interface ICocktailCard {
    cocktail: ICocktail,
    openForm: Function
}

const CocktailCard = (props: ICocktailCard): JSX.Element => {

    return (
        <div className='cocktail_card_container'>
            <div
                className='cocktail-card'
                onClick={() => props.openForm(props.cocktail)}
            >
                <img src={props.cocktail.image} alt="" />
                <hr />
                <div className='cocktail-card-text-container' >
                    <h1>{props.cocktail.name}</h1>
                    <ul>
                        {props.cocktail.ingredients.map(ingredient => <li>{ingredient}</li>)}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default CocktailCard;