import { assets } from "../../assets/assets";
import { useAppContext } from "../../Context/AppContext";
import SearchBar from "../Search/SearchBar";

const Header = () => {
  const { input, setInput } = useAppContext();

  return (
    <section className="mx-8 sm:max-16 xl:max-24 relative">
      <div className="text-center mt-20 mb-8">
        <div className="inline-flex items-center justify-center gap-4 px-6 py-1.5 mb-4 border border-indigo-500/40 bg-indigo-700/10 rounded-full text-sm">
          <p>New: AI-powered insights now live!</p>
          <img src={assets.star_icon} className="w-2.5" alt="star icon" />
        </div>
        <h1 className="text-3xl sm:text-6xl font-semibold sm:leading-16 text-gray-700">
          Share <span className="text-indigo-600">Your Voice</span> <br />
          Inspire, Inform, Connect.
        </h1>
        <p className="my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xs text-gray-500">
          Join a community of passionate writers and thinkers. Publish your
          ideas, stories, and expertise — and spark meaningful conversations.
        </p>

        {/* Search Bar Component */}
        <SearchBar setInput={setInput} input={input} />
      </div>

      <img
        src={assets.gradientBackground}
        className="absolute -top-50 -z-1 opacity-50"
        alt="background image"
      />
    </section>
  );
};

export default Header;
