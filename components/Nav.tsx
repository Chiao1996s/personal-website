import Link from "next/link";

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold text-gray-900 hover:text-blue-600 transition-colors">
          Chiao Lin
        </Link>
        <div className="flex gap-6 text-sm font-medium text-gray-600">
          <Link href="/#about" className="hover:text-blue-600 transition-colors">About</Link>
          <Link href="/#projects" className="hover:text-blue-600 transition-colors">Projects</Link>
          <Link href="/#skills" className="hover:text-blue-600 transition-colors">Skills</Link>
          <Link href="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
