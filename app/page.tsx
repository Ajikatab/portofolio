import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-zinc-950 text-zinc-100 overflow-hidden selection:bg-blue-500 selection:text-white">
      {/* Background Subtle Ambient Glows */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-blue-600/20 via-cyan-500/15 to-emerald-500/10 blur-[120px] rounded-full" />
      <div className="pointer-events-none absolute top-1/2 -right-40 w-[500px] h-[500px] bg-indigo-600/10 blur-[140px] rounded-full" />

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-zinc-950/70 border-b border-zinc-800/60">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="text-xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
            Fahrizi Katab
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#about" className="hover:text-white transition-colors">Tentang</a>
            <a href="#skills" className="hover:text-white transition-colors">Keahlian</a>
            <a href="#projects" className="hover:text-white transition-colors">Proyek</a>
            <a href="#contact" className="hover:text-white transition-colors">Kontak</a>
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-zinc-950 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all duration-300"
          >
            Hubungi Saya
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 md:py-28 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Bio & Intro */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              Tersedia Untuk Proyek Baru
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
              Halo, Saya <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                Fahrizi Katab
              </span>
            </h1>

            <p className="text-zinc-400 text-lg sm:text-xl max-w-xl font-normal leading-relaxed">
              Pengembang Web & Kreator Digital yang berdedikasi membangun pengalaman web modern, cepat, dan responsif dengan desain estetis bernilai tinggi.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl font-semibold bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                Lihat Portfolio
              </a>
              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl font-semibold bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-800 hover:border-zinc-700 transition-all duration-300"
              >
                Diskusi Proyek
              </a>
            </div>
          </div>

          {/* Right Column: Profile Image Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              {/* Outer Glow behind Photo */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-500 rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition duration-500" />

              {/* Photo Frame Container */}
              <div className="relative w-[300px] sm:w-[340px] h-[400px] sm:h-[450px] rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-2xl flex items-end">
                <Image
                  src="/profile.jpeg"
                  alt="Fahrizi Katab"
                  fill
                  sizes="(max-width: 768px) 300px, 340px"
                  priority
                  className="object-cover object-top filter brightness-105 group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                
                {/* Gradient overlay at bottom of photo for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent pointer-events-none" />

                {/* Badge Overlay */}
                <div className="relative z-10 p-6 w-full flex flex-col gap-1 backdrop-blur-sm bg-zinc-950/40 border-t border-zinc-800/40">
                  <h3 className="text-lg font-bold text-white">Fahrizi Katab</h3>
                  <p className="text-xs text-cyan-400 font-medium">Web Developer & Creator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About & Skills Section */}
      <section id="about" className="py-20 border-t border-zinc-900 bg-zinc-900/40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">Tentang Saya</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full mt-3 mb-4" />
            <p className="text-zinc-400">
              Fokus menyajikan solusi digital performa tinggi dengan standar kualitas terbaik.
            </p>
          </div>

          <div id="skills" className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-zinc-900/80 border border-zinc-800/80 hover:border-blue-500/50 transition duration-300">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold text-xl mb-6">
                ⚡
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Frontend Modern</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Pengembangan antarmuka pengguna responsif & interaktif menggunakan React, Next.js, dan Tailwind CSS.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-zinc-900/80 border border-zinc-800/80 hover:border-cyan-500/50 transition duration-300">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold text-xl mb-6">
                🎨
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">UI/UX Design</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Perancangan tata letak modern dengan fokus pada kejelasan visual, kemudahan akses, dan kenyamanan pengguna.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-zinc-900/80 border border-zinc-800/80 hover:border-emerald-500/50 transition duration-300">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-xl mb-6">
                🚀
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Performa & SEO</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Optimasi kecepatan web, struktur SEO yang bersih, serta deployment yang aman di cloud seperti Vercel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase Placeholder */}
      <section id="projects" className="py-20 max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">Proyek Terbaru</h2>
            <p className="text-zinc-400 mt-2">Kumpulan karya dan aplikasi web yang telah dibangun.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition duration-300">
            <div className="h-48 bg-gradient-to-br from-blue-900/40 via-zinc-900 to-zinc-950 p-6 flex items-center justify-center">
              <span className="text-4xl font-extrabold text-blue-400/80 tracking-widest group-hover:scale-110 transition duration-300">
                PORTOFOLIO
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                Personal Web Portfolio
              </h3>
              <p className="text-zinc-400 text-sm mt-2">
                Website portofolio interaktif dengan desain dark mode elegan dan performa Next.js terkini.
              </p>
              <div className="flex items-center gap-2 mt-4 text-xs font-semibold text-zinc-500">
                <span className="px-2.5 py-1 rounded-md bg-zinc-800 text-zinc-300">Next.js</span>
                <span className="px-2.5 py-1 rounded-md bg-zinc-800 text-zinc-300">Tailwind CSS</span>
                <span className="px-2.5 py-1 rounded-md bg-zinc-800 text-zinc-300">Vercel</span>
              </div>
            </div>
          </div>

          <div className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition duration-300">
            <div className="h-48 bg-gradient-to-br from-cyan-900/40 via-zinc-900 to-zinc-950 p-6 flex items-center justify-center">
              <span className="text-4xl font-extrabold text-cyan-400/80 tracking-widest group-hover:scale-110 transition duration-300">
                WEB APPS
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                Modern Web Applications
              </h3>
              <p className="text-zinc-400 text-sm mt-2">
                Aplikasi web responsif dan dinamis yang dirancang untuk memberikan solusi digital efisien.
              </p>
              <div className="flex items-center gap-2 mt-4 text-xs font-semibold text-zinc-500">
                <span className="px-2.5 py-1 rounded-md bg-zinc-800 text-zinc-300">React</span>
                <span className="px-2.5 py-1 rounded-md bg-zinc-800 text-zinc-300">TypeScript</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 border-t border-zinc-900 bg-zinc-900/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Mari Bekerja Sama</h2>
          <p className="text-zinc-400 mt-3 max-w-xl mx-auto">
            Punya ide proyek menarik atau ingin berdiskusi? Jangan ragu untuk menghubungi saya!
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href="mailto:contact@fahrizikatab.com"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-zinc-950 bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 hover:shadow-[0_0_30px_rgba(56,189,248,0.5)] transition duration-300"
            >
              ✉️ Hubungi via Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-zinc-900 text-center text-xs text-zinc-500">
        <p>© {new Date().getFullYear()} Fahrizi Katab. All rights reserved.</p>
      </footer>
    </main>
  );
}
