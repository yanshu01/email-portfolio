import React from "react";

export default function GmailNavbar() {
  return (
    <header className="h-16 px-5 flex items-center justify-between border-b border-gray-200/80 bg-white">
      {/* Left controls */}
      <div className="flex items-center gap-4">
        <div className="text-gray-500 text-xl font-light cursor-pointer hover:bg-gray-100 p-2 rounded-full">
          ☰
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-8 h-8" viewBox="0 0 24 24">
            <path
              fill="#EA4335"
              d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 6l8 5 8-5v2l-8 5-8-5V6z"
            />
          </svg>
          <span className="text-xl font-medium text-gray-700 tracking-tight">Gmail</span>
        </div>
      </div>

      {/* Simulated Search bar */}
      <div className="w-1/2 max-w-2xl bg-[#eaf1fb] h-11 rounded-full px-5 flex items-center gap-3 text-gray-600 shadow-inner">
        <span>🔍</span>
        <span className="text-sm font-normal text-gray-500">Search mail</span>
      </div>

      {/* Right icons and Avatar */}
      <div className="flex items-center gap-4 text-gray-600">
        <span className="text-sm cursor-pointer">⚙️</span>
        <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm shadow">
          Y
        </div>
      </div>
    </header>
  );
}