import React from 'react';
import { motion } from 'framer-motion';
import { BriefcaseIcon, PhoneIcon, EnvelopeIcon, GlobeAltIcon, CommandLineIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

const projects = [
  {
    name: "Skoolo",
    description: "A school communication app for teachers, parents, and admins with real-time chat via WebSockets.",
    tech: ["React", "Spring Boot", "PostgreSQL", "WebSockets"],
    link: "https://skoolo.vercel.app/",
  },
  {
    name: "Lead Management System",
    description: "A lead tracking system with multi-stage progression, categorization, and admin analytics.",
    tech: ["Spring Boot", "React", "PostgreSQL"],
    link: "https://leadmanager-seven.vercel.app/",
  },
  {
    name: "Task Management Tool",
    description: "An admin-user workflow for assigning and tracking tasks, with deadline notifications and overdue detection.",
    tech: ["PHP", "MySQL", "JavaScript"],
    link: "http://task.vallaham.com/",
  },
];

const skills = [
  { category: "Languages", list: "Java, JavaScript, PHP, SQL, HTML/CSS" },
  { category: "Frameworks", list: "Spring Boot, React, React Native, Bootstrap" },
  { category: "Databases", list: "PostgreSQL, MySQL" },
  { category: "Tools", list: "Git, IntelliJ, VS Code, Postman, Docker" },
  { category: "Concepts", list: "REST APIs, JWT Auth, MVC, Microservices, WebSockets" },
  { category: "Deployment", list: "Vercel, Render, Railway, Firebase Hosting" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const Portfolio = () => {
  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen font-sans">
      
      {/* Header & Hero Section */}
      <header className="p-8 md:p-16 text-center">
        <h1 className="text-4xl md:text-7xl font-extrabold text-white leading-tight animate-fade-in-down">Abishekh OB</h1>
        <p className="text-lg md:text-2xl mt-4 text-gray-300 font-light tracking-wide animate-fade-in-up">Full-Stack & Mobile App Developer</p>
        
        <a 
          href="/resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center mt-8 px-6 py-3 border border-blue-400 text-blue-400 text-base font-semibold rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-blue-400 hover:text-white group"
        >
          View Resume
          <ArrowRightIcon className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </header>

      <main className="mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
        
        {/* About Section */}
        <motion.section
          id="about"
          className="py-12 md:py-20 border-t border-gray-800"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center text-white">About Me</h2>
          <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed text-gray-300 text-center">
            I am a passionate Full Stack & Mobile App Developer with over 1 year of experience building production-ready applications. My expertise lies in creating robust, end-to-end solutions using Java, Spring Boot, React, React Native, and PostgreSQL, with a strong focus on clean code, seamless user experiences, and scalable architecture.
          </p>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          className="py-12 md:py-20 border-t border-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-white">My Work</h2>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {projects.map((project, index) => (
              <motion.a 
                href={project.link} 
                key={index}
                variants={itemVariants}
                className="group relative block rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="p-6 md:p-8 bg-gray-900 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{project.name}</h3>
                    <p className="text-gray-400 mb-4 text-sm md:text-base">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 text-right">
                    <span className="text-blue-400 font-semibold text-sm transition-colors duration-300 group-hover:text-blue-300">
                      View Project &rarr;
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          id="skills"
          className="py-12 md:py-20 border-t border-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-white">My Skills</h2>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-300"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start p-6 bg-gray-900 rounded-xl shadow-md transition-shadow duration-300 hover:shadow-2xl"
              >
                <CommandLineIcon className="h-6 w-6 text-blue-400 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-1">{skill.category}</h3>
                  <p className="text-sm md:text-base text-gray-400">{skill.list}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          className="py-12 md:py-20 border-t border-b border-gray-800"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-white">Get in Touch</h2>
          <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 space-y-6 md:space-y-0">
            <a href="tel:+919566355504" className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 group">
              <PhoneIcon className="h-6 w-6 text-blue-400 group-hover:text-blue-300 mr-3" />
              <span className="text-lg">+91 95663 55504</span>
            </a>
            <a href="mailto:abishekhjuve@gmail.com" className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 group">
              <EnvelopeIcon className="h-6 w-6 text-blue-400 group-hover:text-blue-300 mr-3" />
              <span className="text-lg">abishekhjuve@gmail.com</span>
            </a>
            <a href="https://github.com/abishekh-ob" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 group">
              <BriefcaseIcon className="h-6 w-6 text-blue-400 group-hover:text-blue-300 mr-3" />
              <span className="text-lg">github.com/abishekh-ob</span>
            </a>
            <a href="https://linkedin.com/in/abishekh-ob" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 group">
              <GlobeAltIcon className="h-6 w-6 text-blue-400 group-hover:text-blue-300 mr-3" />
              <span className="text-lg">linkedin.com/in/abishekh-ob</span>
            </a>
          </div>
        </motion.section>

      </main>

      <footer className="py-6 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Abishekh OB. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
