import { Cocktail } from "./Cocktail.ts";

const cocktailList = [
    new Cocktail('Smoothie aux fruits rouges', require('../assets/cocktails/smoothie_fruits_rouges.jpg'), ['5 fraises', '1 banane', '1 pomme', '1 yaourt nature'], false),
    new Cocktail('Smoothie aux 3 melons', require('../assets/cocktails/smoothie_melon.jpg'), ['3 bananes', '1 pomme', '1 yaourt nature', '10ml de lait'], false),
    new Cocktail('Milk shake à la vanille', require('../assets/cocktails/milk_shake_vanille.jpg'), ['3 Gouttes de vanille liquide', '50cl de lait entier', '1 litre de glace vanille', 'crème chantilly'], false),
    new Cocktail('Ice tea', require('../assets/cocktails/icetea.jpg'), ['100cl d\'eau', '1 pêche', '3 glaçons', '5g de sucre'], false),
    new Cocktail('Smoothie au kiwi', require('../assets/cocktails/smoothie1.jpg'), ['5 kiwis', '1 banane', '1 pomme', '1 yaourt nature'], false),
    new Cocktail('Summer drink', require('../assets/cocktails/summer_drink.jpg'), ['5 fraises', '100cl d\'eau', '1 pomme', '3 glaçons'], false),
    new Cocktail('Cocktail fresh', require('../assets/cocktails/menthe.jpg'), ['100cl d\'eau', '3 feuilles de menthe', '5g de sucre de coco', '1 zeste de citron'], false),
    new Cocktail('Citronade', require('../assets/cocktails/citronnade.jpg'), ['4 citrons jaunes', '50g de sucre de canne', '1 litre d\'eau', '100g de glaçon'], false),
    new Cocktail('Sparkly', require('../assets/cocktails/Sparkly.jpg'), ['100cl d\'eau', '50g de sucre de coco', '2 citrons', '100g de glaçon'], false),

];

export default cocktailList;