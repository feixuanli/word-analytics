import {useState} from "react";
import Textarea from "./Textarea";
import Stats from "./Stats";
import {FACEBOOK_MAX_CHARACHTERS, INSTAGRAM_MAX_CHARACHTERS} from './constants';

export default function Container() {
  const [text, setText] = useState("");
  const numberOfCharacters = text.length;
  const instaCharactersLeft = INSTAGRAM_MAX_CHARACHTERS - text.length;
  const fbCharactersLeft = FACEBOOK_MAX_CHARACHTERS - text.length;
  const numberOfWords = text.split(/\s/).filter(word => word !=="").length;

  const stats = {
    numberOfCharacters, 
    instaCharactersLeft,
    fbCharactersLeft,
    numberOfWords,
  }
  return (
    <main className="container">
        <Textarea text={text} setText={setText}/>
        <Stats 
          stats={stats}
        />
    </main>
  )
}
