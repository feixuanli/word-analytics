import React from "react";

const Stat = ({value, label}) => {
    return (
        <section className="stat">
            <span className="stat__number">{value}</span>
            <h2 className="second-heading">{label}</h2>
        </section>
    )
}

export default function Stats({
  numberOfCharacters, 
  instaCharactersLeft, 
  fbCharactersLeft,
  numberOfWords}) {
  return (
    <section className="stats">
        <Stat value={numberOfWords} label="words"/>
        <Stat value={numberOfCharacters} label="characters"/>
        <Stat value={instaCharactersLeft} label="instagram"/>
        <Stat value={fbCharactersLeft} label="facebook"/>
    </section>
  )
}
