import React, { Component } from 'react';
import Question from './question/Question';
import Answer from './answers/Answer';
import './Quiz.css';

export default class Quiz extends Component {
    // initiating the local state
    state = {
    questions: {
        1: 'What was Tandem previous name?',
        2: 'In Shakespeares play Julius Caesar, Caesars last words were...', 
        3: 'A group of tigers are referred to as:'
    },
        
    answers: {
        1: {
            1: 'Tandem', 
            2: 'Burger Shack',
            3: 'Extraordinary Humans',
            4: 'Devmund'
        },

        2: {
            1: 'Iacta alea est!',
            2: 'Et tu, Brute?',
            3: 'Vidi, vini, vici',
            4: 'Aegri somnia vana'
        },     
        3: {
            1: 'Chowder', 
            2: 'Pride',
            3: 'Ambush',
            4: 'Destruction'
        }
     }, 
     correctAnswers: {
         1: '4',
         2: '2', 
         3: '3'
     }, 

     correctAnswer: 0,
     clickedAnswer: 0,
     step: 1,
     score: 0
    }
    
    checkAnswer = (answer) => {
        const { correctAnswers, step, score } = this.state;
        if (answer === correctAnswers[step]) {
            this.setState({
                score: score + 1,
                correctAnswer: correctAnswers[step],
                clickedAnswer: answer
            })

        } else {
            this.setState({
                correctAnswer: 0,
                clickedAnswer: answer
            })
        }

    }

    nextStep = (step) => {
        this.setState({
            step: step+1, 
            correctAnswer: 0, 
            clickedAnswer: 0
        })

    }
  
    
    render() {
        let {questions, step, answers, correctAnswer, clickedAnswer, score } = this.state;
         return (
           <div className="Content">
                               
{ step <=Object.keys(questions).length ? 
                (<>
                <h2 className="Title">Welcome to React Trivia!</h2>
                <p className="QuestionNumber">Question #{[step]}</p>
                <Question 
                    question = {questions[step]}/>
                    <Answer 
                    answer = {answers[step]}
                    step = {step}
                    checkAnswer={this.checkAnswer}
                    correctAnswer={correctAnswer}
                    clickedAnswer={clickedAnswer}
                    />
                    <button className="NextQuestion"
                    disabled= {
                        clickedAnswer && Object.keys(questions).length >= step ? false : true
                    }
                    onClick={() => this.nextStep(step)}
                    >
                        Next Question
                        </button>
                        </>) : (
                            <div className="scorePage">
                                <h2>Congratulations, you've completed React Trivia!</h2>
                                <p> You answered {score} out of {Object.keys(questions).length} trivia questions correct. </p>
                                <button className="restart" onClick={() => window.location.reload(false)}>Beat Your Score!</button>

                                </div>
                        )
                    }
            </div>
        )
    }
}