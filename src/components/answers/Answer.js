import React from 'react';
import './Answer.css';

const Answer = (props) => {
    let answer= Object.keys(props.answer)
    .map((qAnswer, i) => (
        <li className= {

            // if answer is correct then a class of correct is added to the li
            props.correctAnswer === qAnswer ? 
            'correct' : 
           // else class of incorrect is added to the li

            props.clickedAnswer === qAnswer ?
            'incorrect' : ''
        }

        // when li is clicked, checkedAnswer function is ran to see if answer is correct or not
        onClick={() => props.checkAnswer(qAnswer)}
        key={qAnswer}>
            {props.answer[qAnswer]}
        </li>
    ));
    
    return (
             // once answer is selected, other possible answers as disabled using this and css 

        <>
            <ul disabled={props.clickedAnswer ? true : false} className="Answers">
                {answer}
            </ul>
            <div class="AnswerMessage">
                {
                props.correctAnswer ? 'Correct Answer!' :
                props.clickedAnswer ? <div>'That answer is incorrect. The correct answer is {props.correctAnswer}'</div> : ''
                 }
            </div>
         </>
    );
    
}

export default  Answer;