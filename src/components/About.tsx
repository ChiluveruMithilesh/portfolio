import { motion } from 'motion/react';
import { EDUCATION, ACHIEVEMENTS } from '../constants';
import { Award, BookOpen, Calendar, GraduationCap } from 'lucide-react';

export const About = () => (
  <section className="py-20 px-6 max-w-7xl mx-auto" id="about">
    <div className="grid lg:grid-cols-12 gap-12">
      {/* Sidebar-like info */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="lg:col-span-4 lg:border-r border-white/5 lg:pr-12"
      >
        <div className="mb-12">
          <h2 className="text-[10px] uppercase tracking-[0.3em] text-cyan-400 font-bold mb-6">Profile Summary</h2>
          <div className="space-y-4 text-slate-400 text-sm leading-relaxed">
            <p>
              I’m <span className="text-white font-bold">Chiluveru Mithilesh Raja Krishna</span>, a 4th-year undergraduate in Artificial Intelligence and Data Science, passionate about building intelligent systems and scalable web applications. With a strong foundation in programming and problem-solving, I enjoy turning complex ideas into practical, real-world solutions.
            </p>
            <p>
              I specialize in full-stack development and AI-driven applications, combining technologies like <span className="text-cyan-400 font-medium tracking-wide">React, Spring Boot, Python, and TensorFlow</span> to create efficient and user-friendly systems. From developing a Fitness Tracker with real-time analytics to building a Fake News Detection model using deep learning, I focus on projects that blend innovation with impact.
            </p>
            <p>
              Beyond coding, I’m deeply interested in emerging technologies, system design, and performance optimization. I continuously explore new tools and frameworks to stay ahead in the fast-evolving tech landscape. My goal is to build products that are not just functional, but also intelligent, scalable, and meaningful.
            </p>
            <p className="text-cyan-500/80 italic font-medium pt-2">
              I’m always open to collaborations, internships, and challenging opportunities where I can learn, contribute, and grow as a developer and AI enthusiast.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-[10px] uppercase tracking-[0.3em] text-purple-400 font-bold mb-6">Certifications</h2>
          <ul className="space-y-4 text-xs text-slate-400">
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
              AWS Cloud Practitioner
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
              Cambridge Proficiency
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              Ideathon Selected Finalist
            </li>
          </ul>
        </div>
        
        <div className="p-4 sleek-glass rounded-xl border border-white/5 flex items-center gap-4">
          <div className="w-2.5 h-2.5 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_10px_#2dd4bf]" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-slate-300 font-bold">Open for Collaboration</span>
        </div>
      </motion.div>
      
      {/* Education & Achievements */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="lg:col-span-8 space-y-12"
      >
        <div>
          <h2 className="text-[10px] uppercase tracking-[0.3em] text-cyan-400 font-bold mb-8">Academic Trajectory</h2>
          <div className="space-y-8">
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="group relative pl-8 border-l border-white/10 pb-2">
                <div className="absolute left-[-4.5px] top-0 w-[8px] h-[8px] rounded-full bg-slate-800 border border-white/20 group-hover:bg-cyan-400 group-hover:border-cyan-400 transition-colors" />
                <div>
                   <div className="flex justify-between items-baseline mb-2">
                      <h3 className="text-white font-bold text-lg">{edu.title}</h3>
                      <span className="text-[10px] uppercase tracking-widest text-slate-500 font-mono">{edu.duration}</span>
                   </div>
                   <p className="text-cyan-400 text-xs uppercase tracking-wider mb-2">{edu.institution}</p>
                   <p className="text-sm text-slate-400 leading-relaxed max-w-2xl">{edu.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-white/5">
           <h2 className="text-[10px] uppercase tracking-[0.3em] text-purple-400 font-bold mb-8">Innovation Highlights</h2>
           <div className="grid sm:grid-cols-2 gap-4">
              {ACHIEVEMENTS.map((ach, idx) => (
                <div key={idx} className="p-6 sleek-glass rounded-2xl group hover:border-purple-500/30 transition-all">
                  <Award className="text-purple-400 mb-4" size={24} />
                  <h4 className="font-bold text-white mb-2">{ach.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{ach.description}</p>
                </div>
              ))}
           </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const SkillBar = ({ name, level }: { name: string, level: number }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-[11px] text-slate-300 uppercase tracking-wider font-bold">{name}</span>
      <span className="text-[10px] text-slate-500 font-mono italic">{level}%</span>
    </div>
    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="h-full bg-gradient-to-r from-cyan-500 to-purple-600 shadow-[0_0_10px_rgba(45,212,191,0.5)]"
      />
    </div>
  </div>
);

export const Skills = () => {
  const skillCategories = [
    {
      category: "Languages",
      skills: [
        { name: "Java", level: 75 },
        { name: "Python", level: 95 },
        { name: "C", level: 90 }
      ]
    },
    {
      category: "Web Development",
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 88 },
        { name: "React", level: 92 }
      ]
    },
    {
      category: "Backend & DB",
      skills: [
        { name: "Spring Boot", level: 82 },
        { name: "Flask", level: 75 },
        { name: "SQL", level: 85 }
      ]
    },
    {
      category: "AI & Libraries",
      skills: [
        { name: "NumPy", level: 88 },
        { name: "Pandas", level: 85 },
        { name: "TensorFlow", level: 72 },
        { name: "Matplotlib", level: 80 }
      ]
    }
  ];

  return (
    <section className="py-24 bg-black/40 w-full border-y border-white/5" id="skills">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[10px] uppercase tracking-[0.5em] text-cyan-400 font-bold mb-4 italic">Capabilities Matrix</h2>
          <h3 className="text-4xl font-black text-white uppercase tracking-tighter">Technical <span className="title-gradient">Arsenal.</span></h3>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="sleek-glass p-8 rounded-3xl border border-white/5 hover:border-cyan-500/20 transition-all group"
            >
              <div className="flex items-center gap-3 mb-8 border-b border-white/5 pb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-200 group-hover:text-cyan-400 transition-colors">
                  {cat.category}
                </h4>
              </div>
              <div className="space-y-6">
                {cat.skills.map((skill, sIdx) => (
                  <SkillBar key={sIdx} name={skill.name} level={skill.level} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
