import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <h1 className="text-6xl font-bold mb-4 animate-fade-in">Kinza Khurshid</h1>
        <p className="text-2xl mb-8">Full Stack Developer | Web Enthusiast</p>
        <p className="text-lg mb-8 max-w-2xl">Building beautiful, interactive web applications with modern technologies.</p>
        <a href="#projects" className="bg-white text-blue-600 py-3 px-8 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 font-bold">
          View My Work
        </a>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-white" id="skills">
        <h2 className="text-4xl font-bold text-center mb-12">Skills & Expertise</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
            <h3 className="font-bold text-xl mb-2">JavaScript/React</h3>
            <p className="text-gray-700">Building dynamic, interactive user interfaces with React and modern JavaScript.</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
            <h3 className="font-bold text-xl mb-2">Next.js</h3>
            <p className="text-gray-700">Creating full-stack applications with Next.js and server-side rendering.</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
            <h3 className="font-bold text-xl mb-2">Tailwind CSS</h3>
            <p className="text-gray-700">Designing responsive, beautiful interfaces with utility-first CSS.</p>
          </div>
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
            <h3 className="font-bold text-xl mb-2">Node.js</h3>
            <p className="text-gray-700">Building scalable backend services and APIs with Node.js and Express.</p>
          </div>
          <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
            <h3 className="font-bold text-xl mb-2">Database Design</h3>
            <p className="text-gray-700">Working with MongoDB, PostgreSQL, and designing efficient databases.</p>
          </div>
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
            <h3 className="font-bold text-xl mb-2">Web Development</h3>
            <p className="text-gray-700">Full-stack development, responsive design, and performance optimization.</p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50" id="projects">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
            <h3 className="font-bold text-2xl mb-2">E-Commerce Platform</h3>
            <p className="text-gray-600 mb-4">A full-stack e-commerce solution built with Next.js and MongoDB.</p>
            <a href="#" className="text-blue-600 hover:underline font-semibold">View Project →</a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
            <h3 className="font-bold text-2xl mb-2">Task Management App</h3>
            <p className="text-gray-600 mb-4">A collaborative task management application with real-time updates.</p>
            <a href="#" className="text-blue-600 hover:underline font-semibold">View Project →</a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
            <h3 className="font-bold text-2xl mb-2">Weather Dashboard</h3>
            <p className="text-gray-600 mb-4">Interactive weather app with real-time data and beautiful visualizations.</p>
            <a href="#" className="text-blue-600 hover:underline font-semibold">View Project →</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-blue-600 text-white text-center" id="contact">
        <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
        <p className="text-lg mb-8">I'm always interested in hearing about new projects and opportunities.</p>
        <a href="mailto:your-email@example.com" className="bg-white text-blue-600 py-3 px-8 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 font-bold inline-block">
          Get In Touch
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6">
        <p>&copy; 2026 Kinza Khurshid. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;