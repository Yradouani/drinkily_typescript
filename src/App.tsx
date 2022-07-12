import React, { useState } from 'react';
import './App.css';
import CocktailCard from './Components/CocktailCard/CocktailCard';
import Navbar from './Components/Navbar/Navbar';
import cocktailList from './models/CocktailList';
import { ICocktail } from './models/Cocktail';
import Modal from 'react-modal';
import CocktailForm from './Components/CocktailForm/CocktailForm';

export const CocktailContext = React.createContext<[ICocktail[], Function]>([cocktailList, () => { }]);

function App() {
  const [cocktailOpen, setCocktailOpen] = useState<ICocktail | undefined>(undefined);

  const [cocktails, setCocktails] = useState<ICocktail[]>(cocktailList);
  const handleSearch = (criteria: string): void => {
    console.log(criteria);
    if (criteria === '') {
      setCocktails(cocktailList);
    } else {
      setCocktails(
        cocktailList.filter(
          cocktail => cocktail.name.toLowerCase().startsWith(criteria.toLowerCase())
        )
      )
    }
  }

  return (
    <CocktailContext.Provider value={[cocktails, setCocktails]}>
      <div className="App">
        <Navbar filter={handleSearch} />
        <div className='cocktail_card_container'>
          {cocktails.map((cocktail) => (
            <CocktailCard
              cocktail={cocktail}
              openForm={setCocktailOpen}
            />
          ))}
        </div>
        <Modal isOpen={cocktailOpen !== undefined} onRequestClose={() => setCocktailOpen(undefined)}>
          <CocktailForm cocktail={cocktailOpen} closeModal={setCocktailOpen} />
        </Modal>
      </div>
    </CocktailContext.Provider>
  );
}

export default App;
