import {useState} from "react";
import Warning from './Warning';


export default function Textarea() {
    const [text, setText] = useState("");
    const [warningtext, setWarningtext] = useState('');
    const numberOfCharacters = text.length;

    const handleChange = (e) => {
        let newText = e.target.value;
        if(newText.includes('<script>')) {
            setWarningtext('no <script> allowed')
            newText = newText.replace('<script>', '');
        } else if (newText.includes('@')) {
            setWarningtext('no @ allowed');
            newText = newText.replace('@', '');
        } else {
            setWarningtext('');
        }

        setText(newText);
    }

  return (
    <div className="textarea">
        <textarea onChange={handleChange} 
            value={text}
            placeholder="Enter your text"
            spellCheck={false}
        />
        <Warning warningtext={warningtext} />
    </div>
   
  )
}
