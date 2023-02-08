import { heroes } from "../data/heroes";
import { Hero } from "../interfaces/heroe";

export const getHeroeById = ( id: string | undefined ): Hero | undefined => {
    if ( id === undefined || id.length <= 0 ) return;
    return heroes.find( (hero) => hero.id === id );
}

export{}