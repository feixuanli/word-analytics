import React from "react";

const Stat = ({value, label}) => {
    return (
        <section className="stat">
            <span className={`stat__number ${value < 0? "stat__number--limit":""}`}>{value}</span>
            <h2 className="second-heading">{label}</h2>
        </section>
    )
}

export default function Stats({
  stats}) {
  const {numberOfWords, numberOfCharacters, instaCharactersLeft, fbCharactersLeft} = stats;
  
   return (
    <section className="stats">
        <Stat value={numberOfWords} label="words"/>
        <Stat value={numberOfCharacters} label="characters"/>
        <Stat value={instaCharactersLeft} label="instagram"/>
        <Stat value={fbCharactersLeft} label="facebook"/>
    </section>
  )
}
