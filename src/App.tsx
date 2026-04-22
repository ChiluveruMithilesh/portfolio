/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { StarsCanvas } from './components/canvas/Stars';
import { Navbar } from './components/Navbar';
import Hero from './components/Hero';
import { About, Skills } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="relative z-0 bg-primary min-h-screen overflow-x-hidden">
       {/* Sleek Theme background elements */}
       <div className="fixed inset-0 bg-grid-dots opacity-20 pointer-events-none z-[-2]" />
       <div className="fixed -top-40 -right-40 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full z-[-1]" />
       <div className="fixed bottom-0 -left-20 w-80 h-80 bg-cyan-600/10 blur-[100px] rounded-full z-[-1]" />
       <StarsCanvas />

       <div className="relative">
         <Navbar />
         <Hero />
       </div>
       
       <About />
       <Skills />
       
       <div className="relative z-0">
         <Projects />
       </div>

       <div className="relative z-0 pb-20">
         <Contact />
         {/* Footer could go here */}
         <footer className="text-center text-secondary text-sm mt-20 opacity-50">
            <p>© {new Date().getFullYear()} Mithilesh Raja Krishna. Built with AI & Passion.</p>
         </footer>
       </div>
    </div>
  );
}
