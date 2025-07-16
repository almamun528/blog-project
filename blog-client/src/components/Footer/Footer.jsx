import { Link } from "react-router-dom";
import { assets, footer_data } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 ">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 border-b border-gray-500/30 text-gray-500">
        <div>
          <img src={assets.logo} alt="logo" className="w-32 sm:w-44" />
          <p className="max-w-[410px] mt-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
            accusantium mollitia provident facilis minus doloribus reprehenderit
            amet neque nemo ipsa et placeat perspiciatis natus, ad unde vitae
            eligendi expedita animi!
          </p>
        </div>

        {/* menu items */}
        <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
          {footer_data?.map((section, idx) => (
            <div key={idx}>
              <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">
                {section?.title}
              </h3>
              <ul className="text-sm space-y-1">
                {section?.links?.map((link, i) => (
                  <li key={i}>
                    <Link className="hover:underline transition">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
        Copyright 2025 © QuickBlog developer Mamun - All right Reserved{" "}
      </p>
    </footer>
  );
};

export default Footer;
