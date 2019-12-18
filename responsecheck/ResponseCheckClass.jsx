// import React, {useState, useRef, Component, Fragment} from 'react';
import React, { Component } from 'react';

class ResponseCheck extends Component {
    state={
        state:'waiting',
        message:'클릭해서 시작하세요.',
        result:[],
    };
    timeout;
    startTime;
    endTime;
    onClickScreen=()=>{
        const {state,message}=this.state;
        if(state==='waiting'){
            this.setState({
                state:'ready',
                message:'초록색이 되면 클릭하세요!'
            });
            this.timeout = setTimeout(()=>{
                this.setState({
                    state:'now',
                    message:'지금 클릭하세요!'
                });
                this.startTime = new Date();
            },Math.floor(Math.random()*1000)+2000);
            
        }else if(state==='ready'){ // 성급하게 클릭하였을 시
            clearTimeout(this.timeout);
            this.setState({
                state:'waiting',
                message:'너무 성급하시네요! 초록색이 된 이후에 클릭하세요.'
            })
        }else if(state==='now'){ // 반응속도 체크
            this.endTime = new Date();
            this.setState((prevState)=>{
                return{
                    state:'waiting',
                    result:[...prevState.result, this.endTime - this.startTime],
                    message:'클릭해서 시작하세요.'
                };
            });
        }
    }
    onReset=()=>{
        this.setState({
            result:[]
        })
    }
    renderAverage=()=>{
        return this.state.result.length!==0
        &&
        <>
            <div>평균 시간:{this.state.result.reduce((a,c)=>a+c)/this.state.result.length}ms</div>
            <button onClick={this.onReset}>리셋</button>
        </>
    }
    render() {
        const {state, message}=this.state;
        return (
            <>
                <div id="screen" 
                className={state} 
                onClick={this.onClickScreen}
                >
                    {message}
                </div>
                {this.renderAverage()}
            </>
        );
    }
}

export default ResponseCheck;