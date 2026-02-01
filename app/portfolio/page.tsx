"use client";

import { useState } from "react";
import { Navigation } from "@/components/nav";
import { Footer } from "@/components/footer";
import { ProjectModal } from "@/components/project-modal";
import Link from "next/link";
import Image from "next/image";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Meat Map",
      description:
        "A platform for discovering trending culinary and sports references that are currently going viral.<span class='line-new'></span>The data is collected through social media scraping and presented after processing, including cleaning, enhancement, and analysis using the Gemini AI LLM.",
      technologies: [
        "Laravel",
        "Vue JS",
        "Mysql",
        "Gemini API",
        "Tailwind CSS",
      ],
      year: "2025",
      image: "/portofolio/meatmap.png",
      link: "https://meatmap.id/",
    },
    {
      id: 2,
      title: "Skillup",
      description:
        "Increase productivity and happiness through quality ebooks, ecourses, and webinars.<span class='line-new'></span>Be guided by expert trainers from the Trainer Academy and receive full support.",
      technologies: ["Laravel", "Jquery", "Mysql", "Xendit"],
      year: "2025",
      image: "/portofolio/Skillup.png",
      link: "https://skillup.id/",
    },
    {
      id: 3,
      title: "Office Digital",
      description:
        "A multi-tenant application that allows multiple organizations to use the same system with separate databases.<span class='line-new'></span>Built with a secure, scalable, and easy-to-maintain architecture, making it ideal for large enterprises.",
      technologies: ["Laravel", "Jquery", "Mysql", "Multi Tenant"],
      year: "2025",
      image: "/portofolio/Office Digital.png",
    },
    {
      id: 4,
      title: "Iampact",
      description:
        "This starter pack is a repository that provides starter code for various AJAX needs and utility functions.<span class='line-new'></span>It is designed to help teams work faster and more efficiently in handling repetitive tasks.<span class='line-new'></span>Modules Provided: HTTP, NOTIFY, TABLES, FORMATTER.<span class='line-new'></span>Key Features: Simple fetching, automatic form validation, modern notifications, simple tables with scalable data export, and formatter.",
      technologies: ["Jquery", "Docusaurus"],
      year: "2025",
      image: "/portofolio/Iampact.png",
      link: "https://iampact.vercel.app/",
    },
    {
      id: 5,
      title: "Point of Sale Al Luthfi",
      description:
        "POS Al Luthfi is a point-of-sale application designed to manage sales transactions, products, and reports efficiently.<span class='line-new'></span>The system supports cashier operations, receipt printing, and real-time data synchronization.<span class='line-new'></span>It helps business owners monitor daily sales, stock, and performance easily.<span class='line-new'></span>Key Features: Sales management, product management, receipt printing, transaction history, and basic reporting.",
      technologies: ["React Native", "Mysql", "Print Recipe", "Laravel"],
      year: "2023",
      image: "/portofolio/Al Luthfi.png",
    },
    {
      id: 6,
      title: "Absent Setda Tasikmalaya",
      description:
        "Absent Setda Tasikmalaya is a web-based attendance management system designed to streamline employee attendance tracking for the Regional Secretariat of Tasikmalaya.<span class='line-new'></span>The system provides a simple and efficient way for employees to record their attendance and for administrators to monitor attendance data",
      technologies: ["React Native", "Laravel", "Mysql", "Firebase"],
      year: "2023",
      image: "/portofolio/Absensi Setda.png",
    },
    {
      id: 7,
      title: "Cargo Management System",
      description:
        "Budiman Cargo Management System is a web-based cargo management system designed to streamline cargo management for PT. HS Budiman  .<span class='line-new'></span>The system provides a simple and efficient way for employees to manage cargo and for administrators to monitor cargo data",
      technologies: ["Vue JS", "Laravel", "Postgres"],
      year: "2025",
      image: "/portofolio/Budiman Cargo.png",
    },
    {
      id: 8,
      title: "Skillup Admin",
      description:
        "Skillup Admin is a web-based admin system designed to streamline admin management.<span class='line-new'></span>The system provides a simple and efficient way for employees to manage admin and for administrators to monitor admin data",
      technologies: ["Jquery", "Laravel", "Mysql"],
      year: "2025",
      image: "/portofolio/Skillup Admin.png",
    },
    {
      id: 9,
      title: "Pokedex",
      description:
        "Pokedex is a mobile application that allows users to view information about Pokémon.<span class='line-new'></span>The system provides a simple and efficient way for users to view information about Pokémon",
      technologies: ["React Native", "Node JS"],
      year: "2025",
      image: "/portofolio/Pokedex.png",
      link: "https://github.com/harithya/Pokedex-",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-6 relative overflow-hidden">
        {/* Ornaments */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl pointer-events-none -z-10 -translate-x-1/3 -translate-y-1/2" />

        {/* Vertical Text */}
        <div className="absolute left-4 top-40 hidden xl:flex flex-col gap-4 items-center opacity-20">
          <div className="w-px h-24 bg-foreground" />
          <span
            className="text-sm tracking-[0.5em] uppercase"
            style={{ writingMode: "vertical-rl" }}
          >
            Selected Works
          </span>
        </div>

        <div className="max-w-7xl lg:px-0 lg:px-6 mx-auto space-y-16 relative z-10">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Portfolio
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A collection of projects showcasing my skills and experience in
              various software development aspects.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <article
                key={project.id}
                className="overflow-hidden border border-border hover:border-accent transition-all duration-300 group cursor-pointer"
                onClick={() => setSelectedProject(project.id)}
              >
                {/* Image Container */}
                <div className="relative w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={500}
                    className="w-full h-auto object-contain"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                {/* Content Container */}
                <div className="p-6 space-y-4">
                  <div className="space-y-2 flex justify-between">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p
                    className="text-muted-foreground leading-relaxed text-balance line-clamp-2"
                    dangerouslySetInnerHTML={{ __html: project.description }}
                  />
                </div>
              </article>
            ))}
          </div>

          {/* CTA Section */}
          {/* <div className="py-12 px-6 bg-secondary/30 border border-border text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              Interested in Collaborating?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I am open to new projects, freelance work, or opportunities to
              contribute to interesting projects.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-foreground text-background font-semibold hover:bg-accent hover:text-foreground transition-all duration-300"
            >
              Contact Me
            </Link>
          </div> */}
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={projects.find((p) => p.id === selectedProject)!}
          isOpen={selectedProject !== null}
          onClose={() => setSelectedProject(null)}
        />
      )}

      <Footer />
    </main>
  );
}
