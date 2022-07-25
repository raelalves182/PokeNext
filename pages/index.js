import Card from "components/Card";
import Image from "next/image";

export async function getStaticProps() {
  const maxPokemons = 251
  const api = ' https://pokeapi.co/api/v2/pokemon/'

  const res = await fetch(`${api}/?limit=${maxPokemons}`)
  const data = await res.json()

  // add pokemon index
  data.results.forEach(( item, index ) => {
    item.id = index + 1
  });

  return {
    props: {
      pokemons: data.results,
    },
  }
}

export default function Home({ pokemons }) {
  return (
    <>
      <div className="title">
        <h1>Poke<span>Next</span></h1>
        <Image 
          src="/assets/pokeball.png"
          width="50"
          height="50"
          alt="PokeNext"
        />
      </div>

      <div className="pokemons">
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  )
}
