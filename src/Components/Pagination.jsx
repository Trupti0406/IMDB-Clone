import React from "react";

const Pagination = () => {
  return (
    <div className="flex justify-center my-4">
      <div className="border-2 p-2 border-r-0 rounded-l-xl border-blue-400 cursor-pointer">
        Previous
      </div>
      <div className="border-2 p-2 border-r-0 border-blue-400">1</div>
      <div className="border-2 p-2 rounded-r-xl border-blue-400 cursor-pointer">
        Previous
      </div>
    </div>
  );
};

export default Pagination;
