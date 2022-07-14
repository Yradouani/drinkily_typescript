import React, { useEffect, useState } from 'react';
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
  const [cocktailDisplayed, setCocktailDisplayed] = useState<ICocktail[]>(cocktailList);
  const [cocktails, setCocktails] = useState<ICocktail[]>(cocktailList);

  useEffect(() => {
    const newCocktailsDisplayed: ICocktail[] = [];
    cocktailDisplayed.forEach((cocktail) => {
      const oneCocktail = cocktails.find(c => c.name === cocktail.name)
      if (oneCocktail) {
        newCocktailsDisplayed.push(oneCocktail)
      }
    })
    setCocktailDisplayed(newCocktailsDisplayed)
  }, [cocktails]);

  const handleSearch = (criteria: string): void => {
    console.log(criteria);
    if (criteria === '') {
      setCocktailDisplayed(cocktailList);
    } else {
      setCocktailDisplayed(
        cocktailList.filter(
          cocktail => cocktail.name.toLowerCase().startsWith(criteria.toLowerCase())
        )
      )
    }
  }
  const likeFilter = (like: boolean) => {
    if (like) {
      setCocktailDisplayed(cocktails.filter((cocktail) => cocktail.liked === true))
    } else {
      setCocktailDisplayed(cocktails)
    }
  }
  return (
    <CocktailContext.Provider value={[cocktails, setCocktails]}>
      <div className="App">
        <Navbar filter={handleSearch} likeFilter={likeFilter} />
        <div className='cocktail_card_container'>
          {cocktailDisplayed.map((cocktail) => (
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
