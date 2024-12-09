import React from 'react';
import { Code, Palette, Rocket } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export function About() {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white animate-fade-in">About Me</h2>
        <div 
          ref={elementRef as React.RefObject<HTMLDivElement>}
          className={`grid md:grid-cols-3 gap-8 ${isVisible ? 'animate-on-scroll is-visible' : 'animate-on-scroll'}`}
        >
          <SkillCard
            icon={<Code className="w-8 h-8 text-purple-600" />}
            title="Development"
            description="Proficient in modern web technologies including React, TypeScript, and Node.js"
            delay="delay-100"
          />
          <SkillCard
            icon={<Palette className="w-8 h-8 text-blue-600" />}
            title="Design"
            description="Creating beautiful and intuitive user interfaces with attention to detail"
            delay="delay-200"
          />
          <SkillCard
            icon={<Rocket className="w-8 h-8 text-indigo-600" />}
            title="Innovation"
            description="Always learning and implementing the latest web technologies"
            delay="delay-300"
          />
        </div>
      </div>
    </section>
  );
}

function SkillCard({ 
  icon, 
  title, 
  description,
  delay 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  delay: string;
}) {
  return (
    <div className={`p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-up ${delay} hover-scale`}>
      <div className="mb-4 animate-bounce">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}