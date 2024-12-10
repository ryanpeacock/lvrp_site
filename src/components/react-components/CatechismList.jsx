import { useMemo, useState } from "react";
import CatechismCard from "./CatechismCard/CatechismCard";

export const CatechismList = ({ catechismData }) => {
  const [searchText, setSearchText] = useState("");

  const onSearchChange = (event) => setSearchText(event.target.value);

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
      <div className="w-full sm:w-3/4 md:w-2/4 mx-auto mb-6 mt-5">
        <input
          name="searchText"
          className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm"
          value={searchText}
          placeholder="Search for a question"
          onChange={onSearchChange}
        />
      </div>
      <div className="flex flex-wrap items-start justify-center">
        {/* <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-6 p-4"> */}
        {filteredItems.map((question) => {
          return <CatechismCard question={question} />;
        })}
      </div>
    </div>
  );
};
