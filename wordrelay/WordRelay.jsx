const React = require('react');
const {useState, useRef, Component} = React;

const WordRelay = () => {
    const [word, setWord] = useState('도룡뇽');
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputRef = useRef(null);
    

    const onSubmitForm=(e)=>{
        e.preventDefault();
        if(word[word.length-1]===value[0]){
            setResult('딩동댕');
            setWord(value);
            setValue('');
            inputRef.current.focus();
        }else {
            setResult('땡!');
            setValue('');
            inputRef.current.focus();
        }
    };

    const onChangeInput = (e) =>{
        setValue(e.currentTarget.value);
    };

    return (
            <>
                 <p>{word}</p>
                <form onSubmit={onSubmitForm}>
                    <label htmlFor="wordInput">답 입력</label>
                    <input id="wordInput" className="wordInput" ref={inputRef} value={value} onChange={onChangeInput}/>
                    <button>입력!</button>
                </form>
                <p>{result}</p>
                
                
            </>
        )
}

module.exports = WordRelay;