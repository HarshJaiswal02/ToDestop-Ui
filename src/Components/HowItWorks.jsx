import Step from "./Step";
import step1 from "../assets/asset 66.svg";
import step2 from "../assets/asset 75.png";
const listItems1 = [
  "Multiple windows",
  "Customizable menus",
  "Menubar/tray menus",
  "Launch on startup",
  "Offline support",
  "Tabs (Mac only)",
];

const listItems2 = [
  "Native notifications",
  "Global keyboard shortcuts",
  "Application menu",
  "Context menu",
  "Dock/Icon",
  "Isolated browser views",
  "File system access",
  "…plus more APIs in our docs",
];
const HowItWorks = () => {
  return (
    <div
      id="steps"
      className="flex flex-col gap-6 px-6 py-12 max-w-7xl  mx-auto lg:px-8 lg:mt-10 mt-20"
    >
      <h2 className="text-5xl sm:font-semibold mb-14">How it works</h2>
      <Step
        stepNumber={1}
        title="Bootstrap straight from your web app"
        description="Copy and paste your web app url into ToDesktop. Customize your app design, app icon and window frame UI with no code."
        listItems={listItems1}
        imageSrc={step1}
      />
      <Step
        stepNumber={2}
        title="Add desktop code to customize your web app"
        description="No need to create a new repository, just add code from our desktop APIs to your codebase and get access to system level functionality."
        listItems={listItems2}
        imageSrc={step2}
      />
    </div>
  );
};

export default HowItWorks;
