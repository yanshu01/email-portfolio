"use client";

import React, { useState, useEffect } from "react";
import BlurredInbox from "@/components/background/BlurredInbox";
import EmailHeader from "@/components/email-window/EmailHeader";
import EmailCard from "@/components/email-window/EmailCard";
import ProjectModal from "@/components/modals/ProjectModal";

export default function Home() {
  const [activeProject, setActiveProject] = useState(null);
  const [showPortfolio, setShowPortfolio] = useState(false);

  useEffect(() => {
    // Wait for the background blur animation to start
    const timer = setTimeout(() => setShowPortfolio(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative w-screen h-screen overflow-hidden flex flex-col items-center justify-center p-4">
      <BlurredInbox />

      <div
        className={`z-10 flex flex-col items-center justify-center w-full transition-all duration-700 ease-out ${
          showPortfolio
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-8 scale-95 pointer-events-none"
        }`}
      >
        <EmailHeader />
        <EmailCard onSelectProject={(project) => setActiveProject(project)} />
      </div>

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </main>
  );
}