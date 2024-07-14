// eslint-disable-next-line react/prop-types
const Line = ({ children, translateValue }) => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div
          className={`flex gap-4 w-screen -translate-x-${translateValue} transition-transform ease-linear`}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default Line;
