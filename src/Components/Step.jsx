/* eslint-disable react/prop-types */
import ListItem from "./ListItems";

const Step = ({ stepNumber, title, description, listItems, imageSrc }) => (
  <div className="rounded-xl border px-8 py-12 flex flex-col lg:flex-row justify-between">
    <div className="flex flex-col gap-6 lg:w-1/2">
      <span className="border border-yellow-300 bg-yellow-50 text-yellow-800 w-fit px-3 py-1 rounded-lg font-medium font-display">
        {`Step ${stepNumber}`}
      </span>
      <h3 className="text-4xl">{title}</h3>
      <p className="text-lg font-light">{description}</p>
      <ul className="grid grid-cols-2 gap-2">
        {listItems.map((item, index) => (
          <ListItem key={index} text={item} />
        ))}
      </ul>
    </div>
    <div className="pt-12">
      <img src={imageSrc} alt="" />
    </div>
  </div>
);

export default Step;
