/* eslint-disable react/prop-types */
import { useState } from "react";

export const FaqData = ({ question, answer }) => {
  const [isHidden, setIsHidden] = useState(true);

  const toggleAnswer = () => {
    setIsHidden(!isHidden);
    // console.log("Clicked");
  };

  return (
    <div className="group rounded-xl border border-gray-200 bg-gray-50 p-6">
      <dt
        className="cursor-pointer flex justify-between items-center"
        aria-controls="faq-1"
        onClick={toggleAnswer}
      >
        <p className="font-semibold text-lg">{question}</p>
        <i className="fa-solid fa-chevron-up -rotate-180 transition-transform"></i>
      </dt>
      <dd
        id="faq-1"
        className={`${
          isHidden ? "hidden " : "inline-block"
        }text-lg font-light mt-6 `}
      >
        <p>{answer}</p>
      </dd>
    </div>
  );
};
