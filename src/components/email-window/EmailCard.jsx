import React from "react";
import ProjectCard from "./ProjectCard";
import { projectsData } from "@/data/projectsData";

export default function EmailCard({ onSelectProject }) {
  return (
    <div className="relative w-full max-w-3xl min-h-[380px] bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border-[3px] border-slate-700/80 p-8 md:p-12 z-10 flex flex-col justify-center items-center">
      
      {/* 4 Overlapping Floating Project Boxes */}
      <ProjectCard
        project={projectsData[0]}
        onSelect={onSelectProject}
        positionClasses="-left-20 top-8"
      />
      <ProjectCard
        project={projectsData[1]}
        onSelect={onSelectProject}
        positionClasses="-left-20 bottom-8"
      />
      <ProjectCard
        project={projectsData[2]}
        onSelect={onSelectProject}
        positionClasses="-right-20 top-8"
      />
      <ProjectCard
        project={projectsData[3]}
        onSelect={onSelectProject}
        positionClasses="-right-20 bottom-8"
      />

      {/* Mobile Card Fallback (Only visible on small mobile screens) */}
      <div className="grid grid-cols-2 gap-3 w-full lg:hidden">
        {projectsData.map((project) => (
          <button
            key={project.id}
            onClick={() => onSelectProject(project)}
            className="p-3 bg-[#9f7979] text-white rounded-lg font-bold text-sm shadow hover:bg-[#8e6868] transition"
          >
            {project.title}
          </button>
        ))}
      </div>
    </div>
  );
}