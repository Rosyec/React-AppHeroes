import { heroes } from "../data/heroes";
import { Hero } from "../interfaces/heroe";

export const getSugerencias = ( termino: string ) => {
    const data:Hero[] = heroes.filter( (item) => (item.superhero.toLowerCase().startsWith(termino))  )  ;
    return [ ...data ].slice(0, 5);
}
