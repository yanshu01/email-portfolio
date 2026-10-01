import React from "react";
import GmailNavbar from "./GmailNavbar";
import GmailSidebar from "./GmailSidebar";

export default function BlurredInbox() {
  return (
    <div className="absolute inset-0 w-full h-full flex flex-col filter blur-[6px] opacity-40 pointer-events-none select-none z-0">
      <GmailNavbar />
      <div className="flex-1 flex overflow-hidden">
        <GmailSidebar />
        
        {/* Placeholder Email Content Area */}
        <main className="flex-1 bg-white p-8 space-y-4">
          <div className="h-6 bg-gray-200 rounded w-1/3 mb-6" />
          <div className="space-y-3">
            <div className="h-4 bg-gray-100 rounded w-full" />
            <div className="h-4 bg-gray-100 rounded w-5/6" />
            <div className="h-4 bg-gray-100 rounded w-3/4" />
            <div className="h-4 bg-gray-100 rounded w-4/5" />
          </div>
          <div className="pt-8 space-y-2">
            <div className="h-4 bg-gray-100 rounded w-1/2" />
            <div className="h-4 bg-gray-100 rounded w-1/4" />
          </div>
        </main>
      </div>
    </div>
  );
}