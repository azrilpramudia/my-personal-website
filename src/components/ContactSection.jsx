/* eslint-disable no-unused-vars */
import { useRef, useState, useMemo } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone } from "lucide-react";
import { toast } from "react-toastify";
import { motion, useReducedMotion } from "framer-motion";

const ContactSection = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = useMemo(
    () =>
      prefersReducedMotion
        ? { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }
        : {
            hidden: { opacity: 0, y: 16 },
            show: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.55,
                ease: "easeOut",
                staggerChildren: 0.12,
              },
            },
          },
    [prefersReducedMotion]
  );

  const itemVariants = useMemo(
    () =>
      prefersReducedMotion
        ? { hidden: {}, show: {} }
        : {
            hidden: { opacity: 0, y: 14 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.45, ease: "easeOut" },
            },
          },
    [prefersReducedMotion]
  );

  const iconBoxVariants = useMemo(
    () =>
      prefersReducedMotion
        ? { hidden: {}, show: {} }
        : {
            hidden: { opacity: 0, scale: 0.98, y: 10 },
            show: {
              opacity: 1,
              scale: 1,
              y: 0,
              transition: { duration: 0.4, ease: "easeOut" },
            },
          },
    [prefersReducedMotion]
  );

  const fieldVariants = itemVariants;

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
      className="bg-gradient-to-b from-secondary to bg-primary text-white py-20 px-6 font-poppins"
      id="contact"
    >
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={containerVariants}
      >
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          variants={itemVariants}
        >
          Let’s Connect
        </motion.h2>
        <motion.p
          className="text-gray-300 mb-12 max-w-xl mx-auto"
          variants={itemVariants}
        >
          Don’t hesitate to contact me, I am very happy to chat, collaborate and
          discuss with you.
        </motion.p>

        <motion.h3 className="text-2xl font-bold mb-6" variants={itemVariants}>
          Get In Touch
        </motion.h3>

        {/* Info boxes */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
          variants={containerVariants}
        >
          <motion.div
            className="border border-gray-600 p-4 rounded-lg flex items-center gap-4"
            variants={iconBoxVariants}
          >
            <div className="bg-red-500 p-3 rounded-md">
              <Mail size={24} />
            </div>
            <div className="text-left">
              <p className="text-sm font-bold">Email</p>
              <p className="text-sm text-gray-300">azrilpramudia01@gmail.com</p>
            </div>
          </motion.div>

          <motion.div
            className="border border-gray-600 p-4 rounded-lg flex items-center gap-4"
            variants={iconBoxVariants}
          >
            <div className="bg-purple-600 p-3 rounded-md">
              <Phone size={24} />
            </div>
            <div className="text-left">
              <p className="text-sm font-bold">Phone</p>
              <p className="text-sm text-gray-300">+62 838-2321-8221</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="border border-gray-600 rounded-lg p-6 space-y-4 text-left"
          variants={itemVariants}
        >
          <motion.div
            className="grid md:grid-cols-2 gap-4"
            variants={containerVariants}
          >
            <motion.input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="bg-transparent border border-gray-600 rounded px-4 py-2 w-full text-white focus:outline-none"
              variants={fieldVariants}
            />
            <motion.input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="bg-transparent border border-gray-600 rounded px-4 py-2 w-full text-white focus:outline-none"
              variants={fieldVariants}
            />
          </motion.div>

          <motion.input
            type="text"
            name="title"
            required
            placeholder="Subject"
            className="bg-transparent border border-gray-600 rounded px-4 py-2 w-full text-white focus:outline-none"
            variants={fieldVariants}
          />

          <motion.textarea
            name="message"
            rows="6"
            required
            placeholder="Your Message"
            className="bg-transparent border border-gray-600 rounded px-4 py-2 w-full text-white focus:outline-none"
            variants={fieldVariants}
          />

          <motion.button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded transition duration-200"
            variants={fieldVariants}
            whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default ContactSection;
