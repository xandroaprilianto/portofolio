const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300">
          Let’s connect! Send me an email and let’s talk about your project.
        </p>
        <a
          href="mailto:your@email.com"
          className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Send Email
        </a>
      </div>
    </section>
  );
};

export default Contact;