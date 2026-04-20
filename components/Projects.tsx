const projects = [
  {
    name: "OXR",
    description:
      "Instructor-led spatial platform for innovation centers and workforce programs. Enables hands-on learning scaling across devices. Winner of the 2025 James A. Kelly Learning Levers Prize.",
    tech: ["Web-first Authoring", "Multi-device Orchestration", "B2B SaaS"],
    link: "#",
  },
  {
    name: "CodeBloc",
    description:
      "Mixed-reality coding environment exploring spatial interaction for young learners. 2024 MIT Reality Hack Honorable Mention (Enhanced Learning) and 2024 U-M Learning Levers Development Award.",
    tech: ["Mixed Reality", "Spatial Interaction", "Hand Tracking"],
    link: "#",
  },
  {
    name: "TheraplayXR",
    description:
      "Co-designed with Mott Children's Hospital to deliver calming XR experiences supporting hospitalized children through movement and inclusive play.",
    tech: ["Healthcare UX", "Emotional Design", "Accessibility"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a
              key={p.name}
              href={p.link}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all group"
            >
              <h3 className="font-semibold text-gray-900 text-lg mb-2 group-hover:text-blue-600 transition-colors">
                {p.name}
              </h3>
              <p className="text-gray-500 text-sm mb-4 leading-relaxed">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
