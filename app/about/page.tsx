import { Navigation } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me | Harithya Wisesa",
  description:
    "Learn more about Harithya Wisesa's journey, experience, and technical skills in web and mobile development.",
};

export default function About() {
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
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl pointer-events-none -z-10 translate-x-1/2 -translate-y-1/2" />

        {/* Vertical Text */}
        <div className="absolute left-4 top-40 hidden xl:flex flex-col gap-4 items-center opacity-20">
          <div className="w-px h-24 bg-foreground" />
          <span
            className="text-sm tracking-[0.5em] uppercase"
            style={{ writingMode: "vertical-rl" }}
          >
            Profile
          </span>
        </div>

        <div className="max-w-7xl mx-auto space-y-16 relative z-10">
          {/* Title */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              About Me
            </h1>
            <p className="text-lg text-muted-foreground">
              Getting to know my journey in the world of technology
            </p>
          </div>

          {/* Introduction */}
          <div className="space-y-6 py-12 border-y border-border">
            <h2 className="text-2xl font-semibold text-foreground">
              Hello, I am Harithya Wisesa
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-balance">
              A developer from Tasikmalaya with 3+ years of experience in web
              and Android development. I have a strong passion for building
              digital solutions that are not only functional but also beautiful
              and intuitive.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed text-balance">
              My journey started with simple curiosity about how technology
              works. Now, I have grown into a fullstack developer comfortable
              working with various modern technologies to create high-quality
              applications.
            </p>
          </div>

          {/* Tech Stack */}
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold text-foreground">
              Technology & Tools
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  category: "Frontend",
                  skills: [
                    "React",
                    "Vue.js",
                    "React Native",
                    "Tailwind CSS",
                    "Bootstrap",
                  ],
                },
                {
                  category: "Backend",
                  skills: [
                    "Laravel",
                    "Node.js",
                    "Express.js",
                    "MySQL",
                    "PostgreSQL",
                  ],
                },
                {
                  category: "Mobile",
                  skills: ["React Native", "Android Native", "Flutter", "Expo"],
                },
                {
                  category: "Tools & Others",
                  skills: ["Git", "GitHub", "VS Code", "Figma"],
                },
              ].map((group, i) => (
                <div
                  key={i}
                  className="space-y-4 p-6 bg-secondary/50 rounded-sm border border-border"
                >
                  <h3 className="font-semibold text-foreground text-lg">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-background border border-border text-sm rounded-full text-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold text-foreground">
              Experience
            </h2>
            <div className="space-y-6">
              {[
                {
                  year: "Oct 2025 - Present",
                  title: "Fullstack Developer",
                  company: "PT Trijaya Digital Group - Ngawi, East Java",
                  points: [
                    "Integrating multi-provider Payment Gateways & Digital Signature SDKs.",
                    "Optimizing database queries & server management to handle high traffic.",
                    "Conducting thorough testing & bug fixing for application stability.",
                  ],
                },
                {
                  year: "Jun 2024 - Sep 2025",
                  title: "Fullstack Developer",
                  company: "Inovasi Alfatih Maulana - Ciamis, West Java",
                  points: [
                    "Designing the Skillup website ecosystem (Database, UI, Admin).",
                    "Building Landing Page Builder & notification queue system (Email/WA).",
                    "Developing Attendance Application (Ionic/Vue) & Internal ERP System.",
                  ],
                },
                {
                  year: "Jul 2023 - Jan 2024",
                  title: "Fullstack Developer",
                  company: "Markindogroup - DKI Jakarta",
                  points: [
                    "Rebuilding Mark Order System in 3 months with clean code.",
                    "Redesigning database structure for efficiency & scalability.",
                    "Optimizing SEO/Speed of landing page & integrating Firebase notifications (PWA).",
                  ],
                },
                {
                  year: "Feb 2019 - Jul 2023",
                  title: "Fullstack Developer",
                  company: "Abdi Creative Technology - Tasikmalaya, West Java",
                  points: [
                    "Building 3-4 applications/year (Laravel, React, React Native).",
                    "Designing scalable RESTful APIs & structured backends.",
                    "Implementing precise UI/UX designs & integrating third-party services.",
                  ],
                },
              ].map((exp, i) => (
                <div
                  key={i}
                  className="flex flex-col md:flex-row gap-4 md:gap-8 pb-8 border-b border-border last:border-b-0"
                >
                  <div className="flex-shrink-0 md:w-48">
                    <p className="text-sm text-accent font-semibold tracking-wide">
                      {exp.year}
                    </p>
                  </div>
                  <div className="flex-1 space-y-3">
                    <div>
                      <h3 className="font-semibold text-foreground text-lg leading-none mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-3">
                        {exp.company}
                      </p>
                    </div>
                    <ul className="space-y-2 mt-5">
                      {exp.points.map((point, idx) => (
                        <li
                          key={idx}
                          className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2"
                        >
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-accent/50 flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
