import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';
import { Github, Linkedin, Mail, Download, ExternalLink } from 'lucide-react';

export default function Hero() {
  const handleDownloadResume = () => {
    // Simulated resume download based on context provided
    const resumeText = `
CHILUVERU MITHILESH RAJA KRISHNA
Mancherial | 2300080107aidsh@gmail.com | 9392202037

EDUCATION
Koneru Lakshmaiah Education Foundation - B.Tech in AI & Data Science (Aug 2023 – June 2027)
GPA: 9.43/10
Narayana Junior College, Hyderabad - MPC (94.5%) (2021 – 2023)

CERTIFICATIONS
- Cambridge Certificate of Proficiency in English (2024)
- AWS Certified Cloud Practitioner

PROJECTS
1. Fitness Tracker (Full Stack) - React, Spring Boot, SQL
2. Fake News Detection - Python, TensorFlow, NLP, Flask
3. Satellite Forest Change Detection - Python, OpenCV, GeoPandas

TECHNOLOGIES
Languages: Java, Python, C
Web: HTML, CSS, JavaScript, React
Backend: Spring Boot, Flask
Databases: SQL
Libraries: NumPy, Pandas, TensorFlow, Matplotlib
    `;
    const blob = new Blob([resumeText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Mithilesh_Raja_Krishna_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section className="relative w-full h-screen mx-auto flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center gap-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <div className="w-8 h-8 bg-gradient-to-tr from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-white mb-6">M</div>
          <h1 className="text-white font-black lg:text-[112px] sm:text-[80px] xs:text-[60px] text-[40px] tracking-tighter leading-[0.9] uppercase">
            INTELLIGENT <br />
            <span className="title-gradient">SYSTEMS</span>
          </h1>
          <p className="text-slate-400 font-light lg:text-[24px] sm:text-[20px] text-[16px] mt-6 max-w-2xl">
            Bridging Human Creativity & Artificial Intelligence
          </p>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.8, duration: 0.5 }}
           className="mt-8 flex flex-col sm:flex-row items-center gap-6"
        >
           <button 
             onClick={handleDownloadResume}
             className="bg-gradient-to-r from-cyan-500 to-purple-600 py-4 px-10 rounded-xl font-black uppercase tracking-widest text-xs flex items-center gap-3 drop-shadow-[0_0_15px_rgba(45,212,191,0.3)] hover:scale-105 transition-all"
           >
             Download CV <Download size={14} />
           </button>
           
           <div className="flex gap-8">
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href={PERSONAL_INFO.codechef} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-purple-400 transition-colors">
                <Github size={24} />
              </a>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-400 hover:text-white transition-colors">
                <Mail size={24} />
              </a>
           </div>
        </motion.div>

        <motion.div
          animate={{
            y: [0, 24, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="absolute bottom-10 w-full flex justify-center items-center"
        >
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 border-[#915eff]">
            <div className="w-3 h-3 rounded-full bg-[#915eff] mb-1" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
