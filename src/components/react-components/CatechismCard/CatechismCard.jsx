import "./CatechismCard.css";

const CatechismCard = ({ question }) => {
  return (
    <>
      <div id={`question-${question.id}`} class="p-2 catechism-card w-full">
        <div className="top-question mb-2 text-lg">
          <span class="font-semibold">{`Question ${question.id}:`}</span>{" "}
          <span class="text-gray-700">{question.question}</span>
        </div>
        <div className="answer leading-relaxed text-lg">
          <span class="font-semibold">Answer: </span>
          {question.answer.map((item, index) => {
            return (
              <div class="inline break-words">
                <span class="text-gray-700">{item}</span>
                <span class="align-sub font-semibold text-xs mx-0.5 text-[#84743c]">
                  {index + 1}
                </span>
              </div>
            );
          })}
        </div>
        <div className="proof-texts my-3 text-[#84743c] text-sm italic">
          {question?.proofTexts?.map((item, index) => {
            return (
              <>
                <span class="font-semibold mr-1 text-sm text-slate-900">
                  {index + 1}
                </span>
                {item.map((proof) => {
                  return <span>{`${proof.book} ${proof.verse}, `}</span>;
                })}
              </>
            );
          })}
        </div>
      </div>
      {/* <div className="line-bar"></div> */}
    </>
  );
};

export default CatechismCard;
