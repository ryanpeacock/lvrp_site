import React, { useMemo, useState } from "react";
import CatechismCard from "./CatechismCard";

export const CatechismList = ({ catechismData }) => {
  const [searchText, setSearchText] = useState("");

  const onSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  // Compute filtered data dynamically
  const filteredItems = useMemo(() => {
    if (!searchText.trim()) return catechismData;

    const lowerCaseSearchTerm = searchText.toLowerCase();

    return catechismData.filter((item) => {
      const questionMatches = item?.question
        .toLowerCase()
        .includes(lowerCaseSearchTerm);
      const answerMatches = item?.answer?.some((ans) =>
        ans?.toLowerCase().includes(lowerCaseSearchTerm)
      );

      return questionMatches || answerMatches;
    });
  }, [searchText, catechismData]);

  return (
    <div>
      <div className="w-2/4 mx-auto mb-6">
        <input
          name="searchText"
          className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm"
          value={searchText}
          placeholder="Search for a question"
          onChange={onSearchChange}
        />
      </div>
      <div className="catechism-container flex items-start flex-wrap justify-center">
        {filteredItems.map((question) => {
          return <CatechismCard key={question.id} question={question} />;
        })}
      </div>
    </div>
  );
};
