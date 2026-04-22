import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, Github, Linkedin, Phone, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

export const Contact = () => {
  const formRef = useRef<any>();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      alert('Thank you. I will get back to you as soon as possible.');
      setForm({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto" id="contact">
      <div className="flex flex-col lg:flex-row gap-16 overflow-hidden">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="flex-[0.75] bg-black/40 border border-white/5 p-10 rounded-3xl"
        >
          <div className="mb-10">
            <h2 className="text-[10px] uppercase tracking-[0.4em] text-slate-500 font-bold mb-4">Inquiry</h2>
            <h3 className="text-white font-black md:text-[60px] text-[40px] leading-tight tracking-tighter uppercase italic">Get in <span className="text-purple-400">touch.</span></h3>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
            <label className="flex flex-col group">
              <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-3 group-focus-within:text-cyan-400 transition-colors">Identification</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name / Organization"
                className="bg-white/5 py-4 px-6 placeholder:text-slate-600 text-white rounded-xl border border-white/5 focus:border-cyan-500/50 outline-none font-medium transition-all"
                required
              />
            </label>
            <label className="flex flex-col group">
              <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-3 group-focus-within:text-cyan-400 transition-colors">Direct Channel</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="email@example.com"
                className="bg-white/5 py-4 px-6 placeholder:text-slate-600 text-white rounded-xl border border-white/5 focus:border-cyan-500/50 outline-none font-medium transition-all"
                required
              />
            </label>
            <label className="flex flex-col group">
              <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-3 group-focus-within:text-cyan-400 transition-colors">Detailed Proposal</span>
              <textarea
                rows={5}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className="bg-white/5 py-4 px-6 placeholder:text-slate-600 text-white rounded-xl border border-white/5 focus:border-cyan-500/50 outline-none font-medium transition-all resize-none"
                required
              />
            </label>

            <button
              type="submit"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 py-4 px-10 outline-none w-fit text-white font-black uppercase tracking-widest text-xs shadow-lg shadow-cyan-500/10 rounded-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3 mt-4"
            >
              {loading ? 'Initializing...' : 'Dispatch Signal'} <Send size={14} />
            </button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 flex flex-col justify-center gap-8 lg:pl-10"
        >
          <div className="relative">
             <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full" />
             <h4 className="text-3xl font-black text-white italic tracking-tighter mb-4 uppercase">Let's solve <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">impossible</span> problems.</h4>
             <p className="text-slate-500 font-medium leading-relaxed max-w-sm">
               Currently exploring roles in AI research and full-stack engineering. Available for discussions regarding scalable systems and prompt optimization.
             </p>
          </div>
          
          <div className="grid grid-cols-1 gap-4 w-full max-w-sm">
             <a href={`mailto:${PERSONAL_INFO.email}`} className="group sleek-glass p-5 rounded-2xl flex items-center gap-5 hover:border-cyan-400 transition-all">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/10 transition-colors">
                  <Mail size={20} />
                </div>
                <div className="overflow-hidden">
                  <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest mb-1">Electronic Mail</p>
                  <p className="text-sm font-bold truncate text-slate-200">{PERSONAL_INFO.email}</p>
                </div>
             </a>
             <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="group sleek-glass p-5 rounded-2xl flex items-center gap-5 hover:border-purple-400 transition-all">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/10 transition-colors">
                  <Linkedin size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest mb-1">Professional Graph</p>
                  <p className="text-sm font-bold text-slate-200">Connect on LinkedIn</p>
                </div>
             </a>
             <a href={PERSONAL_INFO.codechef} target="_blank" rel="noopener noreferrer" className="group sleek-glass p-5 rounded-2xl flex items-center gap-5 hover:border-blue-400 transition-all">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/10 transition-colors">
                  <Github size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest mb-1">Competitive Matrix</p>
                  <p className="text-sm font-bold text-slate-200">View Rankings</p>
                </div>
             </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
