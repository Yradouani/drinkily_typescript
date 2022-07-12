export interface ICocktail {
    name: string,
    image: any,
    ingredients: string[]
}

export class Cocktail implements ICocktail {
    name;
    image;
    ingredients;

    constructor(name: string, image: any, ingredients: string[]) {
        this.name = name;
        this.image = image;
        this.ingredients = ingredients;
    }
}