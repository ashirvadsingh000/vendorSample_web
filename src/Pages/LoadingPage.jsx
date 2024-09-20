import React from 'react';

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen h-screen bg-gray-100">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500 border-solid mx-auto mb-4"></div>
        <p className="text-lg text-gray-600">Loading, please wait...</p>
      </div>
    </div>
  );
};

export default LoadingPage;