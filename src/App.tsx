import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail as MailIcon,
  MessageSquare, 
  Phone,
  MapPin, 
  GraduationCap, 
  Calendar, 
  ChevronRight, 
  ArrowUp, 
  ExternalLink,
  Code,
  Briefcase, 
  Award, 
  CheckCircle,
  Sparkles,
  Heart,
  Figma
} from "lucide-react";
import { 
  educationData, 
  projectsData, 
  Project 
} from "./data";

// 1. Meng-import gambar agar ikut dikompilasi oleh Vite untuk production Vercel
import fotoBio from "./assets/images/fotobio.jpeg";
import fotoMalang from "./assets/images/malang.jpeg";

export default function App() {
  // Scroll and UI states
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Track scroll activity
  useEffect(() => {
    const handleScroll = () => {
      // Top progress bar
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // Show scroll-to-top button
      setShowScrollTop(window.scrollY > 500);

      // Determine active section based on proximity
      const sections = ["home", "about", "projects", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            // keep this scroll listener for other effects if needed
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll method
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 0;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans selection:bg-blue-100 selection:text-blue-900 scroll-smooth antialiased">
      
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 right-0 h-1 bg-linear-to-r from-blue-600 via-cyan-400 to-indigo-600 z-100 origin-left transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="fixed top-6 right-6 z-50">
        <a 
          href="mailto:fabioilham321@gmail.com" 
          className="inline-flex items-center gap-2 rounded-full bg-white/95 border border-slate-200 shadow-xl px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors duration-200"
        >
          <MailIcon className="w-4 h-4 text-blue-600" />
          fabioilham321@gmail.com
        </a>
      </div>

      {/* 2. HERO SECTION */}
      <section 
        id="home" 
        className="relative min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-[#f8fafc] to-[#f1f5f9] overflow-hidden"
      >
        {/* Subtle decorative background patterns */}
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl -z-10 animate-pulse duration-5000" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl -z-10 animate-pulse duration-7000" />
        
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Column (Circular Big Avatar Profile) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center order-first lg:order-0" id="hero-avatar-container">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative group cursor-pointer"
            >
              {/* Spinning gradient glow border effect */}
              <div className="absolute -inset-4 rounded-full bg-linear-to-r from-blue-600 via-cyan-400 to-indigo-600 opacity-70 blur-md group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt" />
              
              {/* Rounded image frame with shadow & zoom on hover */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white bg-white shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105">
                <img
                  src={fotoBio}
                  alt="Foto profil Fabio Ilham Muhammad"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback in case of image missing
                    e.currentTarget.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=500";
                  }}
                />
              </div>

              {/* Digital Badge floating */}
              <motion.div 
                className="absolute -bottom-2 -right-2 bg-slate-900 text-white rounded-full p-3 shadow-lg border border-slate-700 flex items-center justify-center"
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              >
                <Sparkles className="w-6 h-6 text-cyan-400" />
              </motion.div>
            </motion.div>
          </div>

          {/* Hero Right Column (Branding & Description) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left" id="hero-text-container">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100/50 text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
              Tersedia untuk Magang / Proyek Freelance
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-none">
              <span className="block text-slate-900">Fabio Ilham</span>
              <span className="block text-[#2563EB]">Muhammad</span>
            </h1>

            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-700 font-mono">
              Web Developer &amp; Information Systems Student
            </h2>

            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Saya seorang mahasiswa Sistem Informasi yang memiliki minat tinggi dalam pengembangan website, UI/UX Design, dan teknologi digital. Saya senang membangun aplikasi dinamis berbasis web yang modern, responsif, berkecepatan tinggi, dan berfokus pada kenyamanan pengalaman pengguna.
            </p>

            {/* Custom Interactive Colored Floating Buttons Group */}
            <div className="pt-4 flex flex-wrap justify-center lg:justify-start gap-4" id="hero-action-buttons">
              <button 
                onClick={() => scrollTo("about")}
                className="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2"
              >
                <Briefcase className="w-5 h-5 text-blue-100" />
                Tentang Saya
              </button>

              <button 
                onClick={() => scrollTo("projects")}
                className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full shadow-lg shadow-indigo-100 hover:shadow-xl hover:shadow-indigo-200 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2"
              >
                <Code className="w-5 h-5 text-indigo-100" />
                Proyek Saya
              </button>

              <button 
                onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}
                className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-full shadow-lg shadow-slate-200 hover:shadow-xl hover:shadow-slate-300 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2"
              >
                <MessageSquare className="w-5 h-5 text-slate-300" />
                Hubungi Saya
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 3. ABOUT SECTION */}
      <section id="about" className="py-24 bg-white px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Custom Modern Layout Card with Soft Shadow and ample whitespace */}
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-xs uppercase tracking-widest text-blue-600 font-bold font-mono mb-2">About Me</h2>
            <p className="text-3xl sm:text-4xl font-black text-slate-900">Mengenal Lebih Dekat</p>
            <div className="h-1 w-12 bg-blue-600 mx-auto mt-4 rounded-full" />
          </div>

          <div className="bg-slate-50/50 rounded-[30px] border border-slate-100 shadow-xl shadow-slate-100/60 p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="about-card-bento">
            
            {/* Left Column (Details, Location & Education Timeline) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="relative w-full rounded-2xl overflow-hidden aspect-video shadow-md border-4 border-white bg-slate-100">
                <img 
                  src={fotoMalang} 
                  alt="Pemandangan Malang, Jawa Timur" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white text-xs font-semibold flex items-center gap-1.5 bg-slate-900/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/15">
                  <MapPin className="w-3.5 h-3.5 text-blue-400" /> Malang, Jawa Timur, Indonesia
                </div>
              </div>

              {/* Professional details cards */}
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-4">
                <h3 className="font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
                  <GraduationCap className="w-5 h-5 text-blue-600" />
                  Riwayat Pendidikan
                </h3>
                <div className="space-y-6">
                  {educationData.map((edu, idx) => (
                    <div key={idx} className="relative pl-5 border-l-2 border-blue-100 last:border-0 pb-1">
                      <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-[7px] top-[6px]" />
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 mb-1">
                        <span className="font-medium text-xs text-blue-600 font-mono bg-blue-50 px-2 py-0.5 rounded-full inline-block w-fit">
                          {edu.period}
                        </span>
                        <span className="font-bold text-xs text-slate-900">{edu.institution}</span>
                      </div>
                      <h4 className="font-bold text-slate-800 text-sm mb-1">{edu.degree}</h4>
                      {edu.description && (
                        <p className="text-xs text-slate-500 leading-relaxed">{edu.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column (Aspirations, Career paths & Description) */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-2xl font-black text-slate-900">
                Mahasiswa Sistem Informasi yang Menyukai Pemecahan Masalah Melalui Kode
              </h3>

              <div className="space-y-4 text-slate-600 leading-relaxed text-base">
                <p>
                  Halo! Saya Fabio Ilham Muhammad, seorang antusias pengembang web dan mahasiswa jurusan Sistem Informasi di Universitas Merdeka Malang. Melalui dunia akademis dan pengerjaan proyek otodidak, saya menaruh fokus mendalam dalam mempelajari bagaimana membangun teknologi yang memecahkan masalah keseharian masyarakat.
                </p>
              </div>

              {/* Bullet details with modern icons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm flex items-start gap-3">
                  <div className="p-2.5 bg-blue-50 text-blue-600 rounded-lg shrink-0">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">Desain Berfokus Pengguna</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Membuat website yang intuitif, ramah aksesibilitas, dan nyaman dibaca.</p>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm flex items-start gap-3">
                  <div className="p-2.5 bg-cyan-50 text-cyan-600 rounded-lg shrink-0">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">Kualitas Kode Terbaik</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Menulis instruksi pemrograman yang rapi, modular, dan berperforma tinggi.</p>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm flex items-start gap-3">
                  <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-lg shrink-0">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">Selalu Terus Belajar</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Mengeksplorasi ekosistem web modern untuk meningkatkan standar pengerjaan.</p>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm flex items-start gap-3">
                  <div className="p-2.5 bg-amber-50 text-amber-600 rounded-lg shrink-0">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">Penyelesaian Sesuai Jadwal</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Disiplin dalam pembagian waktu antara perkuliahan dan pengerjaan proyek.</p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 4. PROJECTS SECTION */}
      <section id="projects" className="py-24 bg-white px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-xs uppercase tracking-widest text-[#2563EB] font-bold font-mono mb-2">My Work</h2>
            <p className="text-3xl sm:text-4xl font-black text-slate-900">Proyek Unggulan</p>
            <div className="h-1 w-12 bg-blue-600 mx-auto mt-4 rounded-full" />
            
          </div>

          {/* Projects grid containing cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="projects-grid">
            <AnimatePresence mode="popLayout">
              {projectsData.map((project: Project, idx: number) => (
                <motion.article 
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={project.id}
                  className="bg-white rounded-[20px] overflow-hidden border border-slate-150 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    {/* Hover Zoom photo banner with aspect 4:3 */}
                    <div className="relative overflow-hidden aspect-[4/3] bg-slate-100">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-slate-900/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Meta and descriptions */}
                    <div className="p-6">
                      {/* Tech badges inline flex */}
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {project.tech.map((tag, tIdx) => (
                          <span 
                            key={tIdx} 
                            className="bg-blue-50 text-blue-700 text-[10px] font-bold font-mono uppercase px-2.5 py-0.5 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-200 line-clamp-1 mb-2">
                        {project.title}
                      </h3>
                      
                      <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Actions footer buttons */}
                  <div className="px-6 pb-6 pt-2 flex items-center gap-3 border-t border-slate-50">
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 px-4 bg-slate-100 hover:bg-blue-600 text-slate-700 hover:text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-all duration-300"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live Demo
                    </a>
                    {project.FigmaUrl ? (
                      <a 
                        href={project.FigmaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2.5 px-4 bg-slate-100 hover:bg-slate-900 text-slate-700 hover:text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-all duration-300"
                      >
                        <Figma className="w-3.5 h-3.5" />
                        Figma
                      </a>
                    ) : project.githubUrl ? (
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2.5 px-4 bg-slate-100 hover:bg-slate-900 text-slate-700 hover:text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-all duration-300"
                      >
                        <Github className="w-3.5 h-3.5" />
                        Source Code
                      </a>
                    ) : null}
                  </div>

                </motion.article>
              ))}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="text-center md:text-left">
            <h3 className="font-bold text-slate-200 tracking-tight text-base uppercase">Fabio Ilham Muhammad</h3>
            <p className="text-xs text-slate-500 tracking-wide mt-1">Sistem Informasi • Universitas Merdeka Malang</p>
          </div>

          {/* Social media footer icon circles */}
          <div className="flex items-center gap-4" id="footer-social-panel">
            <a 
              href="https://www.linkedin.com/in/fabio-ilham-muhammad-401551390?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 bg-slate-900/40 hover:bg-blue-500/10 text-slate-400 hover:text-blue-400 rounded-full border border-slate-900 transition-colors duration-300"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a 
              href="https://github.com/FabioIlham260205" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 bg-slate-900/40 hover:bg-slate-800 text-slate-400 hover:text-white rounded-full border border-slate-900 transition-colors duration-300"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a 
              href="https://wa.me/6281234567890" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 p-2.5 bg-slate-900/40 hover:bg-emerald-500/10 text-slate-400 hover:text-emerald-400 rounded-full border border-slate-900 transition-colors duration-300"
              aria-label="WhatsApp"
            >
              <Phone className="w-4 h-4" />
              <span className="text-xs sm:text-sm"></span>
            </a>
          </div>

          <p className="text-xs text-slate-600 text-center md:text-right flex items-center gap-1.5 justify-center">
            &copy; 2026 Fabio Ilham Muhammad. All Rights Reserved. Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" />
          </p>

        </div>
      </footer>

      {/* Floating Scroll-To-Top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 z-40 hidden sm:flex items-center justify-center border border-blue-500/30"
            aria-label="Kembali ke atas"
            id="btn-scroll-top"
          >
            <ArrowUp className="w-5 h-5 animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
