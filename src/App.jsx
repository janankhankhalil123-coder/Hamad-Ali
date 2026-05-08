import React, { useState, useEffect } from 'react';

export default function HamadAliPortfolio() {
  const [typedText, setTypedText] = useState('');
  const [showIntro, setShowIntro] = useState(true);
  const fullIntroText = "AI Developer | Cybersecurity Enthusiast | Web Designer";
  
  const whatsapp1 = "https://wa.me/923179518826";
  const whatsapp2 = "https://wa.me/9233350955663";

  // Typing effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullIntroText.slice(0, i));
      i++;
      if (i > fullIntroText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Auto-hide cinematic intro after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      
      {/* 1. CINEMATIC INTRO OVERLAY */}
      {showIntro && (
        <div className="fixed inset-0 z-[1000] bg-black flex flex-col items-center justify-center transition-opacity duration-1000">
          <div className="relative">
            <div className="w-48 h-48 rounded-full border-4 border-cyan-500 border-t-transparent animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-cyan-400 font-black animate-pulse">HAMAD.AI</span>
            </div>
          </div>
          <h1 className="mt-10 text-2xl md:text-4xl font-black tracking-[10px] animate-pulse text-center px-4">
            AUTHENTICATING SYSTEM...
          </h1>
        </div>
      )}

      {/* 2. BACKGROUND ARCHITECTURE */}
      <div className="fixed inset-0 -z-20 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.08)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-cyan-600/10 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-purple-600/10 blur-[150px] rounded-full"></div>
      </div>

      {/* 3. NAVIGATION */}
      <nav className="fixed top-0 w-full z-[100] backdrop-blur-2xl bg-black/50 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
          <h1 className="text-2xl font-black tracking-tighter bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            HAMAD ALI
          </h1>
          <div className="hidden md:flex gap-10 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">
            <a href="#home" className="hover:text-cyan-400 transition-colors">System</a>
            <a href="#about" className="hover:text-cyan-400 transition-colors">Profile</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Logic</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Connect</a>
          </div>
        </div>
      </nav>

      {/* 4. HERO SECTION */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-4 px-5 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping"></span>
              <p className="text-cyan-400 text-[10px] font-bold uppercase tracking-[0.3em]">Developer Node: Peshawar, PK</p>
            </div>

            <h1 className="text-7xl md:text-9xl font-black leading-none tracking-tighter">
              HAMAD <br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                ALI
              </span>
            </h1>

            <p className="text-2xl font-mono text-cyan-100 border-r-2 border-cyan-400 pr-2 w-fit animate-pulse">
              {typedText}
            </p>

            <div className="flex flex-wrap gap-6">
              <a href={whatsapp1} target="_blank" rel="noreferrer" className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-black rounded-2xl hover:scale-105 transition-all shadow-[0_0_40px_rgba(6,182,212,0.3)]">
                PRIMARY WA
              </a>
              <a href={whatsapp2} target="_blank" rel="noreferrer" className="px-10 py-5 border border-white/20 rounded-2xl font-bold hover:bg-white/10 transition-all">
                SECONDARY WA
              </a>
            </div>
          </div>

          <div className="relative group flex justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-purple-500 rounded-[60px] blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative border border-white/10 p-4 rounded-[60px] bg-white/5 backdrop-blur-xl shadow-2xl">
              <img 
                src="/hamad_ali.png" 
                alt="Hamad Ali" 
                className="w-full max-w-[400px] h-[550px] object-cover rounded-[50px] shadow-inner"
              />
              <div className="absolute -bottom-10 -left-10 bg-black border border-cyan-500/50 p-8 rounded-[40px] shadow-2xl backdrop-blur-2xl">
                <p className="text-5xl font-black text-cyan-400">943</p>
                <p className="text-[10px] uppercase tracking-widest text-gray-500">Matric Marks</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ABOUT & PERSONAL DATA (The Terminal) */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="bg-[#050505] border border-white/5 rounded-[40px] p-10 space-y-6">
            <h3 className="text-3xl font-black text-cyan-400">CORE_PROFILE</h3>
            <div className="space-y-4 font-mono text-gray-400">
              <p><span className="text-white font-bold">FULL_NAME:</span> Hamad Ali</p>
              <p><span className="text-white font-bold">FATHER:</span> Imdad Ali</p>
              <p><span className="text-white font-bold">BASE:</span> Bakhshi Pul, New Ghari, Peshawar</p>
              <p><span className="text-white font-bold">LANGUAGES:</span> Urdu, English, Pashto</p>
            </div>
          </div>
          <div className="bg-[#050505] border border-white/5 rounded-[40px] p-10 space-y-6">
            <h3 className="text-3xl font-black text-purple-400">EDUCATION_LOG</h3>
            <div className="space-y-4 font-mono text-gray-400">
              <p><span className="text-white font-bold">CURRENT:</span> 11th Grade (BISE Peshawar)</p>
              <p><span className="text-white font-bold">DIPLOMA:</span> D.IT (Information Technology)</p>
              <p><span className="text-white font-bold">CERT:</span> Full-Stack Web Development</p>
              <p><span className="text-white font-bold">GOAL:</span> AI & Cybersecurity Expert</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SKILLS PROGRESS */}
      <section id="skills" className="py-32 px-6 bg-white/[0.01]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-black mb-20 text-center tracking-tighter">SKILL_MATRIX</h2>
          <div className="grid md:grid-cols-2 gap-x-20 gap-y-12">
            {[
              { name: 'Python', level: '85%' },
              { name: 'JavaScript', level: '80%' },
              { name: 'HTML/CSS', level: '95%' },
              { name: 'React.js', level: '75%' },
              { name: 'Cybersecurity', level: '70%' },
              { name: 'Hardware (AMD)', level: '90%' },
            ].map((skill, i) => (
              <div key={i} className="space-y-4">
                <div className="flex justify-between font-bold text-sm tracking-widest">
                  <span>{skill.name}</span>
                  <span className="text-cyan-400">{skill.level}</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 animate-pulse" 
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PROJECT CARDS */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="text-5xl font-black tracking-tighter inline-block border-b-4 border-cyan-500 pb-4">DEPLOYED_WORK</h2>
        </div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
          {[
            { title: 'E-Commerce Dashboard', icon: '🛒', desc: 'Animated full-stack clothing store with admin price control.' },
            { title: 'Cybersecurity Toolkit', icon: '🛡️', desc: 'Security assessment tools for modern web vulnerabilities.' },
            { title: 'Hardware Optimizer', icon: '⚙️', desc: 'Performance tuning logic for AMD FM2+ architectures.' }
          ].map((proj, i) => (
            <div key={i} className="group p-10 rounded-[45px] bg-white/5 border border-white/5 hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-4">
              <div className="text-6xl mb-8 group-hover:rotate-12 transition-transform">{proj.icon}</div>
              <h3 className="text-2xl font-black mb-4">{proj.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{proj.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. JOURNEY TIMELINE */}
      <section className="py-32 px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-4xl font-black mb-20 text-purple-400">JOURNEY_TIMELINE</h2>
          <div className="space-y-12 border-l-2 border-white/10 pl-10 ml-6">
            {[
              'Achieved 943 Marks in Matriculation',
              'Completed D.IT Diploma with Excellence',
              'Mastered Full-Stack Development Fundamentals',
              'Designing E-Commerce & AI Interface Projects'
            ].map((step, i) => (
              <div key={i} className="relative group">
                <div className="absolute -left-[54px] top-2 w-6 h-6 rounded-full bg-black border-4 border-cyan-500 group-hover:bg-cyan-500 transition-all"></div>
                <div className="p-8 bg-white/5 rounded-3xl border border-white/5 hover:border-white/20 transition-all">
                  <p className="text-lg text-gray-300">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CONTACT & FOOTER */}
      <footer id="contact" className="py-32 border-t border-white/5 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-10">
          <h2 className="text-5xl font-black bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">INITIATE_CONTACT</h2>
          <p className="text-gray-500 font-mono">system.status = "Awaiting Message..."</p>
          <div className="flex flex-wrap justify-center gap-8">
            <a href={whatsapp1} className="text-sm font-black tracking-widest hover:text-cyan-400 transition-colors">PRIMARY_0317</a>
            <a href={whatsapp2} className="text-sm font-black tracking-widest hover:text-cyan-400 transition-colors">SECONDARY_0333</a>
          </div>
          <p className="text-[10px] text-gray-700 tracking-[0.8em] uppercase pt-20">
            © 2026 HAMAD ALI | PESHAWAR | ULTRA PREMIUM EDITION
          </p>
        </div>
      </footer>

    </div>
  );
}
