"use client";

import React, { useState, useEffect } from "react";
import GmailNavbar from "./GmailNavbar";
import GmailSidebar from "./GmailSidebar";

export default function BlurredInbox() {
  const [blurred, setBlurred] = useState(false);

  useEffect(() => {
    // Start clear to match their previous screen, then blur smoothly into the portfolio
    const timer = setTimeout(() => setBlurred(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`absolute inset-0 w-full h-full flex flex-col transition-all duration-700 ease-out pointer-events-none select-none z-0 ${
        blurred ? "filter blur-[6px] opacity-40 scale-[0.99]" : "filter blur-0 opacity-100 scale-100"
      }`}
    >
      <GmailNavbar />
      <div className="flex-1 flex overflow-hidden">
        <GmailSidebar />
        <main className="flex-1 bg-white p-8 space-y-4">
          <div className="h-6 bg-gray-200 rounded w-1/3 mb-6" />
          <div className="space-y-3">
            <div className="h-4 bg-gray-100 rounded w-full" />
            <div className="h-4 bg-gray-100 rounded w-5/6" />
            <div className="h-4 bg-gray-100 rounded w-3/4" />
          </div>
        </main>
      </div>
    </div>
  );
}