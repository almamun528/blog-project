import { useRef } from "react";

const SearchBar = ({ setInput, input }) => {
  const inputRef = useRef();
  const handleSearch = async (e) => {
    e.preventDefault();
    setInput(inputRef.current.value);
  };
  const onClear = () => {
    setInput("");
    inputRef.current.value=''
  };
  return (
    <>
      <section className=" flex items-center justify-center ">
        <form
          onSubmit={handleSearch}
          className="w-full flex justify-between max-w-lg max-sm:scale-75 max-auto border border-gray-300 bg-white rounded overflow-hidden"
        >
          <input
            className="w-full pl-4 outline-none"
            type="text"
            placeholder="Search for blogs"
            required
            ref={inputRef}
          />
          <button
            className="bg-primary text-white px-8 py-2 m-1.5 rounded hover:scale-105 transition-all cursor-pointer"
            type="submit"
          >
            Search
          </button>
        </form>
      </section>
      <div onClick={onClear} className="text-center mt-2">
        {input && (
          <button className="border font-light text-xs py-1 px-3 rounded-sm shadow cursor-pointer">
            Clear Search
          </button>
        )}
      </div>
    </>
  );
};

export default SearchBar;
