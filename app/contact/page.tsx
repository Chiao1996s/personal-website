import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact | Chiao Lin",
};

export default function ContactPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold text-gray-900 mb-3">Contact</h1>
      <p className="text-gray-500 mb-6">
        Have a question or want to work together? Send me a message or reach out directly.
      </p>
      <div className="flex gap-6 mb-10 text-sm">
        <a
          href="mailto:chiaolin@umich.edu"
          className="text-blue-600 hover:underline"
        >
          chiaolin@umich.edu
        </a>
        <a
          href="https://www.linkedin.com/in/yuchiaolin1996/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          LinkedIn
        </a>
      </div>
      <ContactForm />
    </section>
  );
}
