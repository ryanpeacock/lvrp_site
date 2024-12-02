import React from "react";

import "./CatechismCard.css";

const CatechismCard = ({ question }) => {
  return (
    <div className="catechism-card">
      <div className="title">
        <span className="question-number">{`Question ${question.id}`}.</span>
        <span className="question-text">{question.question}</span>
      </div>
      <div className="body">
        <div className="">
          <span className="answer-title">Answer: </span>
          <p>
            {question.answer.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  {item.trim()}
                  <span className="proof-number">{index + 1}</span>
                </React.Fragment>
              );
            })}
          </p>
        </div>
      </div>
      {/* <div className="card-footer">
        <ul>
          {question.proofTexts.map((proof, index) => {
            return (
              <li>
                <span className="proof-number">{index + 1}</span>.
                <ul>
                  {proof.map((item) => {
                    return (
                      <li>
                        <span>{item.book}</span>
                        <span>{item.verse}</span>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div> */}
    </div>
  );
};

export default CatechismCard;
