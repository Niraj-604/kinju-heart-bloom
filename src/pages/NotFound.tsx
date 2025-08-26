import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-dreamy">
      <div className="text-center glass rounded-2xl p-12 shadow-romantic max-w-md mx-4">
        <h1 className="text-6xl font-display font-bold text-gradient mb-4">404</h1>
        <p className="text-xl text-midnight/70 mb-6">Oops! Page not found</p>
        <a 
          href="/" 
          className="inline-flex items-center justify-center px-6 py-3 bg-gradient-romantic text-soft-white rounded-xl hover:scale-105 transition-all duration-300 shadow-romantic font-medium"
        >
          Return to Home 🏠
        </a>
      </div>
    </div>
  );
};

export default NotFound;
