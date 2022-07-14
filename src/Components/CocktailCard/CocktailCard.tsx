import { ICocktail } from '../../models/Cocktail';
import './CocktailCard.scss';
import Checkbox from '@mui/material/Checkbox';
// import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/Favorite';
import { useContext } from 'react';
import { CocktailContext } from '../../App';

interface ICocktailCard {
    cocktail: ICocktail,
    openForm: Function
}

const CocktailCard = (props: ICocktailCard): JSX.Element => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const [cocktails, setCocktails] = useContext(CocktailContext);
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
            <Checkbox
                {...label}
                icon={<FavoriteBorderIcon />}
                checkedIcon={<Favorite />}
                className="icon"
                checked={props.cocktail.liked}
                onClick={() => {
                    const cocktailToChangeIndex = cocktails.findIndex((cocktail) => {
                        return cocktail.name === props.cocktail.name
                    })
                    const cocktailUpdated = [...cocktails];
                    cocktailUpdated[cocktailToChangeIndex] = {
                        ...props.cocktail,
                        liked: !props.cocktail.liked
                    }
                    setCocktails(cocktailUpdated);
                }}
            />
        </div>
    );
};

export default CocktailCard;