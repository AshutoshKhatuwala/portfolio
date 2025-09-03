import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Code, Database, Shield, ExternalLink, ChevronDown, Menu, X } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const skills = [
    { category: 'Languages', items: ['JavaScript', 'Java', 'C/C++', 'PHP', 'SQL', 'HTML/CSS'] },
    { category: 'Frameworks', items: ['React', 'Laravel', 'Spring Boot', 'Angular', 'Bootstrap'] },
    { category: 'Security Tools', items: ['Kali Linux', 'Metasploit', 'Nmap', 'Wireshark'] },
    { category: 'Developer Tools', items: ['VS Code', 'PyCharm', 'Git', 'RESTful APIs'] }
  ];

  const experiences = [
    {
      role: 'Full Stack Developer Intern',
      company: 'BrandImprint',
      location: 'Guwahati, Assam',
      period: 'May 2025 – July 2025',
      points: [
        'Developed multiple web applications including an e-commerce platform and school management system',
        'Built a social media website clone with full functionality',
        'Strengthened skills in backend and full-stack workflows',
        'Gained real-world office experience and enhanced teamwork skills'
      ]
    },
    {
      role: 'Backend Developer Intern',
      company: '1stop.ai',
      location: 'Remote',
      period: 'May 2024 – September 2024',
      points: [
        'Developed backend web applications using PHP and Laravel',
        'Built a comprehensive booking management system',
        'Gained expertise in MVC architecture and RESTful API development',
        'Worked on multiple small-scale projects enhancing backend skills'
      ]
    }
  ];

  const projects = [
    {
      title: 'School Management System',
      tech: 'Laravel, Bootstrap, MySQL',
      period: 'June 2025 – Present',
      description: 'A comprehensive web application that centralizes and automates core academic processes including student enrollment, class assignment, and parent-teacher communication.',
      features: [
        'Role-based access control (Admin, Teacher, Parent, Student)',
        'Dynamic student assignment to classes and subjects',
        'Automated notifications system',
        'Reduced manual processing time by 60%'
      ],
      status: 'In Development'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-md shadow-2xl' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
              AK
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-cyan-400 ${
                    activeSection === item.toLowerCase() ? 'text-cyan-400' : 'text-white'
                  }`}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-cyan-300 animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-t border-white/10">
            <div className="px-4 py-2 space-y-1">
              {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-3 py-2 text-sm font-medium hover:text-cyan-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/30 to-cyan-900/30"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 bg-clip-text text-transparent">
              Ashutosh Khatuwala
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Computer Science Student • Information Security Specialist • Full Stack Developer
            </h2>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              Passionate about secure software design, penetration testing, and modern web architectures. 
              Building the future of secure digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full font-semibold text-black hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-1"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border-2 border-cyan-400 rounded-full font-semibold text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:-translate-y-1"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-cyan-300 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-cyan-400">Professional Summary</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a hardworking and motivated Computer Science undergraduate specializing in Information Security. 
                With hands-on experience in backend and full-stack development, I have a proven track record of 
                delivering robust web applications using modern technologies like Laravel, React, and Spring Boot.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                My passion lies in secure software design, penetration testing, and modern web architectures. 
                I'm adept at quickly learning new technologies and applying them to solve real-world problems, 
                with practical experience using Kali Linux and Ubuntu for security assessments.
              </p>
              
              <div className="bg-gray-900/70 p-6 rounded-xl border border-gray-700/50">
                <h4 className="text-xl font-semibold text-cyan-400 mb-4">Education</h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-cyan-300">Bachelor of Technology in Computer Science (Information Security)</h5>
                    <p className="text-gray-400">Vellore Institute of Technology • CGPA: 8.43</p>
                    <p className="text-gray-500 text-sm">Expected Graduation: 2026</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-cyan-300">Grade 12</h5>
                    <p className="text-gray-400">South Point School, Guwahati, Assam • 2022</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-gray-900/70 to-cyan-900/20 p-6 rounded-xl border border-gray-700/50">
                <div className="flex items-center mb-4">
                  <Code className="text-cyan-400 mr-3" size={24} />
                  <h4 className="text-xl font-semibold">Development Focus</h4>
                </div>
                <p className="text-gray-300">
                  Specialized in building secure, scalable web applications with modern frameworks and best practices.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900/70 to-cyan-900/20 p-6 rounded-xl border border-gray-700/50">
                <div className="flex items-center mb-4">
                  <Shield className="text-cyan-400 mr-3" size={24} />
                  <h4 className="text-xl font-semibold">Security Expertise</h4>
                </div>
                <p className="text-gray-300">
                  Passionate about penetration testing, secure coding practices, and cybersecurity assessments.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900/70 to-cyan-900/20 p-6 rounded-xl border border-gray-700/50">
                <div className="flex items-center mb-4">
                  <Database className="text-cyan-400 mr-3" size={24} />
                  <h4 className="text-xl font-semibold">Full Stack Skills</h4>
                </div>
                <p className="text-gray-300">
                  Experience with both frontend and backend technologies, database design, and API development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
              Work Experience
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-cyan-300 mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900/70 to-cyan-900/20 p-8 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-cyan-400 mb-2">{exp.role}</h3>
                    <h4 className="text-xl text-cyan-300 mb-1">{exp.company}</h4>
                    <p className="text-gray-400 flex items-center">
                      <MapPin size={16} className="mr-1" />
                      {exp.location}
                    </p>
                  </div>
                  <div className="text-gray-300 font-semibold bg-gray-800/50 px-4 py-2 rounded-lg mt-4 md:mt-0">
                    {exp.period}
                  </div>
                </div>
                <ul className="space-y-3">
                  {exp.points.map((point, i) => (
                    <li key={i} className="text-gray-300 flex items-start">
                      <span className="text-cyan-400 mr-3 mt-1.5 block w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-cyan-300 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900/70 to-cyan-900/20 p-8 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10">
                <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <h3 className="text-2xl font-bold text-cyan-400 mr-4">{project.title}</h3>
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-sm rounded-full border border-cyan-500/30">
                        {project.status}
                      </span>
                    </div>
                    <p className="text-cyan-300 font-semibold mb-2">{project.tech}</p>
                    <p className="text-gray-400 mb-4">{project.period}</p>
                    <p className="text-gray-300 text-lg mb-6">{project.description}</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-cyan-400 mb-4">Key Features:</h4>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-gray-300 flex items-start">
                        <span className="text-cyan-400 mr-3 mt-1.5 block w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-400 text-lg mb-6">More projects coming soon! Stay tuned for updates.</p>
            <button className="px-6 py-3 border-2 border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:-translate-y-1">
              View All Projects on GitHub
            </button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-cyan-300 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900/70 to-cyan-900/20 p-6 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10">
                <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center">
                  {skillGroup.category === 'Languages' && <Code className="mr-2" size={20} />}
                  {skillGroup.category === 'Frameworks' && <Database className="mr-2" size={20} />}
                  {skillGroup.category === 'Security Tools' && <Shield className="mr-2" size={20} />}
                  {skillGroup.category === 'Developer Tools' && <Code className="mr-2" size={20} />}
                  {skillGroup.category}
                </h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, i) => (
                    <li key={i} className="text-gray-300 hover:text-white transition-colors cursor-default">
                      • {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-cyan-300 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or just having a conversation about technology and security.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a 
              href="mailto:khatuwalaashutosh01@gmail.com"
              className="bg-gradient-to-br from-gray-900/70 to-cyan-900/20 p-6 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10 group"
            >
              <Mail className="text-cyan-400 mb-4 mx-auto group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-lg font-semibold mb-2 text-cyan-400">Email</h3>
              <p className="text-gray-300 text-sm">khatuwalaashutosh01@gmail.com</p>
            </a>
            
            <a 
              href="tel:60028-46925"
              className="bg-gradient-to-br from-gray-900/70 to-cyan-900/20 p-6 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10 group"
            >
              <Phone className="text-cyan-400 mb-4 mx-auto group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-lg font-semibold mb-2 text-cyan-400">Phone</h3>
              <p className="text-gray-300 text-sm">60028-46925</p>
            </a>
            
            <a 
              href="https://linkedin.com/in/ashutosh-khatuwala"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-gray-900/70 to-cyan-900/20 p-6 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10 group"
            >
              <Linkedin className="text-cyan-400 mb-4 mx-auto group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-lg font-semibold mb-2 text-cyan-400">LinkedIn</h3>
              <p className="text-gray-300 text-sm">Connect with me</p>
            </a>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/AshutoshKhatuwala"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-900 rounded-full hover:bg-cyan-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/ashutosh-khatuwala"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-900 rounded-full hover:bg-cyan-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-400/25"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:khatuwalaashutosh01@gmail.com"
              className="p-3 bg-gray-900 rounded-full hover:bg-cyan-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-400/25"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-700/50 bg-black/50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Ashutosh Khatuwala. Built with React and lots of ☕
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Designed for security, built for performance, crafted with passion.
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;