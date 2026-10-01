import React from "react";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#fffdfa] border-2 border-amber-900/20 rounded-2xl max-w-lg w-full p-6 shadow-2xl transition-all duration-300 transform scale-100 animate-in fade-in zoom-in-95">
        
        {/* Envelope Paper Seam Header */}
        <div className="flex justify-between items-center pb-3 border-b-2 border-dashed border-amber-900/20">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase font-extrabold text-rose-700 tracking-wider">
                {project.title} &bull; Unsealed
              </span>
            </div>
            <h3 className="text-xl font-black text-slate-900 mt-0.5">{project.name}</h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-900 text-2xl font-bold leading-none p-1"
          >
            &times;
          </button>
        </div>

        {/* Content Brief */}
        <div className="py-4 space-y-4">
          <p className="text-sm text-slate-700 leading-relaxed font-normal">
            {project.description}
          </p>

          <div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              Technologies Used
            </div>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 bg-amber-100/60 text-amber-950 text-xs font-mono font-medium rounded-md border border-amber-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-3 border-t border-amber-900/10">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-sm font-semibold text-center transition shadow"
          >
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2.5 bg-white hover:bg-slate-50 text-slate-800 rounded-lg text-sm font-semibold text-center transition border border-slate-300 shadow-sm"
          >
            GitHub Repo
          </a>
        </div>
      </div>
    </div>
  );
}