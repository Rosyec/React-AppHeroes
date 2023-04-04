import { heroes } from "../data/heroes";

export const getHeroeByPublisher = (publisher: string) => {
  const valid: string[] = ["DC Comics", "Marvel Comics"];

  if (!valid.includes(publisher)) {
    throw new Error(`${publisher} no es un argumento valido!`);
  }

  return heroes.filter((value) => value.publisher === publisher);
};
