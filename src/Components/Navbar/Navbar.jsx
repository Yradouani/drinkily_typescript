import React from 'react';
import './Navbar.scss';
import TextField from '@mui/material/TextField';

const Navbar = (props) => {
    return (
        <div className='navbar'>
            <h1>Drinkily</h1>
            <TextField id="filled-basic" label="Rechercher" variant="filled" onChange={(e) => { props.filter(e.target.value) }} />
        </div>
    );
};

export default Navbar;