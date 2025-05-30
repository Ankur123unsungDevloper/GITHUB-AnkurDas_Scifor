import React, { useState } from 'react';

function ToggleWelcome() {
  const [isVisible, setIsVisible] = useState(true);

  const handleToggle = () => {
    setIsVisible(prev => !prev);
  };

  return (
    <div className="container text-center py-5">
      <h1 className="mb-4">React Toggle Demo</h1>

      <button
        className="btn btn-primary mb-4"
        onClick={handleToggle}
      >
        {isVisible ? 'Hide' : 'Show'}
      </button>

      {isVisible && (
        <div className="alert alert-success mx-auto w-50">
          🎉 Welcome To React!
        </div>
      )}
    </div>
  );
}

export default ToggleWelcome;
