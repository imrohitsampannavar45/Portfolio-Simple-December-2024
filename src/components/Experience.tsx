import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export function Experience() {
  const { elementRef, isVisible } = useIntersectionObserver();

  const experiences = [
    {
      title: "Software Engineer",
      company: "Skylux Telelink Pvt Ltd",
      location: "Bengaluru, Karnataka",
      period: "2023 - 2024",
      description: "Software Engineer and Genesys Developer Creating IVR For Genesys Clients.",
      technologies: ["React", "TypeScript", "Node.js", "Genesys", "MongoDB", "AWS", "Jenkins", "Docker"]
    },
    {
      title: "Java Full Stack Development Trainee",
      company: "KodNest Technologies ",
      location: "Bengaluru, Karnataka",
      period: "2023 - 2024",
      description: "Java Full Stack Development Trainee Mastered Java Programming and Data Structure and Also Object Oriented Programming",
      technologies: ["Java", "Data Structure", "Python", "Manual Testing", "GitHub", "Object Oriented Programming"]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white animate-fade-in">Experience</h2>
        <div
          ref={elementRef as React.RefObject<HTMLDivElement>}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 animate-slide-in-left delay-${index * 200} hover-scale ${isVisible ? 'animate-on-scroll is-visible' : 'animate-on-scroll'
                }`}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg animate-rotate-in">
                  <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mt-1">{exp.company}</p>
                  <div className="flex items-center gap-4 mt-2 text-gray-600 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>
                  <p className="mt-3 text-gray-600 dark:text-gray-300">{exp.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm animate-fade-in delay-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}