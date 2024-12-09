import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent animate-scale-up">
            Rohit Sampannavar
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto transition-colors animate-fade-in delay-200">
            Crafting beautiful and functional web experiences with modern technologies
          </p>
          <div className="flex justify-center space-x-4">
            <SocialLink href="https://github.com/imrohitsampannavar45" icon={<Github size={20} />} delay="delay-300" />
            <SocialLink href="https://www.linkedin.com/in/rohitvs1" icon={<Linkedin size={20} />} delay="delay-400" />
            <SocialLink href="mailto:imrohitsampannavar@gmail.com" icon={<Mail size={20} />} delay="delay-500" />
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon, delay }: { href: string; icon: React.ReactNode; delay: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300 text-gray-800 dark:text-gray-200 animate-slide-in-right ${delay} hover-scale`}
    >
      {icon}
    </a>
  );
}