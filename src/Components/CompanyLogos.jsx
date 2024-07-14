import { useEffect, useState } from "react";
import arrows from "../assets/asset 2.svg";
import Logo from "./Logo";
import Line from "./Line";
const imagePaths = import.meta.glob("../assets/asset *.png");

// import image3 from "../assets/asset 3.png";
// import image4 from "../assets/asset 4.png";
// import image5 from "../assets/asset 5.png";
// import image6 from "../assets/asset 6.png";
// import image7 from "../assets/asset 7.png";
// import image8 from "../assets/asset 8.png";
// import image9 from "../assets/asset 9.png";
// import image10 from "../assets/asset 10.png";
// import image11 from "../assets/asset 11.png";
// import image12 from "../assets/asset 12.png";
// import { useEffect, useState } from "react";

// const companyIcons = [
//   { _id: 3, iconImage: image3 },
//   { _id: 4, iconImage: image4 },
//   { _id: 5, iconImage: image5 },
//   { _id: 6, iconImage: image6 },
//   { _id: 7, iconImage: image7 },
//   { _id: 8, iconImage: image8 },
//   { _id: 9, iconImage: image9 },
//   { _id: 10, iconImage: image10 },
//   { _id: 11, iconImage: image11 },
//   { _id: 12, iconImage: image12 },
// ];

// const promises = Object.entries(imagePaths)
//   .filter(([path]) => {
//     const match = path.match(/asset (\d+)\.png/);
//     return match && parseInt(match[1]) >= 3 && parseInt(match[1]) <= 14; // Filter from asset 3 to asset 14
//   })

//   .map(([path, resolver]) => {
//     return resolver().then((module) => ({
//       _id: Math.random(),
//       iconImage: module.default,
//     }));
//   });

// Promise.all(promises).then((icons) => {
//   setCompanyIcons(icons);
//   console.log(icons); // Log the resolved icons
// });

const loadIcons = (rangeStart, rangeEnd) => {
  const promises = Object.entries(imagePaths)
    .filter(([path]) => {
      const match = path.match(/asset (\d+)\.png/);
      const index = parseInt(match[1]);
      return match && index >= rangeStart && index <= rangeEnd;
    })
    .map(([, resolver]) => {
      return resolver().then((module) => ({
        _id: Math.random(),
        iconImage: module.default,
      }));
    });

  return Promise.all(promises);
};

export const CompanyLogos = () => {
  const [companyIcons, setCompanyIcons] = useState([]);
  const [companyIcons2, setCompanyIcons2] = useState([]);
  const [companyIcons3, setCompanyIcons3] = useState([]);

  useEffect(() => {
    loadIcons(2, 14).then((icons) => setCompanyIcons(icons));
    loadIcons(14, 25).then((icons) => setCompanyIcons2(icons));
    loadIcons(22, 35).then((icons) => setCompanyIcons3(icons));
  }, []);

  const title = "APPS POWERED BY TODESKTOP";

  return (
    <>
      <div id="companies-container" className="flex flex-col gap-10">
        <div className="flex justify-center gap-2">
          <img className="translate-y-2" src={arrows} alt=""></img>
          <span className="font-semibold">{title}</span>
          <img className="-scale-x-100 translate-y-2" src={arrows} alt=""></img>
        </div>
        <div id="lines-group" className="flex flex-col gap-4">
          <Line translateValue={48}>
            {companyIcons.map(({ _id, iconImage }) => (
              <Logo key={_id} iconImage={iconImage} />
            ))}
          </Line>

          <Line translateValue={30}>
            {companyIcons2.map(({ _id, iconImage }) => (
              <Logo key={_id} iconImage={iconImage} />
            ))}
          </Line>

          <Line translateValue={48}>
            {companyIcons3.map(({ _id, iconImage }) => (
              <Logo key={_id} iconImage={iconImage} />
            ))}
          </Line>
        </div>
      </div>
    </>
  );
};
