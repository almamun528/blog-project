import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary text-white px-6">
      <h1
        className="text-9xl font-extrabold animate-pulse"
        style={{ color: "#ffb22c" }} // primary color text
      >
        404
      </h1>
      <p className="text-2xl mt-4 mb-8 rich-text" style={{ color: "#f3c623" }}>
        Oops! The page you are looking for does not exist.
      </p>
      <button
        onClick={() => navigate("/")}
        className="bg-secondary hover:bg-yellow-400 text-primary font-semibold px-6 py-3 rounded shadow-lg transition-colors duration-300"
      >
        Go to Home
      </button>
    </div>
  );
};

export default ErrorPage;