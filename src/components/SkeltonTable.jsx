import React from "react";

const SkeltonTable = () => {
  return (
    <div className="animate-pulse">
      <div className="h-8 bg-gray-200 mt-3 mb-6 rounded" />
      <div className="h-8 bg-gray-300 mb-6 rounded" />
      <div className="h-8 bg-gray-200 mb-6 rounded" />
      <div className="h-8 bg-gray-300 mb-6 rounded" />
      <div className="h-8 bg-gray-200 mb-6 rounded" />
    </div>
  );
};

export default SkeltonTable;
