
import React from 'react';
import './faq.scss';

export default class Faq extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      closeOthers: false,
      questions: [
        {open: false, question: 'How can I create an account?', answer: 'Click on "Register" at the top right. Enter your username, email (optional), password and date of birth. Click the "SIGN UP" button.'},
        {open: false, question: 'Can I play with one of my crypto wallets directlly?', answer: 'No, it`s only possible to play with an account wallet'},
        {open: false, question: 'How to play a certain game', answer: ' Go to the game you`d like to play and click on the "How to play <game>" button. All our 3rd party games also have an information button when the game starts that explains how each game works.'},
      ]
    }
}
  toggleCloseAll=()=>{
    this.setState({
      closeOthers: !this.state.closeOthers
    })
  }

  toggleCard(index){
    let array = this.state.questions
    if(this.state.closeOthers === false){
      array[index].open = !array[index].open;
      this.setState({
        questions: array
      })
    } else {
      for(let i = 0; i < array.length;i++){
        if(i == index){
          array[i].open = !array[i].open;
        } else {
          array[i].open = false;
        }
      }
      this.setState({
        questions: array
      })
    }
  }

  render(){
    const { questions } = this.state;
    return (
      <div className="fade-in faq" >
        <h1>FAQ</h1>
        <div className="questions">
          {questions.map((q, index) => (
              <div className={"question " + (q.open ? 'open' : '')}  key={index}>
                <h5>{q.question}</h5>
                <button onClick={() => this.toggleCard(index)} className='toggle'></button>
                <p className='answer'>{q.answer}</p>
              </div>
            ))
          }
        </div>
        <label htmlFor="closeOther" class="checkbox-container">Close Other Cards
          <input type="checkbox" name="closeOther" id="closeOther" onClick={this.toggleCloseAll}/>
          <span class="checkmark"></span>
        </label>
      </div>
    );
  }
}