const Wrapper = ({ children }) => {
  return (
    <div className="bg-black h-64 w-64 justify-center items-center mx-auto my-40">
      {children}
    </div>
  );
};

export default Wrapper;
