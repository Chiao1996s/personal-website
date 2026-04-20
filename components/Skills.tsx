const skills = [
  "Product Design",
  "Systems Design",
  "UX Research",
  "Extended Reality (XR)",
  "Spatial Computing",
  "Web-first Platforms",
  "Healthcare UX",
  "Accessibility",
  "Agile Development",
  "B2B SaaS",
  "Emotional Design",
  "Multi-device Orchestration",
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Skills</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-blue-50 hover:text-blue-700 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
