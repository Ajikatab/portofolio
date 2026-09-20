import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0a] text-zinc-100 font-sans overflow-x-hidden selection:bg-white selection:text-black">
      {/* Background Grid Accent */}
      <div 
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-30" 
      />

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0a0a0a]/80 border-b border-zinc-800/40">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-bold text-lg tracking-tight text-white">
            FK
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#product-thinking" className="hover:text-white transition-colors">Product Thinking</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 text-xs font-semibold text-zinc-400">
            <span className="text-white">US</span>
            <span className="text-zinc-600">/</span>
            <span>EN</span>
          </div>
        </div>
      </header>

      {/* Main Hero Section matching User's exact layout */}
      <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-between max-w-6xl mx-auto px-6 pt-12 pb-8">
        <div className="my-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Circular Photo Container with NEW PHOTO */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              {/* Glow Border Effect */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-zinc-700 via-zinc-400 to-zinc-700 opacity-40 blur-md group-hover:opacity-70 transition duration-500" />
              
              {/* Circle Photo Container */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-zinc-800 bg-zinc-900 shadow-2xl">
                <Image
                  src="/profile.jpeg"
                  alt="Faturohman Fahrizi Katab"
                  fill
                  sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                  priority
                  className="object-cover object-center filter brightness-105 group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
            </div>
          </div>

          {/* Right Side: Headlines, Bio, Buttons */}
          <div className="lg:col-span-7 flex flex-col items-start text-left gap-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-none">
              Faturohman <br />
              <span className="text-zinc-100">Fahrizi Katab</span>
            </h1>

            <p className="text-lg font-semibold text-zinc-300">
              Quality Assurance · DevOps · Informatics Student
            </p>

            <p className="text-zinc-400 text-base leading-relaxed max-w-xl font-normal">
              Informatics student at ITENAS with experience as a Quality Assurance engineer and DevOps, passionate about Product Management, data-driven decision making, and user experience improvement.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="px-8 py-3.5 rounded-full font-medium bg-white text-black hover:bg-zinc-200 transition-all duration-300 shadow-md text-sm"
              >
                View Projects
              </a>
              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-medium bg-transparent border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 transition-all duration-300 text-sm"
              >
                <span>📥</span> Download CV
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-transparent border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-600 flex items-center justify-center transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="w-full flex justify-center pt-8 pb-4">
          <a href="#about" className="text-xs font-semibold tracking-widest text-zinc-500 hover:text-zinc-300 transition-colors uppercase flex flex-col items-center gap-2">
            SCROLL DOWN
            <span className="w-1 h-3 bg-zinc-700 rounded-full animate-bounce" />
          </a>
        </div>
      </section>

      {/* About & Skills Section */}
      <section id="about" className="py-24 border-t border-zinc-900 bg-zinc-950/60">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold tracking-tight text-white mb-6">About Me</h2>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl mb-12">
            As an Informatics student at ITENAS, I combine analytical thinking with practical software development skills. My background spans Quality Assurance, DevOps pipelines, and Product Management to build reliable and user-centered digital solutions.
          </p>

          <div id="skills" className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition">
              <h3 className="text-xl font-bold text-white mb-3">Quality Assurance</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Automated & manual testing, bug tracking, test case design, and quality metrics to ensure seamless user experience.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition">
              <h3 className="text-xl font-bold text-white mb-3">DevOps & CI/CD</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Version control, automated build pipelines, containerization, and cloud deployment on Vercel & modern infrastructure.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition">
              <h3 className="text-xl font-bold text-white mb-3">Product Thinking</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Data-driven decision making, user research, agile workflow, and feature prioritization for high impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 max-w-6xl mx-auto px-6 border-t border-zinc-900">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800">
            <h3 className="text-xl font-bold text-white">ITENAS Portfolio</h3>
            <p className="text-zinc-400 text-sm mt-2">Personal portfolio showcasing QA, DevOps, and web engineering projects.</p>
          </div>
          <div className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800">
            <h3 className="text-xl font-bold text-white">QA Automation & DevOps Pipeline</h3>
            <p className="text-zinc-400 text-sm mt-2">Continuous integration and testing workflow for modern web applications.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 border-t border-zinc-900 text-center text-sm text-zinc-500">
        <p>© {new Date().getFullYear()} Faturohman Fahrizi Katab. All rights reserved.</p>
      </footer>
    </main>
  );
}
