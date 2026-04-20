import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-[70vh] flex flex-col justify-center items-center text-center px-6 py-20">
      <h1 className="text-5xl font-bold text-gray-900 mb-4">
        Hi, I&apos;m <span className="text-blue-600">Chiao Lin</span>
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mb-8">
        Human-Centered Product &amp; Systems Designer — making powerful technologies practical for
        non-technical users in real-world settings.
      </p>
      <div className="flex gap-4">
        <Link
          href="/#projects"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          View Projects
        </Link>
        <Link
          href="/contact"
          className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:border-blue-600 hover:text-blue-600 transition-colors"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}
