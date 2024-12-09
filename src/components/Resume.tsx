import React from 'react';
import { Download, FileText } from 'lucide-react';
import assets from '../assets/Rohit Sampannavar - Resume.pdf'

export function Resume() {
  return (
    <section id="resume" className="py-24 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-16 text-gray-900 dark:text-white">Resume</h2>
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
          <div className="flex flex-col items-center gap-6">
            <FileText className="w-16 h-16 text-purple-600 dark:text-purple-400" />
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">Download My Resume</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Get a detailed overview of my skills, experience, and achievements
              </p>
            </div>
            <a
              href={assets}
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-300"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </div>
          <div className="mt-12 text-left">
            <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Key Skills</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "React / Redux",
                "TypeScript",
                "JavaScript",
                "Node.js",
                "MongoDB",
                "Microservices",
                "RabbitMQ",
                "WebSockets",
                "AngularJS",
                "Jenkins",
                "AWS",
                "CI/CD",
                "Testing",
                "Agile/Scrum",
                "SQL",
                "ORM / Prisma "
              ].map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                >
                  <span className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full"></span>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}