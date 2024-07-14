const mainSection = [
  { icon: "fa-regular fa-file-code", text: "Code Optional" },
  { icon: "fa-solid fa-hand-back-fist", text: "Drag & drop builder" },
  { icon: "fa-solid fa-laptop", text: "Windows, Mac, Linux" },
];

const version = "v0.21.1:";

const MainsSection = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-6 pb-16 flex flex-col sm:items-center sm:text-center sm:pt-12 sm:max-w-2xl">
      <div
        className="flex items-center my-6 gap-2 border border-yellow-300 
        bg-yellow-50 rounded-lg px-3 py-1 w-fit shadow-md hover:shadow-lg hover:-translate-y-1 transition group"
      >
        <div className="w-2 h-2 bg-yellow-400 rounded-full border border-yellow-600"></div>
        <p className="font-display font-medium text-yellow-600">
          {version}
          <span className="text-yellow-800">
            Electron 30,Chromium 124,Node 20.11.1
          </span>
        </p>
        <i className="fa-solid fa-arrow-right text-yellow-600 group-hover:translate-x-1 transition duration-300"></i>
      </div>

      <div className="hidden sm:flex gap-8 my-6">
        {mainSection.map(({ text, icon }) => (
          <div
            className="flex justify-center gap-2 items-center text-gray-500"
            key={text}
          >
            <i className={icon}></i>
            <p>{text}</p>
          </div>
        ))}
      </div>

      <h1 className="text-4xl font-semibold leading-snug mt-4 sm:text-6xl">
        Web app to desktop app in minutes
      </h1>

      <p className="text-xl mt-4 sm:text-2xl sm:mt-8 text-gray-800">
        Take your web app codebase and transform it into a cross platform
        desktop app with native functionality.
      </p>

      <div className="mt-12 flex gap-4 flex-col sm:flex-row">
        <button className="px-8 py-3 font-semibold rounded-lg text-white bg-primary shadow-sm hover:bg-opacity-90">
          Download now
        </button>

        <button className="px-8 py-3 font-semibold rounded-lg bg-white border border-gray-400 hover:border-gray-800">
          Read Docs
        </button>
      </div>
    </div>
  );
};

export default MainsSection;
