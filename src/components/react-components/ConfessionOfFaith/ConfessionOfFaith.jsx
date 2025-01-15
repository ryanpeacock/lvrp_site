import { confessionOfFaith } from "../../../data/confession";
import "./ConfessionOfFaith.css";

export default function ConfessionOfFaith() {
  return (
    <div class="main-container flex flex-col md:flex-row">
      <div class="wcf-table-contents hidden md:flex md:flex-col md:w-1/6 space-y-2">
        {confessionOfFaith.map((item) => {
          return (
            <a href={`#wcf-chapter-${item.id}`} class="block text-slate-900">
              {`Chapter ${item.id}. `}
              <span className="font-normal text-[#84743c]">{item.title}</span>
            </a>
          );
        })}
      </div>
      <div className="confession-container w-full md:w-4/5 md:mx-auto">
        {confessionOfFaith.map((item) => {
          return (
            <div
              id={`wcf-chapter-${item.id}`}
              className="chapter-container mb-20"
            >
              <h3 className="font-semibold text-3xl mb-4 text-slate-900">
                {`Chapter ${item.id}. `}
                <span className="font-normal text-slate-600">{item.title}</span>
              </h3>
              <div className="paragraphs-container my-5 break-words">
                {item.paragraphs.map((para, index) => {
                  return (
                    <>
                      <div className="paragraph my-4 text-lg">
                        <p>
                          <span className="font-bold mr-1 text-xl text-slate-900">
                            {para.id}.
                          </span>
                          {para.passage.map((line, index) => {
                            return (
                              <>
                                <span className="text-slate-600">{line}</span>
                                <span className="align-sub font-bold text-xs mx-0.5 text-[#84743c]">
                                  {index + 1}
                                </span>
                              </>
                            );
                          })}
                        </p>
                      </div>
                      <div className="proof-texts text-sm">
                        <p>
                          {para.proofTexts.map((proof, index) => {
                            return (
                              <>
                                <span className="font-bold mr-1 text-slate-900">
                                  {index + 1}
                                </span>
                                {proof.map((proofItem, index) => {
                                  return (
                                    <span className="text-[#84743c]">{`${
                                      proofItem.book
                                    } ${proofItem.verse}${
                                      proof.length !== index + 1 ? ", " : " "
                                    } `}</span>
                                  );
                                })}
                              </>
                            );
                          })}
                        </p>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
