import { FaqData } from "./FaqData";
const faqData = [
  {
    question: "Is ToDesktop For Me?",
    answer:
      "That depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you.If you want to make a desktop app of a website for your personal use, ToDesktop is overkill.",
  },
  {
    question: "Do you collect or store data about my customers?",
    answer:
      "No. When a ToDesktop app opens it contacts the our servers to check if an update is available. We do not collect or store any user data from these requests.",
  },
  {
    question: "Will my app work offline?",
    answer:
      "Think of ToDesktop as a normal browser that is just for your website. Your website will work exactly as it does in Chrome, or any other browser.If you want to make the app work offline you’ll need to make it into a progressive web app. Include a web manifest, service workers and client-side storage and voila — offline support.Learn more on MDN.",
  },
  {
    question: "Is ToDesktop For Me?",
    answer:
      "That depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you.If you want to make a desktop app of a website for your personal use, ToDesktop is overkill.",
  },
  {
    question: "Do you collect or store data about my customers?",
    answer:
      "No. When a ToDesktop app opens it contacts the our servers to check if an update is available. We do not collect or store any user data from these requests.",
  },
  {
    question: "Will my app work offline?",
    answer:
      "Think of ToDesktop as a normal browser that is just for your website. Your website will work exactly as it does in Chrome, or any other browser.If you want to make the app work offline you’ll need to make it into a progressive web app. Include a web manifest, service workers and client-side storage and voila — offline support.Learn more on MDN.",
  },
];
const Faq = () => {
  return (
    <div
      id="faq"
      className="px-6 py-12 max-w-7xl mt-16 mx-auto lg:px-8 lg:mt-10"
    >
      <h2 className="text-5xl leading-normal sm:font-semibold max-w-2xl">
        FAQs
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-6 gap-6 items-start">
        {faqData.map(({ answer, question }) => (
          <FaqData key={Date.now()} answer={answer} question={question} />
        ))}
      </div>
    </div>
  );
};

export default Faq;
