const React = require('react');
const {Component,Fragment} = React;

const Gugudan = () => {
    const [firstNum, setFirstNum] = React.useState(Math.ceil(Math.random() * 9));
    const [secondNum, setSecondNum] = React.useState(Math.ceil(Math.random() * 9));
    const [answer, setAnswer] = React.useState('');
    const [result, setResult] = React.useState('');
    const inputRef = React.useRef(null);
    
  
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
        <Fragment>
           <p>{firstNum}곱하기{secondNum}는?</p>
           <input onChange={Typing} value={answer} ref={inputRef} type="number"/>
           <button onClick={ButtonClick}>입력!</button>
            <p>{result}</p>
        </Fragment>
      );
  }

module.exports=Gugudan;