
import React from 'react';
import './reviewcarousel.scss';
import persons from './reviews.json'
export default class ReviewCarousel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        person: persons[0]
    }
  }

  increase = (e) => {
    var index = this.state.person.id;
    if(this.state.person.id < persons.length - 1){
      index++
    }
    if(this.state.person.id == persons.length - 1){
      index = 0;
    }
    this.setState({
      person: persons[index]
    });
  }

  decrease = (e) => {
    var index = this.state.person.id;
    if(this.state.person.id > 0){
      index--
    }
    if(this.state.person.id == 0){
      index = persons.length-1;
    }
    this.setState({
      person: persons[index]
    });
    console.log('IN')
    console.log(index)
  }
  random = (e) => {
    var index = this.state.person.id;
    this.setState({
      person: persons[this.getRandomExcluding(0,(persons.length-1),index)]
    });
  }

  getRandomExcluding(min, max, exclude) {
    let randomNum;
    do {
      randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (randomNum === exclude);
  
    return randomNum;
  }

  render(){
    const { person } = this.state;
    return (
      <div className="fade-in carousel">
        <h1>Our Employees</h1>
        <hr />
        <div className='card'>
          <img className='photo' src={`${process.env.PUBLIC_URL}/assets/images/person_`+person.id+`.jpg`} alt="" />
          <h4>{person.name}</h4>
          <h5>{person.job}</h5>
          <p>{person.description}</p>
          <div className='arrows'>
            <button onClick={this.decrease}><img src="" alt="" />&lt;</button>
            <button onClick={this.increase}><img src="" alt="" />&gt;</button>
          </div>
          <button onClick={this.random}>Surprise Me</button>
        </div>
      </div>
    );
  }
}
