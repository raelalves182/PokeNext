import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Card({ pokemon }) {
  return (
    <div className="card">
      <Image 
        src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
        width="120"
        height="120"
        alt="Pokemon Name"
      />
      <p className="card__id">#{pokemon.id}</p>
      <h3 className="card__title">{pokemon.name}</h3>
      <Link href={`/pokemon/${pokemon.id}`} >
        <a className="card__btn">Detalhes</a>
      </Link>
    </div>
  )
}
