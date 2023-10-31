import React from 'react';
import './counter.scss';

export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            color: 'white',
            counter: false
        }
    }
    
    increase = (e) => {
        this.setState({
            number: this.state.number + 1,
            color: 'green'
        });
        var num = this.state.number + 1;
        this.count(num);
    }
    reset = (e) => {
        this.setState({
            number: 0
        });
        this.count(0);
    }
    decrease = (e) => {
        this.setState({
            number: this.state.number - 1,
            color: 'red'
        });
        var num = this.state.number - 1;
        this.count(num);
    }
    count(num) {
        if(num > 0){
            this.setState({
                color: 'lime'
            });
        }
        if(0 > num){
            this.setState({
                color: 'red'
            });
        }
        if(num === 0){
            this.setState({
                color: 'white'
            });
        }
    }
    timer = (e) => {
        if(!this.state.counter){
            var num 
            let clock = setInterval(() => {
                this.setState({number: this.state.number + 1});
                num = this.state.number + 1;
                this.count(num)
            }, 1000);
            this.setState({counter: true, clockSt: clock})
        }
        if (this.state.counter) {
            clearInterval(this.state.clockSt);
            this.setState({counter: false})
        }
    }
    render(){
        return (
            <div className="fade-in counter">
                <div className="container">
                    <h3>Counter</h3>
                    <h3 id="number" style={{color: this.state.color}}>{this.state.number}</h3>
                    <div className="row">
                        <button onClick={this.increase}>Increase +</button>
                        <button onClick={this.reset}>Reset</button>
                        <button onClick={this.decrease}>Decrease -</button>
                        <button onClick={this.timer}>Timer <span style={{color: this.state.counter ? 'lime' : 'red'}}>{this.state.counter ? 'ON' : 'OFF'}</span></button>
                    </div>
                </div>
            </div>
        );
    }
}  