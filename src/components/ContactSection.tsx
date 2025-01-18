
const ContactSection = () => (
  <section id="contacts" className="py-16 bg-gray-900 text-white">
    <div className="max-w-5xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-8 text-center">Let’s Connect</h2>
      <form className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="p-3 bg-gray-800 text-white rounded"
        />
        <input
          type="email"
          placeholder="Email"
          className="p-3 bg-gray-800 text-white rounded"
        />
        <textarea
          placeholder="Message"
          className="p-3 bg-gray-800 text-white rounded"
          rows={5}
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded"
        >
          Send
        </button>
      </form>
      <div className="flex justify-center mt-8 space-x-4">
        <a href="https://github.com/akmal-solakhiddinov" className="hover:underline">
          GitHub
        </a>
        <a href="https://uz.linkedin.com/in/akmal-salokhiddinov-274ba0231" className="hover:underline">
          LinkedIn
        </a>
        <a href="mailto:akmalsalakhiddinov03@gmail.com" className="hover:underline">
          Email
        </a>
      </div>
    </div>
  </section>
);

export default ContactSection;
