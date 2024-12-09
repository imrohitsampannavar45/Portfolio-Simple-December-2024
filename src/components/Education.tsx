import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export function Education() {
  const education = [
    {
      degree: "Bachelor of Engineering in Computer Science ",
      school: "Biluru Gurubasava Mahaswamiji Institute of Technology Mudhol",
      location: "Mudhol, Karnataka",
      period: "2019 - 2023",
      description: "Completed Bachelor of Engineering in Computer Science with the CGPA of 7.63"
    },
    {
      degree: "Class XII",
      school: "BHS Arts TGP Science PU College",
      location: "Jamkhandi, Karnataka",
      period: "2016 - 2018",
      description: "Focused Class XII in Core Subjects Like Physics Mathematics and Biology Chemistry"
    },
    {
      degree: "Class X",
      school: "Adarsha Vidyalaya RMSA",
      location: "Jamkhandi, Karnataka",
      period: "2014 - 2017",
      description: "Focused Class X in Core Subjects Like Physics Mathematics and Biology Chemistry"
    }
  ];

  return (
    <section id="education" className="py-24 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{edu.degree}</h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mt-1">{edu.school}</p>
                  <div className="flex items-center gap-4 mt-2 text-gray-600 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {edu.location}
                    </span>
                  </div>
                  <p className="mt-3 text-gray-600 dark:text-gray-300">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}