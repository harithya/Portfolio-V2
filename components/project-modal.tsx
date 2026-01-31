"use client";

import { useEffect } from "react";
import Image from "next/image";

interface ProjectModalProps {
  project: {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    year: string;
    image: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-background/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div
        className="relative w-full max-w-3xl max-h-[85vh] bg-background border border-border rounded-lg shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Scrollable Content */}
        <div className="overflow-y-auto flex-1">
          {/* Close Button (Sticky) */}
          <button
            onClick={onClose}
            className="sticky top-4 right-4 ml-auto block p-2 mr-4 mt-4 mb-[-3rem] z-20 bg-background/80 backdrop-blur-md rounded-full border border-border text-muted-foreground hover:text-foreground transition-all hover:bg-accent hover:text-white"
            aria-label="Close modal"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Image */}
          <div className="relative w-full  bg-secondary">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 space-y-8">
            <div className="space-y-4">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <h2 className="text-2xl sm:text-2xl font-bold text-foreground leading-tight">
                  {project.title}
                </h2>
                <span className="px-3 py-1 text-sm font-semibold text-accent border border-accent/20 bg-accent/5 rounded-full whitespace-nowrap">
                  {project.year}
                </span>
              </div>

              <div
                className="text-muted-foreground leading-relaxed text-sbase"
                dangerouslySetInnerHTML={{ __html: project.description }}
              />
            </div>

            <div className="pt-6 border-t border-border">
              <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider flex items-center gap-2">
                <span className="w-1 h-4 bg-accent rounded-full" />
                Teknologi
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-secondary/50 text-foreground text-sm font-medium rounded-md border border-border hover:border-accent/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
