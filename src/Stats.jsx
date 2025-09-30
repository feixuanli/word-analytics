import React from "react";

const Stat = ({value, label}) => {
    return (
        <section className="stat">
            <span className="stat__number">{value}</span>
            <h2 className="second-heading">{label}</h2>
        </section>
    )
}

export default function Stats() {
  return (
    <section className="stats">
        <Stat value={0} label="words"/>
        <Stat value={0} label="characters"/>
        <Stat value={280} label="instagram"/>
        <Stat value={2200} label="facebook"/>
    </section>
  )
}
