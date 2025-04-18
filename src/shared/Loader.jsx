import React, { useEffect } from "react";
import './Loader.css'; // Import custom CSS for additional styles

const Loader = ({ isLoading = false }) => {
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflowY = "hidden";  // Disable scrolling
    } else {
      document.body.style.overflowY = "auto";   // Enable scrolling
    }
    return () => {
      document.body.style.overflowY = "auto";  // Cleanup on unmount
    };
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <div className="position-fixed top-0 start-0 w-100 h-100 bg-white d-flex align-items-center justify-content-center z-1000 loader-overlay">
      <div className="spinner-border" role="status" style={{ width: "3rem", height: "3rem", borderWidth: "0.25em", borderTopColor: "#007bff" }}>
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
