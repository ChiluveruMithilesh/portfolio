import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { id: "about", title: "About" },
  { id: "skills", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

export const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`w-full flex items-center py-4 fixed top-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/40 backdrop-blur-md border-b border-white/5" : "bg-transparent"}`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-6 lg:px-10">
        <a 
          href="/" 
          className="flex items-center gap-3" 
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <div className="w-8 h-8 bg-gradient-to-tr from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-white">M</div>
          <p className="text-white text-[13px] font-bold uppercase tracking-tight cursor-pointer flex">
            Mithilesh Raja Krishna
          </p>
        </a>

        <div className="hidden lg:flex gap-8 text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">
          <span>A.I. Specialization</span>
          <span>B.Tech 2027</span>
          <span>GPA 9.4</span>
        </div>

        <ul className="list-none hidden sm:flex flex-row gap-8">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-slate-400"
              } hover:text-white text-[11px] font-bold uppercase tracking-widest cursor-pointer transition-colors`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <div onClick={() => setToggle(!toggle)} className="cursor-pointer text-white">
            {toggle ? <X size={28} /> : <Menu size={28} />}
          </div>

          <div className={`${!toggle ? "hidden" : "flex"} p-6 bg-black/90 backdrop-blur-2xl absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl border border-white/10`}>
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
