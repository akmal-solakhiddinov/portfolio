const SkillsSection = () => {
  const skills = [
    { category: 'Programming', items: ['JavaScript', 'Python', 'TypeScript'] },
    { category: 'Frameworks', items: ['React', 'Node.js', 'Prisma'] },
    { category: 'Tools', items: ['Docker', 'GitHub Actions'] },
    { category: 'Platforms', items: ['Linux', 'PostgreSQL', 'MySQL'] },
    { category: 'Databases', items: ['SQL'] }
];


  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">What I Bring to the Table</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map(({ category, items }) => (
            <div key={category} className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item} className="text-gray-600">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
