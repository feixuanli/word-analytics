
import Warning from './Warning';
import {useState} from "react";

export default function Textarea({text, setText}) {

    const [warningtext, setWarningtext] = useState('');

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
