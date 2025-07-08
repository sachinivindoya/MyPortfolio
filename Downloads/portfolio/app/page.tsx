"use client"
import { ArrowRight, Award, Briefcase, Building, Code, Download, ExternalLink, Facebook, Github, GraduationCap, Linkedin, Lock, Mail, Phone, Share2, Sparkles, Star, User, UserIcon, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  // Floating orbs animation
  const FloatingOrbs = () => (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-64 h-64 bg-gradient-to-r from-purple-500/10 to-yellow-500/10 rounded-full blur-3xl animate-pulse`}
          style={{
            left: `${20 + i * 15}%`,
            top: `${10 + i * 12}%`,
            animationDelay: `${i * 2}s`,
            animationDuration: `${8 + i * 2}s`,
            transform: `translateY(${Math.sin(scrollY * 0.01 + i) * 20}px)`
          }}
        />
      ))}
    </div>
  );

  // Custom cursor follower
  const CursorFollower = () => (
    <div
      className="fixed w-6 h-6 bg-gradient-to-r from-purple-400 to-yellow-400 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150"
      style={{
        left: mousePosition.x - 12,
        top: mousePosition.y - 12,
        transform: 'scale(0.8)',
      }}
    />
  );

  // const skills = [
  //   { name: 'React/Next.js', level: 95, color: 'from-blue-500 to-cyan-500' },
  //   { name: 'TypeScript', level: 90, color: 'from-blue-600 to-indigo-600' },
  //   { name: 'Node.js', level: 85, color: 'from-green-500 to-emerald-500' },
  //   { name: 'Python', level: 80, color: 'from-yellow-500 to-orange-500' },
  //   { name: 'AWS/Cloud', level: 75, color: 'from-orange-500 to-red-500' },
  //   { name: 'UI/UX Design', level: 85, color: 'from-pink-500 to-rose-500' },
  // ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-900 text-white relative overflow-hidden">
      <FloatingOrbs />
      <CursorFollower />

      {/* Custom Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-slate-900/20 backdrop-blur-xl border-b border-purple-500/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-yellow-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
                &lt;Sachini Vinodya/&gt;
              </div>
            </div>
            <div className="hidden md:flex space-x-1">
              {['about', 'skills', 'education', 'experience', 'projects', 'certificates', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`relative px-4 py-2 rounded-full capitalize transition-all duration-500 hover:scale-105 ${activeSection === item
                    ? 'bg-gradient-to-r from-purple-500/20 to-yellow-500/20 text-yellow-400 shadow-lg'
                    : 'text-gray-300 hover:text-purple-400'
                    }`}
                >
                  {activeSection === item && (
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-yellow-500/10 rounded-full blur-sm"></div>
                  )}
                  <span className="relative">{item === 'skills' ? 'skills' : item}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section id="about" className="relative pt-32 pb-20 px-6 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className={`transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-yellow-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                <div className="relative w-80 h-80 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-yellow-500 p-2">
                  <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center relative overflow-hidden">
                    <div className="w-64 h-64 rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-yellow-400 flex items-center justify-center text-6xl font-bold text-slate-900 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
                      {/* <span className="relative">SV</span> */}
                      <Image src="https://i.postimg.cc/HxktT4TF/1671073404235-removebg-preview.png" alt="Sachini Vinodya"  width={300} height={300} className="w-full h-full object-cover rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-left">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-yellow-500/20 rounded-full mb-6 border border-purple-500/30">
                  <Sparkles className="w-5 h-5 text-yellow-400 mr-2" />
                  <span className="text-sm font-medium">Available for new opportunities</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                  <span className="block text-white">Hello, I&apos;m</span>
                  <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
                    Sachini Vinodya
                  </span>
                </h1>

                <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
                  Dedicated Full Stack Developer skilled in modern web technologies, focused on creating scalable applications. Proven ability to manage development cycles and ensure innovative ideas transform into successful products.
                </p>
                <div className="flex flex-wrap gap-4">
                  {/* <button
                    onClick={() => scrollToSection('projects')}
                    className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-yellow-600 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  >
                    <span className="relative z-10 flex items-center">
                      View My Work
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button> */}
                  <button className="group px-8 py-4 border-2 border-purple-500/50 rounded-full font-semibold transition-all duration-300 hover:bg-purple-500/10 hover:border-purple-400">
                    <span className="flex items-center">
                      <Download className="w-5 h-5 mr-2" />
                      Download CV
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-yellow-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Dedicated to crafting exceptional digital experiences through clean code and innovative solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-yellow-600 rounded-2xl blur opacity-20"></div>
              <div className="relative bg-slate-800/50 rounded-2xl p-8 border border-purple-500/20">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-purple-300">Professional Background</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Dynamic Software Engineer with a comprehensive skill set spanning Java, MySQL, Reactnative, React, Next.js, and Node.js. Possesses solid experience in project management, consistently leading teams, coordinating timelines, and ensuring the successful delivery of complex software solutions. Thrives in collaborative environments, leveraging strong communication and organizational skills to align technical goals with business objectives. Passionate about exploring the intersection of computer systems engineering and robotics, seeking to contribute both leadership and hands-on development expertise to innovative projects.
                      <br /> <br />
                      Dedicated Full Stack Developer skilled in modern web technologies, focused on creating scalable applications. Proven ability to manage development cycles and ensure innovative ideas transform into successful products.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-purple-300">What Drives Me</h3>
                    <p className="text-gray-300 leading-relaxed">
                      I&apos;m passionate about solving complex problems through elegant code and user-centered design. Every project is an opportunity to learn something new and push the boundaries of what&apos;s possible in web development. I believe in writing clean, maintainable code that not only works but stands the test of time.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-purple-300">Beyond Coding</h3>
                    <p className="text-gray-300 leading-relaxed">
                      When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open-source projects, or mentoring aspiring developers. I believe in continuous learning and staying up-to-date with the latest industry trends and best practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-yellow-600 rounded-2xl blur opacity-20"></div>
                <div className="relative bg-slate-800/50 rounded-2xl p-8 border border-purple-500/20">
                  <h3 className="text-2xl font-bold mb-6 text-purple-300">Core Values</h3>
                  <div className="space-y-4">
                    {[
                      { icon: UserIcon, title: "User-Centric Excellence", description: "My primary focus is on delivering high-quality, impactful solutions that genuinely meet user needs and provide tangible value." },
                      { icon: Users, title: "Collaborative Accountability", description: "I believe in fostering open communication and teamwork, taking shared ownership of project success from concept to delivery." },
                      { icon: Code, title: "Continuous Innovation & Growth", description: "I'm committed to exploring new technologies, refining processes, and constantly learning to drive both personal and project advancement." },
                      { icon: Share2, title: "Agile Problem-Solving", description: "I embrace challenges with a flexible mindset, adapting quickly and creatively to find efficient solutions and ensure project momentum." },
                      { icon: Lock, title: "Integrity & Transparency", description: "I operate with honesty and clarity, building trust through reliable work and open communication with all stakeholders." }
                    ].map((value, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <value.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg mb-1">{value.title}</h4>
                          <p className="text-gray-400 text-sm">{value.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section id="skills" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-yellow-400 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Expertise across modern web technologies and development practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: "Frontend Development",
                icon: "🎨",
                skills: ["HTML", "CSS", "Tailwind CSS", "TypeScript", "JavaScript", "Next.js", "React.js"],
                color: "from-blue-500 to-purple-500"
              },
              {
                category: "Backend Development",
                icon: "⚙️",
                skills: ["Node.js", "Express.js", "Microservices", "Docker"],
                color: "from-green-500 to-emerald-500"
              },
              {
                category: "Languages",
                icon: "💻",
                skills: ["Java", "Python"],
                color: "from-orange-500 to-red-500"
              },
              {
                category: "Databases",
                icon: "🗄️",
                skills: ["MySQL", "MariaDB", "MongoDB"],
                color: "from-indigo-500 to-blue-500"
              },
              {
                category: "WordPress Development",
                icon: "🌐",
                skills: ["WordPress Development"],
                color: "from-purple-500 to-pink-500"
              },
              {
                category: "Project Management & Tools",
                icon: "🛠️",
                skills: ["Jira", "Trello", "Better HR", "GitHub", "Bitbucket", "SourceTree"],
                color: "from-pink-500 to-rose-500"
              },
              {
                category: "Mobile Development",
                icon: "📱",
                skills: ["React Native"],
                color: "from-indigo-500 to-blue-500"
              }
            ]
              .map((skillSet, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-yellow-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                  <div className="relative bg-slate-800/50 rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105 h-full">
                    <div className="flex items-center mb-6">
                      <div className="text-4xl mr-4">{skillSet.icon}</div>
                      <h3 className="text-xl font-bold text-purple-300">{skillSet.category}</h3>
                    </div>
                    <div className="space-y-3">
                      {skillSet.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="flex items-center group/skill border border-purple-500/30 rounded-full px-4 py-2 hover:bg-purple-500/10 transition-colors">
                          <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${skillSet.color} mr-3 group-hover/skill:scale-110 transition-transform`}></div>
                          <span className="text-gray-300 group-hover/skill:text-white transition-colors">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-yellow-400 bg-clip-text text-transparent">
              Soft Skills
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Expertise in leadership, collaboration, and communication to drive success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { skill: "Team Leadership", icon: "💪", color: "from-pink-500 to-rose-500" },
              { skill: "Problem Solving", icon: "🧩", color: "from-blue-500 to-teal-500" },
              { skill: "Communication", icon: "💬", color: "from-yellow-500 to-orange-500" },
              { skill: "Agile/Scrum", icon: "📈", color: "from-green-500 to-lime-500" },
              { skill: "Mentoring", icon: "👥", color: "from-indigo-500 to-purple-500" },
              { skill: "Project Management", icon: "📊", color: "from-red-500 to-pink-500" },
            ].map((softSkill, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-yellow-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative bg-slate-800/50 rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105 h-full">
                  <div className="flex items-center mb-6">
                    <div className="text-4xl mr-4">{softSkill.icon}</div>
                    <h3 className="text-xl font-bold text-purple-300">{softSkill.skill}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Enhanced Education Section */}
      <section id="education" className="py-20 px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-yellow-400 bg-clip-text text-transparent">
            Education Journey
          </h2>
          <div className="relative">
            <div className="absolute md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-yellow-500 rounded-full"></div>
            <div className="space-y-12">
              {[
                {
                  degree: "BEng (Hons) Computer Systems Engineering and Robotics (TOP UP)",
                  school: "London Met University (UK)",
                  year: "2025 FEB - Present",
                  gpa: "N/A",
                  description: "Focusing on Computer Systems Engineering, Robotics, and automation technologies."
                },
                {
                  degree: "Graduate Diploma in Software Engineering (GDSE)",
                  school: "Institute of Software Engineering (IJSE)",
                  year: "2022 - 2024",
                  gpa: "3.15/4.0",
                  description: "Specialized in software engineering principles, system design, and algorithms."
                }
              ].map((edu, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-500 to-yellow-500 rounded-full border-4 border-slate-900"></div>
                  <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:text-right pl-8 md:pr-8' : 'md:text-left pl-8'}`}>
                    <div className="group relative">
                      <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-yellow-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                      <div className="relative bg-slate-800/50 rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                        <div className="flex items-center mb-4">
                          <GraduationCap className="w-8 h-8 text-yellow-400 mr-3" />
                          <div>
                            <h3 className="text-xl font-bold">{edu.degree}</h3>
                            <p className="text-purple-300">{edu.school}</p>
                          </div>
                        </div>
                        <p className="text-gray-400 mb-2">{edu.year}</p>
                        <p className="text-gray-300 mb-2">GPA: {edu.gpa}</p>
                        <p className="text-gray-400 text-sm">{edu.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-yellow-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="space-y-12">
            {[
              {
                title: "Associate Software Engineer & Project Manager",
                company: "Lead Innovationz Pty Ltd - Boxhill, Australia",
                period: "2024 March - 2025 June",
                achievements: [
                  "Leading software development projects and ensuring timely delivery.",
                  "Managing project timelines, resources, and budgets effectively.",
                  "Coordinating between cross-functional teams to ensure smooth project execution.",
                  "Contributing to software architecture decisions and improving team productivity."
                ],
                technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker", "Jira", "Trello", "Slack"]
              },
              {
                title: "Project Manager Intern",
                company: "Limitless Ideation",
                period: "2024 Jan - 2024 March",
                achievements: [
                  "Assisted in managing client-facing projects, ensuring smooth delivery.",
                  "Worked with senior project managers on project scope, scheduling, and reporting.",
                  "Coordinated with internal teams to track project progress and resolve roadblocks.",
                  "Helped prepare project documentation and status reports."
                ],
                technologies: ["Jira", "Trello", "Slack"]
              },
            ].map((exp, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-yellow-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative bg-slate-800/50 rounded-3xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between mb-6">
                    <div className="flex items-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-yellow-500 rounded-2xl flex items-center justify-center mr-4">
                        <Briefcase className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                        <p className="text-purple-300 text-lg">{exp.company}</p>
                      </div>
                    </div>
                    <span className="text-yellow-400 font-semibold bg-yellow-400/10 px-4 py-2 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <h4 className="font-semibold mb-3 text-purple-300">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start text-gray-300">
                            <ArrowRight className="w-4 h-4 text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-purple-300">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="py-20 px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-yellow-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                title: "BlueSkies Aviation",
                description: "A modern aviation platform built using Next.js for a seamless user experience.",
                image: "✈️",
                technologies: ["Next.js"],
                features: ["Fast Load Times", "SEO Optimized", "Responsive Design"],
                personal: false,
              },
              {
                title: "QR Ordering App",
                description: "A QR-based ordering system for restaurants, enabling touchless ordering through React.js.",
                image: "🍽️",
                technologies: ["React.js"],
                features: ["QR Code Scanning", "Order Management", "Payment Integration"],
                personal: false,
              },
              {
                title: "YouLike.ca",
                description: "An e-commerce platform built with WordPress, providing a smooth shopping experience.",
                image: "🛒",
                technologies: ["WordPress"],
                features: ["Product Listings", "Customer Reviews", "Secure Checkout"],
                personal: false,
              },
              {
                title: "BakersBoulevard.com.au",
                description: "A bakery website developed using WordPress, offering online orders and location information.",
                image: "🍞",
                technologies: ["WordPress"],
                features: ["Online Ordering", "Store Locator", "Menu Display"],
                personal: false,
              },
              {
                title: "Foodies Lanka",
                description: "A food delivery website built with WordPress for easy online orders and restaurant listings.",
                image: "🍜",
                technologies: ["WordPress"],
                features: ["Restaurant Listings", "Order Tracking", "Delivery Integration"],
                personal: false,
              },
              {
                title: "Bookmei",
                description: "A booking platform for various services, developed using Next js.",
                image: "📅",
                technologies: ["Next.js", "React.js"],
                features: ["Service Listings", "Booking Management", "User Reviews"],
                personal: false,
              },
              {
                title: "Gym Management System",
                description: "A comprehensive gym management system built with Java and MySQL for managing memberships, schedules, and payments.",
                image: "🏋️",
                technologies: ["Java", "MySQL"],
                features: ["Membership Management", "Schedule Tracking", "Payment Integration"],
                personal: true,
              },
              {
                title: "Hostel Management System",
                description: "A hostel management system developed using Hibernate for managing hostel bookings and room allocations.",
                image: "🏨",
                technologies: ["Hibernate"],
                features: ["Room Allocation", "Booking Management", "Payment System"],
                personal: true,
              },
              {
                title: "Travel Planning Website",
                description: "A travel planning website built using Spring Boot, Microservices, MongoDB, and JWT for secure user authentication.",
                image: "🌍",
                technologies: ["Spring Boot", "Microservices", "MongoDB", "JWT"],
                features: ["Trip Planning", "Secure Login", "Travel Itineraries"],
                personal: true,
              },
              {
                title: "Chat App",
                description: "A real-time chat application built using Java Socket Programming for communication between clients and server.",
                image: "💬",
                technologies: ["Java", "Socket Programming"],
                features: ["Real-time Messaging", "Private Chat", "Group Chat"],
                personal: true,
              },
              {
                title: "Connect4 Game",
                description: "A classic Connect 4 game built using Object-Oriented Programming (OOP) concepts in Java.",
                image: "🎮",
                technologies: ["Java", "OOP Concepts"],
                features: ["Two-player Mode", "Game Logic", "Win Detection"],
                personal: true,
              }
            ]

              .map((project, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-yellow-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                  <div className="relative h-full bg-slate-800/50 rounded-3xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105">
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-6xl">{project.image}</div>
                      <div className="flex space-x-2">
                        <button className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center hover:bg-purple-500/40 transition-colors">
                          {
                            project.personal ?
                              <User className="w-5 h-5 text-purple-400" />
                              :
                              <Building className="w-5 h-5 text-purple-400" />
                          }
                        </button>
                        {/* <button className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center hover:bg-purple-500/40 transition-colors">
                          <ExternalLink className="w-5 h-5 text-purple-400" />
                        </button> */}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 text-purple-300">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {project.features.map((feature, i) => (
                          <span key={i} className="text-sm text-gray-400 flex items-center">
                            <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Enhanced Certificates Section */}
      <section id="certificates" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-yellow-400 bg-clip-text text-transparent">
            Certifications & Awards
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Cisco Packet Tracer', issuer: 'Cisco Network Academy', year: '2024', level: 'Beginner', url:"https://www.netacad.com/profile?tab=badges" },
              { name: 'Introduction to IoT & Digital Transformation', issuer: 'Cisco Network Academy', year: '2024', level: 'Beginner', url:"#" },
              { name: 'Robotics & AI', issuer: 'Great Learning', year: '2023', level: 'Intermediate', url:"#" },
              { name: 'Introduction to JS', issuer: 'Sololearn', year: '2023', level: 'Beginner', url:"https://www.sololearn.com/en/certificates/CC-ZSQLKXVY" },
              { name: 'Introduction to Java', issuer: 'Sololearn', year: '2023', level: 'Beginner', url:"https://www.sololearn.com/certificates/CC-LOQCTONN" },
              { name: 'Introduction to CSS', issuer: 'Sololearn', year: '2023', level: 'Beginner', url:"https://www.sololearn.com/certificates/CC-FPCY5XKL" },
              { name: 'Introduction to HTML', issuer: 'Sololearn', year: '2023', level: 'Beginner', url:"https://www.sololearn.com/certificates/CC-UKO45N0U" },
              { name: 'Hibernate', issuer: 'Simplilearn', year: '2022', level: 'Intermediate', url:"https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxODUzIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvdGh1bWJfNDIwNTAwMF8xNjc4MDcyNzYyLnBuZyIsInVzZXJuYW1lIjoiU2FjaGluaSBWaW5vZHlhIn0%3D&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F4389%2FGetting-Started-with-Java-Hibernate-Basics%2Fcertificate%2Fdownload-skillup&%24web_only=true" },
              { name: 'Android Studio', issuer: 'Simplilearn', year: '2022', level: 'Intermediate', url:"https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIyMzEyIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvdGh1bWJfNDE5NDk0NF8xNjc3NjM2MjUyLnBuZyIsInVzZXJuYW1lIjoiUi5NLlNhY2hpbmkgVmlub2R5YSJ9&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F4959%2FIntroduction-to-Android-Studio-Course%2Fcertificate%2Fdownload-skillup&%24web_only=true" },
              { name: 'Introduction to Kotlin', issuer: 'GDP', year: '2022', level: 'Beginner', url:"https://developers.google.com/profile/u/108985956251833919942" },
              { name: 'Java 2 Star Batch', issuer: 'HackerRank', year: '2021', level: 'Advanced', url:"#" }
            ]
              .map((cert, index) => (
                <div key={index} className="group relative h-full">
                  <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-yellow-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                  <div className="relative h-full bg-slate-800/50 rounded-3xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-yellow-500 rounded-2xl flex items-center justify-center">
                        <Award className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex items-center">
                        <Star className="w-5 h-5 text-yellow-400 mr-1" />
                        <span className="text-sm text-yellow-400 font-semibold">{cert.level}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-2 leading-tight">{cert.name}</h3>
                    <p className="text-purple-300 mb-2">{cert.issuer}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">{cert.year}</span>
                      <Link
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex items-center"
                      >
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-purple-400 transition-colors" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-yellow-400 bg-clip-text text-transparent">
              Let&apos;s Create Something Amazing
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Ready to bring your next project to life? Let&apos;s discuss how we can work together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 col-span-full flex flex-col items-center w-full">
              {[
                { icon: Mail, label: "Email", value: "vinodyasachinivinodya@gmail.com", color: "from-blue-500 to-purple-500" },
                { icon: Phone, label: "Phone", value: "+94 75 494 4970 | +94 70 499 8375", color: "from-green-500 to-emerald-500" }
              ].map((contact, index) => (
                <div key={index} className="group relative max-w-2xl w-full">
                  <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-yellow-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                  <div className="relative bg-slate-800/50 rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 flex items-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${contact.color} rounded-2xl flex items-center justify-center mr-4`}>
                      <contact.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{contact.label}</h3>
                      <p className="text-gray-400">{contact.value}</p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="flex space-x-4">
                {[
                  { icon: Github, href: "https://github.com/sachinivindoya", color: "from-gray-600 to-gray-800" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/sachini-vinodya-a11ba220a/", color: "from-blue-600 to-blue-800" },
                  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61550501976899", color: "from-blue-500 to-blue-700" }
                ]
                  .map((social, index) => (
                    <Link 
                    key={index} 
                    href={social.href} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative">
                      <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-yellow-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                      <div className={`relative w-16 h-16 bg-gradient-to-r ${social.color} rounded-2xl flex items-center justify-center border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-110`}>
                        <social.icon className="w-8 h-8 text-white" />
                      </div>
                    </Link>
                  ))}
              </div>
            </div>

            {/* <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-yellow-600 rounded-3xl blur opacity-20"></div>
              <div className="relative bg-slate-800/50 rounded-3xl p-8 border border-purple-500/20">
                <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
                <form className="space-y-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-6 py-4 bg-slate-700/50 border border-purple-500/20 rounded-xl focus:border-purple-500/40 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-6 py-4 bg-slate-700/50 border border-purple-500/20 rounded-xl focus:border-purple-500/40 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      className="w-full px-6 py-4 bg-slate-700/50 border border-purple-500/20 rounded-xl focus:border-purple-500/40 focus:outline-none transition-colors resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-purple-600 to-yellow-600 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div> */}

          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-12 px-6 bg-slate-900/80 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent mb-4">
                &lt;Sachini Vinodya/&gt;
              </div>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Building the future, one line of code at a time. Let&apos;s create something extraordinary together.
              </p>
            </div>
            <div className="border-t border-purple-500/20 pt-8">
              <p className="text-gray-400">
                © 2025 Sachini Vinodya. Crafted with passion and precision.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;