"use client";

import React, { useState } from "react";
import BlurredInbox from "@/components/background/BlurredInbox";
import EmailHeader from "@/components/email-window/EmailHeader";
import EmailCard from "@/components/email-window/EmailCard";
import ProjectModal from "@/components/modals/ProjectModal";

export default function Home() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <main className="relative w-screen h-screen overflow-hidden flex flex-col items-center justify-center p-4">
      {/* 1. Realistic Blurred Background Mail Interface */}
      <BlurredInbox />

      {/* 2. Interactive Foreground Portfolio Card */}
      <div className="z-10 flex flex-col items-center justify-center w-full">
        <EmailHeader />
        <EmailCard onSelectProject={(project) => setActiveProject(project)} />
      </div>

      {/* 3. Detail Pop-up Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </main>
  );
}