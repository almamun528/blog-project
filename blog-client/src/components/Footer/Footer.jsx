import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const footer_data = [
    {
      title: "About Us",
      links: [
        { label: "Our Story", to: "#" },
        { label: "Team", to: "#" },
      ],
    },
    {
      title: "Contact Us",
      links: [
        { label: "Help Center", to: "#" },
        { label: "Support", to: "#" },
      ],
    },
    {
      title: "Careers",
      links: [
        { label: "Jobs", to: "#" },
        { label: "Internships", to: "#" },
      ],
    },
  ];

  const social_links = [
    { name: "Facebook", url: "#" },
    { name: "LinkedIn", url: "#" },
  ];

  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 py-10 bg-white">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 border-b border-gray-500/30 text-gray-500">
        {/* Left side: Logo + description */}
        <div className="md:w-1/4">
          <button
            onClick={() => {
              navigate("/");
              window.scrollTo(0, 0);
            }}
            className="w-32 sm:w-44 border-b-2 text-lg cursor-pointer text-gray-900 font-bold"
          >
            Blog Dude
          </button>
          <p className="max-w-[300px] mt-6 text-gray-600 leading-relaxed">
            This website provides important blog and news essential for the
            audience. From our blogs you may get informed about technology,
            finance management, startups, and lifestyle hacks. You also can
            comment on blogs.
          </p>
        </div>

        {/* Grid with 4 columns lg, 2 columns md, 1 column mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:w-3/4 w-full">
          {/* Footer link sections */}
          {footer_data.map((section, idx) => (
            <div key={idx}>
              <h3 className="font-semibold text-base text-gray-900 mb-5">
                {section.title}
              </h3>
              <ul className="text-sm space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.to}
                      className="hover:underline transition-colors duration-200 cursor-pointer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social links as text */}
          <div>
            <h3 className="font-semibold text-base text-gray-900 mb-5">
              Follow Us
            </h3>
            <ul className="flex flex-col gap-2 secondary font-medium">
              {social_links.map(({ name, url }) => (
                <li key={name}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline transition-colors duration-200 cursor-pointer"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
        Copyright 2025 © QuickBlog developer Mamun - All right Reserved{" "}
      </p>
    </footer>
  );
};

export default Footer;
