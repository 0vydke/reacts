
import React from 'react';
import './faq.scss';

export default class Faq extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {question: 'How can I create an account?', answer: 'Click on "Register" at the top right. Enter your username, email (optional), password and date of birth. Click the "SIGN UP" button.'},
        {question: 'Can I play with one of my crypto wallets directlly?', answer: 'No, it`s only possible to play with an account wallet'},
        {question: 'How to play a certain game', answer: ' Go to the game you`d like to play and click on the "How to play <game>" button. All our 3rd party games also have an information button when the game starts that explains how each game works.'},
      ]
    }
}
  

  render(){
    const { questions } = this.state;
    return (
      <div className="fade-in faq" >
        <div className="questions">
          {questions.map((q, index) => (
              <div className='question' key={index}>
                <h5>{q.question}</h5>
                <p className='answer'>{q.answer}</p>
              </div>
            ))
          }
        </div>
      </div>
    );
  }

}
