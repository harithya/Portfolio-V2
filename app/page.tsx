import { Navigation } from "@/components/nav";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Harithya Wisesa | Fullstack Developer",
  description:
    "Harithya Wisesa is a Fullstack Developer from Tasikmalaya specializing in building elegant, high-performance web applications and digital systems.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-screen pt-32 pb-32 md:pt-48 md:pb-40 px-6 relative overflow-hidden flex items-center">
        {/* Seigaiha Pattern Background */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Rising Sun Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid md:grid-cols-[auto_1fr] gap-12 items-center">
            {/* Vertical Text Decoration */}
            <div className="hidden md:flex flex-col gap-8 items-center justify-center border-r border-border pr-8 h-96">
              <span
                className="text-foreground/80 font-medium tracking-[0.5em] text-lg"
                style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
              >
                こんにちは
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6 relative">
                  <h2 className="text-sm tracking-widest text-muted-foreground uppercase font-medium pl-1">
                    Introduction
                  </h2>
                  <h1 className="text-5xl md:text-7xl font-semibold leading-tight text-balance relative">
                    Halo, saya <br />
                    <span className="text-accent inline-block relative">
                      Harithya Wisesa
                      {/* <span className="absolute -bottom-2 left-0 w-full h-1 bg-accent/30 rounded-full" /> */}
                    </span>
                  </h1>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed text-balance max-w-xl">
                  Fullstack Developer from Tasikmalaya focusing on developing
                  web applications and digital systems. Enjoys the challenge of
                  building elegant, efficient, and high-performance solutions.
                </p>

                <div className="pt-4 flex flex-wrap gap-4">
                  <a
                    href="https://drive.google.com/file/d/1Me6e9p0UClq7RbAoJMq76zdMJM7mnggs/view?usp=sharing"
                    className="group relative px-8 py-4 bg-foreground text-background font-medium hover:bg-accent hover:text-foreground transition-all duration-300 overflow-hidden"
                  >
                    <span className="relative z-10">Download CV</span>
                    <div className="absolute inset-0 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
                  </a>
                  <Link
                    href="/contact"
                    className="px-8 py-4 border-2 border-foreground text-foreground font-medium hover:bg-foreground hover:text-background transition-all duration-300"
                  >
                    Contact Me
                  </Link>
                </div>

                {/* Stats */}
                <div className="pt-12 flex gap-12 border-t border-border mt-8">
                  <div>
                    <p className="text-4xl font-light text-accent font-serif">
                      03+
                    </p>
                    <p className="text-xs tracking-widest uppercase text-muted-foreground mt-1">
                      Years Exp
                    </p>
                  </div>
                  <div>
                    <p className="text-4xl font-light text-accent font-serif">
                      10+
                    </p>
                    <p className="text-xs tracking-widest uppercase text-muted-foreground mt-1">
                      Projects
                    </p>
                  </div>
                </div>
              </div>

              {/* Right side decorative area - Soft Abstract Line SVG */}
              {/* Right side decorative area - Firm Geometric Wireframe */}
              {/* Right side decorative area - Firm Geometric Wireframe (Varied) */}
              <div className="hidden md:block relative h-[600px] w-full perspective-1000">
                <div className="relative w-full h-full flex items-center justify-center">
                  <svg
                    viewBox="0 0 800 800"
                    className="w-full h-full"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <pattern
                        id="grid"
                        width="40"
                        height="40"
                        patternUnits="userSpaceOnUse"
                      >
                        <path
                          d="M 40 0 L 0 0 0 40"
                          fill="none"
                          stroke="var(--foreground)"
                          strokeWidth="0.5"
                          opacity="0.1"
                        />
                      </pattern>
                    </defs>

                    {/* Background Grid */}
                    <rect
                      width="100%"
                      height="100%"
                      fill="url(#grid)"
                      opacity="0.5"
                    />

                    {/* Technical Rings - Radar Effect */}
                    <g
                      className="animate-[spin_40s_linear_infinite]"
                      style={{ transformOrigin: "center" }}
                      opacity="0.4"
                    >
                      <circle
                        cx="400"
                        cy="400"
                        r="250"
                        fill="none"
                        stroke="var(--foreground)"
                        strokeWidth="1"
                        strokeDasharray="10 10"
                      />
                      <circle
                        cx="400"
                        cy="400"
                        r="300"
                        fill="none"
                        stroke="var(--accent)"
                        strokeWidth="1"
                        strokeDasharray="5 15"
                        opacity="0.5"
                      />
                    </g>

                    {/* Central Complex Structure */}
                    <g
                      className="animate-[spin_20s_linear_infinite]"
                      style={{ transformOrigin: "center" }}
                    >
                      {/* Main Hexagon */}
                      <path
                        d="M400,200 L573,300 L573,500 L400,600 L227,500 L227,300 Z"
                        fill="none"
                        stroke="var(--foreground)"
                        strokeWidth="2"
                        opacity="0.8"
                      />
                      {/* Internal Star/Triangle Network */}
                      <path
                        d="M400,200 L400,600"
                        stroke="var(--foreground)"
                        strokeWidth="0.5"
                      />
                      <path
                        d="M573,300 L227,500"
                        stroke="var(--foreground)"
                        strokeWidth="0.5"
                      />
                      <path
                        d="M573,500 L227,300"
                        stroke="var(--foreground)"
                        strokeWidth="0.5"
                      />
                      <polygon
                        points="400,300 486,450 314,450"
                        fill="var(--accent)"
                        fillOpacity="0.05"
                        stroke="var(--accent)"
                        strokeWidth="1"
                      />
                    </g>

                    {/* Floating Pyramid Wireframe */}
                    <g
                      transform="translate(100, 450) scale(0.8)"
                      className="animate-[bounce_8s_infinite]"
                    >
                      <polygon
                        points="100,50 150,150 50,150"
                        fill="none"
                        stroke="var(--accent)"
                        strokeWidth="2"
                      />
                      <line
                        x1="100"
                        y1="50"
                        x2="100"
                        y2="150"
                        stroke="var(--accent)"
                        strokeWidth="1"
                        opacity="0.5"
                      />
                      <line
                        x1="100"
                        y1="150"
                        x2="150"
                        y2="150"
                        stroke="var(--accent)"
                        strokeWidth="1"
                      />
                      <line
                        x1="50"
                        y1="150"
                        x2="100"
                        y2="150"
                        stroke="var(--accent)"
                        strokeWidth="1"
                      />
                      {/* 3D illusion lines */}
                      <line
                        x1="100"
                        y1="50"
                        x2="130"
                        y2="120"
                        stroke="var(--accent)"
                        strokeWidth="1"
                        strokeDasharray="2 2"
                      />
                    </g>

                    {/* Floating Octagon */}
                    <g
                      transform="translate(600, 200) rotate(15)"
                      className="animate-[pulse_4s_ease-in-out_infinite]"
                    >
                      <polygon
                        points="30,0 70,0 100,30 100,70 70,100 30,100 0,70 0,30"
                        fill="var(--foreground)"
                        fillOpacity="0.05"
                        stroke="var(--foreground)"
                        strokeWidth="1"
                      />
                      <rect
                        x="25"
                        y="25"
                        width="50"
                        height="50"
                        fill="none"
                        stroke="var(--accent)"
                        strokeWidth="1"
                      />
                    </g>

                    {/* Technical Markers (Plan style) */}
                    <g opacity="0.6" stroke="var(--foreground)" strokeWidth="2">
                      {/* Plus signs */}
                      <path d="M100,100 L120,100 M110,90 L110,110" />
                      <path d="M700,600 L720,600 M710,590 L710,610" />
                      <path d="M680,150 L700,150 M690,140 L690,160" />

                      {/* Corner brackets */}
                      <path d="M50,700 L50,750 L100,750" fill="none" />
                      <path d="M750,50 L750,100" fill="none" />
                      <path d="M700,50 L750,50" fill="none" />
                    </g>
                  </svg>

                  {/* Geometric Overlay - Additional Rotating Square */}
                  <div className="absolute top-20 right-20 w-32 h-32 border-2 border-accent/20 rounded-none animate-[spin_15s_linear_infinite]" />
                  <div className="absolute bottom-40 left-20 w-20 h-20 border border-t-0 border-r-0 border-foreground/30 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
