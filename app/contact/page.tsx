import { Navigation } from "@/components/nav";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { Mail, Linkedin, Github, Instagram, ArrowUpRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Harithya Wisesa",
  description:
    "Get in touch with Harithya Wisesa for collaboration, freelance projects, or professional opportunities.",
};

export default function Contact() {
  const contactMethods = [
    {
      title: "Email",
      description: "Drop me a line",
      value: "harithya77@gmail.com",
      link: "mailto:harithya77@gmail.com",
      icon: Mail,
    },
    {
      title: "LinkedIn",
      description: "Connect professionally",
      value: "harithya-wisesa",
      link: "https://www.linkedin.com/in/harithya-wisesa/",
      icon: Linkedin,
    },
    {
      title: "GitHub",
      description: "Check my repositories",
      value: "harithya",
      link: "https://github.com/harithya",
      icon: Github,
    },
    {
      title: "Instagram",
      description: "Follow my daily updates",
      value: "@haruthyw",
      link: "https://www.instagram.com/haruthyw/",
      icon: Instagram,
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
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl pointer-events-none -z-10 translate-x-1/4 translate-y-1/4" />

        {/* Vertical Text */}
        <div className="absolute left-4 top-40 hidden xl:flex flex-col gap-4 items-center opacity-20">
          <div className="w-px h-24 bg-foreground" />
          <span
            className="text-sm tracking-[0.5em] uppercase"
            style={{ writingMode: "vertical-rl" }}
          >
            Contact
          </span>
        </div>

        <div className="max-w-7xl lg:px-0 px-6 mx-auto space-y-16 relative z-10">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground">
              Have a project in mind or just want to say hi? I&apos;d love to
              hear from you.
            </p>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {contactMethods.map((method, i) => (
              <Link
                key={i}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-8 bg-secondary/20 border border-border hover:border-accent/50 transition-all duration-500 overflow-hidden"
              >
                {/* Hover Background Accent */}
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Tech Corners */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-foreground/20 group-hover:border-accent transition-colors duration-300" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-foreground/20 group-hover:border-accent transition-colors duration-300" />

                <div className="relative z-10 flex items-start justify-between">
                  <div className="space-y-6">
                    <div className="p-3 bg-background border border-border inline-flex rounded-sm group-hover:scale-110 transition-transform duration-500 group-hover:border-accent/50 group-hover:shadow-[0_0_15px_rgba(0,0,0,0.1)]">
                      <method.icon
                        strokeWidth={1.5}
                        className="w-8 h-8 text-foreground group-hover:text-accent transition-colors duration-300"
                      />
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-2xl font-semibold text-foreground tracking-tight">
                        {method.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                        {method.description}
                      </p>
                      <p className="text-base text-foreground/80 mt-2 font-mono">
                        {method.value}
                      </p>
                    </div>
                  </div>

                  <div className="p-2 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                    <ArrowUpRight size={24} strokeWidth={1.5} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Additional Info */}
          <div className="space-y-6 text-center border border-border p-8">
            <h2 className="text-2xl font-semibold text-foreground">
              Let&apos;s Collaborate
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I am open to new projects, freelance work, or collaboration
              opportunities. Reach out via any of the channels above and
              let&apos;s create something amazing together.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
