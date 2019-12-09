const React = require('react');
const {useState, useRef, Component,Fragment} = React;

const Gugudan = () => {
    const [firstNum, setFirstNum] = useState(Math.ceil(Math.random() * 9));
    const [secondNum, setSecondNum] = useState(Math.ceil(Math.random() * 9));
    const [answer, setAnswer] = useState('');
    const [result, setResult] = useState('');
    const inputRef = useRef(null);
    
  
    const Typing=(e)=>{
      setAnswer(Number(e.target.value));
    }
  
    const ButtonClick=()=>{
      if(answer===(firstNum*secondNum)){
          setResult((answer+'정답!'));
          setFirstNum(Math.ceil(Math.random() * 9));
          setSecondNum(Math.ceil(Math.random() * 9));
          setAnswer('');
      }else{
        setResult('땡!');
        setAnswer('');
      }
      inputRef.current.focus();
    }
  
  
    return (
        <>
           <p>{firstNum}곱하기{secondNum}는?</p>
           <input onChange={Typing} value={answer} ref={inputRef} type="number"/>
           <button onClick={ButtonClick}>입력!</button>
            <p>{result}</p>
        </>
      );
  }

module.exports=Gugudan;