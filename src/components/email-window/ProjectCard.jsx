import React, { useState } from "react";

export default function ProjectCard({ project, onSelect, positionClasses }) {
  const [isTearing, setIsTearing] = useState(false);

  const handleEnvelopeClick = () => {
    if (isTearing) return;
    setIsTearing(true);

    // Wait for the seam tearing animation (750ms) before triggering the modal
    setTimeout(() => {
      onSelect(project);
      setIsTearing(false);
    }, 750);
  };

  return (
    <div
      onClick={handleEnvelopeClick}
      className={`hidden lg:flex flex-col items-center justify-center absolute w-60 h-32 select-none transition-transform duration-300 ${
        isTearing ? "scale-105" : "hover:scale-105"
      } ${positionClasses}`}
    >
      {/* 1. Main Envelope Sleeve */}
      <div className="relative w-full h-full bg-[#9f7979] text-white rounded-xl shadow-2xl border-2 border-white/40 overflow-hidden flex flex-col justify-end p-4 text-center">
        
        {/* Envelope Fold Triangles (Paper aesthetic) */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-0 left-0 w-0 h-0 border-l-[120px] border-l-transparent border-r-[120px] border-r-transparent border-t-[50px] border-t-white" />
          <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[120px] border-l-white/30 border-t-[60px] border-t-transparent" />
          <div className="absolute bottom-0 right-0 w-0 h-0 border-r-[120px] border-r-white/30 border-t-[60px] border-t-transparent" />
        </div>

        {/* Envelope Content Peek (Slides upward as the envelope tears) */}
        <div
          className={`absolute inset-x-3 bg-white text-slate-800 rounded-md py-1.5 px-2 shadow-sm transition-all duration-700 ease-out flex flex-col items-center justify-center ${
            isTearing ? "-translate-y-10 opacity-100" : "translate-y-2 opacity-0"
          }`}
        >
          <span className="text-[11px] font-bold tracking-tight text-slate-900">
            {project.name}
          </span>
          <span className="text-[9px] text-rose-600 font-semibold uppercase tracking-wider">
            Unsealed
          </span>
        </div>

        {/* Project Label on Envelope Body */}
        <div className="relative z-10">
          <span className="text-3xl font-extrabold tracking-tight drop-shadow-sm">
            {project.title}
          </span>
          <span className="block text-xs font-medium text-rose-100/90 mt-1 line-clamp-1">
            {project.name}
          </span>
        </div>

        {/* 2. Top Perforated Flap that Tears Apart */}
        <div
          className={`absolute top-0 inset-x-0 h-7 bg-[#8c6767] border-b-2 border-dashed border-white/60 flex items-center justify-center transition-all duration-700 origin-top ease-in-out ${
            isTearing
              ? "-translate-y-6 rotate-[-12deg] opacity-0"
              : "translate-y-0 rotate-0 opacity-100"
          }`}
        >
          <span className="text-[9px] tracking-widest text-white/80 font-mono uppercase">
            ✂ Cut &bull; Here
          </span>
        </div>
      </div>
    </div>
  );
}