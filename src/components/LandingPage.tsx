
const LandingPage = () => (
  <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white px-6">
    <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I’m Akma Solakhiddinov</h1>
    <p className="text-lg md:text-xl mb-6">Turning ideas into impactful solutions.</p>
    <div className="flex space-x-4">
      <a href="./Akmal Solakhiddinov.pdf" className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        My CV
      </a>
      <a href="#contacts" className="px-6 py-2 bg-gray-700 text-white rounded hover:bg-gray-600">
        Contact Me
      </a>
    </div>
  </section>
);

export default LandingPage;
