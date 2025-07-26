import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone } from "lucide-react";
import { toast } from "react-toastify";

const ContactSection = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          toast.error("Failed to send message.");
          console.error(error);
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <section
      className="bg-secondary text-white py-20 px-6 font-poppins"
      id="contact"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Let’s Connect</h2>
        <p className="text-gray-300 mb-12 max-w-xl mx-auto">
          Don’t hesitate to contact me, I am very happy to chat, collaborate and
          discuss with you.
        </p>

        <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {/* Email Box */}
          <div className="border border-gray-600 p-4 rounded-lg flex items-center gap-4">
            <div className="bg-red-500 p-3 rounded-md">
              <Mail size={24} />
            </div>
            <div className="text-left">
              <p className="text-sm font-bold">Email</p>
              <p className="text-sm text-gray-300">azrilpramudia01@gmail.com</p>
            </div>
          </div>

          {/* Phone Box */}
          <div className="border border-gray-600 p-4 rounded-lg flex items-center gap-4">
            <div className="bg-purple-600 p-3 rounded-md">
              <Phone size={24} />
            </div>
            <div className="text-left">
              <p className="text-sm font-bold">Phone</p>
              <p className="text-sm text-gray-300">+62 838-2321-8221</p>
            </div>
          </div>
        </div>

        {/* Message Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="border border-gray-600 rounded-lg p-6 space-y-4 text-left"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="bg-transparent border border-gray-600 rounded px-4 py-2 w-full text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="bg-transparent border border-gray-600 rounded px-4 py-2 w-full text-white focus:outline-none"
            />
          </div>
          <input
            type="text"
            name="title"
            required
            placeholder="Subject"
            className="bg-transparent border border-gray-600 rounded px-4 py-2 w-full text-white focus:outline-none"
          />
          <textarea
            name="message"
            rows="6"
            required
            placeholder="Your Message"
            className="bg-transparent border border-gray-600 rounded px-4 py-2 w-full text-white focus:outline-none"
          ></textarea>
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded transition duration-200"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
