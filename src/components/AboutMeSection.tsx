const AboutMeSection = () => (
  <section className="py-16 bg-gray-100">
    <div className="max-w-5xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">About Me</h2>
      <p className="text-lg text-gray-600 mb-6 text-center">
        I’m a self-taught developer passionate about backend development and creating impactful software.
      </p>
      <h3 className="text-2xl font-semibold mb-4">Timeline</h3>
      <ul className="space-y-4 text-gray-700">
        <li>2024: Built a real-time messaging app using Socket.io React.js, TypeScript, and Tailwind CSS.</li>
        <li>2024: Learned Linux servers and networking during university, including configuring networks and managing Linux servers.</li>
        <li>2024: Worked on the Ganya Project, contributing to the development of an online platform using frontend technologies like Next.js and TypeScript.</li>
        <li>2023: Gained hands-on experience with Cisco networking by studying routing, VLANs, and network configurations.</li>
      </ul>
    </div>
  </section>
);

export default AboutMeSection;
