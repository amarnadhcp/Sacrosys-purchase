import React from "react";
import { Link } from "react-router-dom";

function NavigationBar({ show }) {
  const entryButtonClass = show ==="entry" ? "bg-purple-600 text-white":"text-purple-600 ";
  const outstandingButtonClass = show ==="out" ? "bg-purple-600 text-white":"text-purple-600 ";

  return (
    <div className="flex justify-end items-center gap-2.5 my-7 text-sm mb-3 mt-4">
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
