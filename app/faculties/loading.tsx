import React from "react";

function FacultyLoading() {
  return (
    <div id="loading-overlay">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default FacultyLoading;
