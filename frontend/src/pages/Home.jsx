import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-200 p-6 text-center">
      
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        VitaMatch – Organ Donation Platform
      </h1>

      <p className="text-gray-600 max-w-xl mb-8">
        Connecting organ donors and recipients through a secure and transparent platform.
      </p>

      <button 
        onClick={() => navigate("/signup")}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg px-8 py-3 rounded-lg shadow-md transition-all duration-200"
      >
        Get Started
      </button>

    </div>
  );
}

export default Home;
