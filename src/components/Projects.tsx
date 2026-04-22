import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { PROJECTS } from '../constants';

const ProjectCard = ({ index, title, description, tech }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Tilt
        options={{
          max: 15,
          scale: 1.02,
          speed: 1000,
        }}
        className="group relative p-8 bg-gradient-to-b from-white/10 to-transparent border border-white/10 rounded-3xl sm:w-[380px] w-full h-[320px] flex flex-col justify-between transition-all hover:border-cyan-500/30 overflow-hidden"
      >
        <div className="absolute -top-4 -right-4 w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-[10px] font-bold text-slate-500 group-hover:text-cyan-400 group-hover:bg-cyan-500/10 transition-all">
          0{index + 1}
        </div>
        
        <div>
          <h3 className="text-white font-black text-2xl tracking-tight mb-3 group-hover:text-cyan-400 transition-colors uppercase">{title}</h3>
          <p className="text-slate-400 text-xs leading-relaxed font-medium">{description}</p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {tech.map((t: string) => (
            <span key={t} className="px-2 py-1 bg-white/5 text-slate-400 text-[9px] rounded uppercase font-bold tracking-wider">
              {t}
            </span>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

export const Projects = () => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto" id="projects">
      <div className="mb-16">
        <h2 className="text-[10px] uppercase tracking-[0.5em] text-slate-500 font-bold mb-4">Innovation Portfolio</h2>
        <h3 className="text-4xl font-black text-white uppercase tracking-tighter italic">Practical <span className="text-cyan-400">Intelligence.</span></h3>
      </div>

      <div className="flex flex-wrap gap-8 justify-center">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </section>
  );
};
