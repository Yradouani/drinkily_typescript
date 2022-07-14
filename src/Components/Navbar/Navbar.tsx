import React, { useState } from 'react';
import './Navbar.scss';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/Favorite';

interface INavbar {
    filter: Function;
    likeFilter: Function
}

const Navbar = (props: INavbar) => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [like, setLike] = useState(false);

    const activateLikeFilter = () => {
        props.likeFilter(!like)
        setLike(!like)
    }

    return (
        <div className='navbar'>
            <h1>Drinkily</h1>
            <div>
                <Checkbox
                    {...label}
                    icon={<FavoriteBorderIcon />}
                    checkedIcon={<Favorite />}
                    className="icon"
                    // checked={props.cocktail.liked}
                    onClick={activateLikeFilter}
                />
                <TextField id="filled-basic" label="Rechercher" variant="filled" onChange={(e) => { props.filter(e.target.value) }} />
            </div>
        </div>
    );
};

export default Navbar;