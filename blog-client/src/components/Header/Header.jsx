import { assets } from "../../assets/assets";

const Header = () => {
  return (
    <section className="mx-8 sm:max-16 xl:max-24 relative">
      <div className="text-center mt-20 mb-8">
        <div className="inline-flex items-center justify-center gap-4 px-6 py-1.5 mb-4 border border-indigo-500/40 bg-indigo-700/10 rounded-full text-sm">
          <p>New : Ai Feature integrated</p>
          <img src={assets.star_icon} className="w-2.5" alt="star icon" />
        </div>
        <h1 className="text-3xl sm:text-6xl font-semibold sm:leading-16 text-gray-700">
          Your own <span className="text-indigo-600">blogging</span> <br />
          platform.
        </h1>
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
