export default function About() {
  return (
    <section id="about" className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center text-white text-6xl font-bold mx-auto md:mx-0">
          C
        </div>
        <div className="text-gray-600 text-lg leading-relaxed space-y-4">
          <p>
            I&apos;m Chiao Lin, Founder &amp; CEO at Mixel Studio, Inc., and a Product Designer
            &amp; Systems Design Lead. I lead design for web-first platforms, collaborating with
            engineers, educators, and partners to transform technical constraints into scalable
            user experiences.
          </p>
          <p>
            My work bridges complex technology and practical usability — delivering accessible,
            reliable solutions for non-technical users in real-world settings, from innovation
            centers to clinical environments.
          </p>
          <div className="flex flex-wrap gap-3 pt-2 text-sm">
            <span className="text-gray-500">M.S. Information · University of Michigan</span>
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">XR Graduate Certificate · UMich</span>
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">B.S. Architecture · Tamkang University</span>
          </div>
        </div>
      </div>
    </section>
  );
}
