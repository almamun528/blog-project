
const SearchBar = () => {
  return (
    <section className="place-items-center">
      <form className="w-full flex justify-between max-w-lg max-sm:scale-75 max-auto border border-gray-300 bg-white rounded overflow-hidden">
        <input
          className="w-full pl-4 outline-none"
          type="text"
          placeholder="Search for blogs"
          required
        />
        <button
          className="bg-primary text-white px-8 py-2 m-1.5 rounded hover:scale-105 transition-all cursor-pointer"
          type="submit"
        >
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchBar;
