const CatechismCard = ({ question }) => {
  return (
    <div className="w-full md:w-[350px] mx-3 p-6 bg-white rounded-lg shadow-md my-4">
      {/* Question Section */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Question {question.id}: {question.question}
        </h2>
      </div>

      {/* Answer Section */}
      <div className="mb-4">
        <h3 className="text-lg font-medium text-gray-700 mb-2">Answer:</h3>
        <p className="text-gray-600">
          {question.answer.map((line, index) => (
            <span key={index} className="mr-1">
              {line}{" "}
              <span className="font-bold text-xs text-red-400 align-sub ">
                {index + 1}
              </span>
            </span>
          ))}
        </p>
      </div>

      {/* Proof Texts Section */}
      {/* <div>
        <h3 className="text-lg font-medium text-gray-700">Proof Texts:</h3>
        {question.proofTexts.map((proofGroup, groupIndex) => (
          <div key={groupIndex} className="mt-2">
            <ul className="list-disc pl-5">
              {proofGroup.map((proof, proofIndex) => (
                <li key={proofIndex} className="text-gray-600">
                  <span className="font-medium text-gray-800">
                    {proof.book} {proof.verse}
                  </span>
                  {proof.text && <span>: {proof.text}</span>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default CatechismCard;
