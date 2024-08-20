import React, { useState } from 'react'
import './App.css';
import Card from './Card.jsx';
const App = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const questions = [
    {title1:"What language is React based on?",title2:'javascript'},
    {title1:"What are the building blocks of React apps?",title2:'Components'},
    {title1:"What's the name of the syntax we use to describe a UI in React?",title2:'JSX'},
    {title1:"How to pass data from parent to child components?",title2:'Props'},
    {title1:"How to give components memory?",title2:'useState Hook'},
    {title1:"What do we call an input element that is completely synchronized with state?",title2:'controlled Element'},
];
const handleCardClick = (index) => {
  setActiveIndex(index === activeIndex ? null : index);  
};
  return (
    <div className="card-container">
      {questions.map((question, index) => (
        <Card
          key={index}
          content={question.title1}
          content2={question.title2}
          isActive={index === activeIndex}
          onClick={() => handleCardClick(index)}
        />
      ))}
    </div>
  );
}

export default App