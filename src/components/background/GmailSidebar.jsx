import React from "react";

export default function GmailSidebar() {
  return (
    <aside className="w-64 p-4 space-y-3 bg-[#f6f8fc] border-r border-gray-200/70 select-none">
      <button className="px-6 py-3 bg-[#c2e7ff] text-[#001d35] font-medium rounded-2xl flex items-center gap-3 shadow-sm hover:shadow transition">
        <span className="text-lg">✏️</span>
        <span>Compose</span>
      </button>

      <div className="pt-2 space-y-1 text-sm font-medium text-gray-700">
        <div className="flex justify-between items-center px-4 py-2.5 rounded-r-full bg-[#d3e3fd] text-[#001d35] font-semibold">
          <div className="flex items-center gap-3">
            <span>📥</span>
            <span>Inbox</span>
          </div>
          <span className="text-xs">46,901</span>
        </div>
        <div className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-gray-200/60 rounded-r-full cursor-pointer">
          <span>⭐</span>
          <span>Starred</span>
        </div>
        <div className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-gray-200/60 rounded-r-full cursor-pointer">
          <span>🕒</span>
          <span>Snoozed</span>
        </div>
        <div className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-gray-200/60 rounded-r-full cursor-pointer">
          <span>📤</span>
          <span>Sent</span>
        </div>
        <div className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-gray-200/60 rounded-r-full cursor-pointer">
          <span>📝</span>
          <span>Drafts</span>
        </div>
      </div>
    </aside>
  );
}