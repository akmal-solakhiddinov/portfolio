
const ProjectsSection = () => {
  const projects = [
    {
      title: 'Real-Time Chat App',
      description: 'WebSocket-based app with private chat rooms.',
      technologies: ['Node.js', 'WebSocket', 'React'],
      links: { code: 'https://github.com/akmal-solakhiddinov/Messaging', demo: '#' },
    },
    {
      title: 'E-Commerce Site',
      description: 'Fully functional store with payment integration.',
      technologies: ['Django', 'SQLite', 'Bootstrap'],
      links: { code: 'https://github.com/akmal-solakhiddinov/e-commerce', demo: '#' },
    },
  ];



  return (
    <section className="py-16 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">What I’ve Built</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map(({ title, description, technologies, links }) => (
            <div key={title} className="bg-gray-700 p-6 rounded shadow">
              <h3 className="text-2xl font-semibold mb-4">{title}</h3>
              <p className="mb-4">{description}</p>
              <ul className="mb-4 space-y-2">
                {technologies.map((tech) => (
                  <li key={tech} className="text-gray-300">{tech}</li>
                ))}
              </ul>
              <div className="flex space-x-4">
                <a
                  href={links.code}
                  className="text-blue-400 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </a>
                {links.demo && (
                  <a
                    href={links.demo}
                    className="text-blue-400 hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
