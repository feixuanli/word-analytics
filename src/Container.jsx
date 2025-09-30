import {useState} from "react";
import Textarea from "./Textarea";
import Stats from "./Stats";


export default function Container() {
  const [text, setText] = useState("");
  const numberOfCharacters = text.length;
  const instaCharactersLeft = 280 - text.length;
  const fbCharactersLeft = 2200 - text.length;
  const numberOfWords = text.split(/\s/).filter(word => word !=="").length;

  return (
    <main className="container">
        <Textarea text={text} setText={setText}/>
        <Stats 
          numberOfCharacters={numberOfCharacters} 
          instaCharactersLeft={instaCharactersLeft} 
          fbCharactersLeft={fbCharactersLeft}
          numberOfWords={numberOfWords}
        />
    </main>
  )
}
