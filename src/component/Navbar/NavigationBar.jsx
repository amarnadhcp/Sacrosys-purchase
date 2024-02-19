import React from "react";
import { Link } from "react-router-dom";

function NavigationBar({ showEntry }) {
  const entryButtonClass = showEntry ? "text-purple-700":" bg-purple-600 text-white";
  const outstandingButtonClass = showEntry ? "bg-purple-600 text-white":"text-purple-700";

  return (
    <div className="flex justify-end items-center gap-2.5 my-7 text-sm">
      <Link to="/purchase" className={`px-2.5 py-2 rounded-lg ${entryButtonClass}`}>
        Entry
      </Link>
      <Link to="/outstanding" className={`px-2.5 py-2 rounded-lg ${outstandingButtonClass}`}>
        Outstanding
      </Link>
    </div>
  );
}

export default NavigationBar;
