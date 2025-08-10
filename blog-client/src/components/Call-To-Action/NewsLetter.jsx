import { useState } from "react";
import toast from "react-hot-toast";

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter a valid email");
      return;
    }
    // You can add actual subscription logic here (e.g., API call)
    toast.success("Email submitted successfully!");
    setEmail(""); // Clear input after submission
  };

  return (
    <section className="flex flex-col items-center justify-center text-center space-y-2 my-32">
      <h1 className="md:text-4xl text-2xl font-semibold">Never Miss a Blog!</h1>
      <p className="md:text-lg text-gray-500/70 pb-8">
        Subscribe to get the latest blog, new tech, and exclusive news.
      </p>
      <form
        onSubmit={handleNewsletter}
        className="flex items-center justify-between max-w-2xl w-full md:h-13 h-12"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-500"
          required
          placeholder="Enter your email id"
        />
        <button
          type="submit"
          className="md:px-12 px-8 h-full text-white bg-primary  rounded-md rounded-l-none transition-all cursor-pointer"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default NewsLetter;
