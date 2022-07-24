import Image from 'next/image'
import React from 'react'

export default function About() {
  return (
    <div className="about">
      <h1>Sobre o projeto</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus scelerisque massa et tellus pharetra bibendum. Sed posuere ex ac diam sodales pellentesque. Maecenas faucibus, elit in interdum bibendum, ex lectus faucibus magna, id lobortis enim dolor a lorem.</p>
      <Image 
        src="/assets/charizard.png"
        width="300"
        height="300"
        alt="Charizard"
      />
    </div>
  )
}
