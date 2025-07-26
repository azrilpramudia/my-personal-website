import { Mail, Phone, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="bg-gradient-to-b from-secondary to bg-primary text-white py-20 px-6 font-poppins">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Let’s Connect</h2>
        <p className="text-gray-300 mb-12">
          Don't hesitate to contact me, I am very happy to chat, collaborate and
          discuss with you.
        </p>

        {/* Subheading */}
        <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Email */}
          <div className="flex items-center border border-gray-400 rounded-xl p-5 gap-4">
            <div className="bg-red-500 p-3 rounded-md">
              <Mail size={28} className="text-white" />
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold">Email</p>
              <p className="text-sm text-red-300 break-all">
                azrilpramudia01@gmail.com
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center border border-gray-400 rounded-xl p-5 gap-4">
            <div className="bg-purple-600 p-3 rounded-md">
              <Phone size={28} className="text-white" />
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold">Phone</p>
              <p className="text-sm text-purple-300">+62 838-2321-8221</p>
            </div>
          </div>
        </div>

        {/* Message Box */}
        <form className="text-left mt-8">
          <textarea
            rows={6}
            placeholder="Write your message..."
            className="w-full p-4 rounded-xl bg-primary border border-gray-400 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          {/* Send Button */}
          <button
            type="submit"
            className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg flex items-center gap-2 transition-colors duration-200"
          >
            <Send size={18} />
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
