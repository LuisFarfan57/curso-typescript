import { getPokemon } from "./generics/getPokemon";
import { Pokemon } from "./interfaces/pokemon"

getPokemon(8)
  .then((pokemon: Pokemon) => {
    console.log(pokemon.name)
  })
