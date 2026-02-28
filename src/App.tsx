import React from 'react';
import { Github, Linkedin, Mail, ArrowRight, Code2 } from 'lucide-react';

function App() {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-100">
            <nav className="fixed w-full backdrop-blur-md bg-slate-900/80 border-b border-slate-800 z-50 transition-all duration-300">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <span className="flex items-center gap-2 text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            <Code2 className="text-cyan-400" size={24} />
                            DevFolio
                        </span>
                        <div className="flex space-x-8 text-sm font-medium">
                            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
                            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
                            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
                        </div>
                    </div>
                </div>
            </nav>

            <main>
                {/* Hero Section */}
                <section id="about" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto flex flex-col justify-center min-h-screen">
                    <div className="relative">
                        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-20 blur-2xl flex-shrink-0 w-32 h-32 md:w-48 md:h-48 left-0 top-0 pointer-events-none"></div>
                        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6">
                            Hi, I'm a <br />
                            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                                Software Engineer
                            </span>
                        </h1>
                    </div>
                    <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mb-12 leading-relaxed">
                        I craft modern, robust, and stunning digital experiences with a deep focus on performance and seamless UI.
                    </p>
                    <div className="flex items-center gap-6 text-slate-400">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800/50 hover:text-cyan-400 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/50 rounded-full transition-all group">
                            <Github size={24} className="group-hover:scale-110 transition-transform" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800/50 hover:text-cyan-400 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/50 rounded-full transition-all group">
                            <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
                        </a>
                        <a href="#contact" className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-full hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all hover:-translate-y-0.5">
                            Contact Me <Mail size={18} />
                        </a>
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="py-32 px-4 sm:px-6 lg:px-8 bg-slate-900/50 relative border-t border-slate-800/50">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-900 to-slate-900 pointer-events-none"></div>
                    <div className="max-w-6xl mx-auto relative z-10">
                        <div className="mb-16">
                            <h2 className="text-4xl font-bold mb-4 inline-block bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                                Selected Work
                            </h2>
                            <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { title: 'E-Commerce Platform', type: 'Full-Stack', desc: 'A high-performance storefront built with React and a robust Node backend.' },
                                { title: 'AI Content Generator', type: 'SaaS App', desc: 'Leverages vast language models to generate bespoke marketing copy.' },
                                { title: 'FinTech Dashboard', type: 'Data Viz', desc: 'Real-time financial analytics visualized beautifully in the browser.' }
                            ].map((proj, i) => (
                                <div key={i} className="group bg-slate-800/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col h-full hover:-translate-y-1">
                                    <div className="h-56 bg-gradient-to-br from-slate-800 to-slate-900 p-6 flex flex-col justify-between">
                                        <div className="flex justify-between items-start">
                                            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 group-hover:border-cyan-500/30 transition-colors pb-1 text-slate-400 group-hover:text-cyan-400">
                                                {i + 1}
                                            </div>
                                            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-500/80 bg-cyan-900/30 px-3 py-1 rounded-full">{proj.type}</span>
                                        </div>
                                    </div>
                                    <div className="p-8 flex-1 flex flex-col relative bg-slate-800/80">
                                        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-600 group-hover:via-cyan-500 transition-all to-transparent opacity-50"></div>
                                        <h3 className="text-xl font-semibold mb-3 text-slate-200 group-hover:text-cyan-400 transition-colors">{proj.title}</h3>
                                        <p className="text-slate-400 text-sm mb-8 leading-relaxed flex-1">
                                            {proj.desc}
                                        </p>
                                        <a href="#" className="inline-flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors mt-auto">
                                            View Project <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact CTA Section */}
                <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 border-t border-slate-800/50">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl sm:text-5xl font-bold mb-6">Ready to build something together?</h2>
                        <p className="text-xl text-slate-400 mb-10">I am currently open for new opportunities and freelance projects.</p>
                        <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-cyan-400 hover:text-slate-900 transition-all hover:scale-105 shadow-xl">
                            Get in Touch <Mail size={20} />
                        </a>
                    </div>
                </section>
            </main>

            <footer className="py-12 border-t border-slate-800 bg-slate-900">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm">
                        &copy; {new Date().getFullYear()} DevFolio. Crafted with care.
                    </p>
                    <div className="flex gap-4 text-slate-500">
                        <a href="#" className="hover:text-slate-300 transition-colors">Privacy</a>
                        <a href="#" className="hover:text-slate-300 transition-colors">Terms</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
