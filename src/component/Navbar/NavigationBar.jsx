import React from "react";

function NavigationBar() {
  return (
    <div className="flex justify-end items-center gap-2.5 my-7">
      <button className="flex justify-center items-center gap-2.5 px-2.5 py-2 rounded-lg bg-purple-600 text-white">
        Entry
      </button>
      <a href="/sdkfl" className="text-purple-700 text-sm font-normal">
        Outstanding
      </a>
    </div>
  );
}

export default NavigationBar;
