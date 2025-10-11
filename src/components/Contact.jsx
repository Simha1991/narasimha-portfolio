import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm("service_p53re7t", "template_yfmuemi", form.current, "zSu7tCtYybXQOiwdj")
      .then(
        () => {
          toast.success("✅ Message sent successfully!", {
            duration: 4000,
            style: {
              background: "#10B981",
              color: "#fff",
              borderRadius: "10px",
              fontWeight: 500,
            },
          });
          setIsSending(false);
          form.current.reset();
        },
        () => {
          toast.error("❌ Failed to send message. Please try again.", {
            duration: 4000,
            style: {
              background: "#EF4444",
              color: "#fff",
              borderRadius: "10px",
              fontWeight: 500,
            },
          });
          setIsSending(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative py-20 bg-gradient-to-br from-teal-500 via-green-400 to-green-600 text-white"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Add toaster container */}
      <Toaster position="bottom-center" reverseOrder={false} />

      {/* Radial background for subtle effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,150,136,0.1),transparent_60%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Get in Touch */}
        <div className="backdrop-blur-lg bg-black/30 border border-white/20 rounded-2xl shadow-xl p-8 transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl">
          <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>

          <div className="space-y-4 text-white/90">
            <div>
              <p className="font-semibold">📍 Location</p>
              <a
                href="https://maps.app.goo.gl/NCySbXLRSLBgrV8o7"
                className="text-teal-400 hover:underline"
              >
                Mangaluru, Karnataka, India
              </a>
            </div>

            <div>
              <p className="font-semibold">📧 Email</p>
              <a href="mailto:bhatnarasimha1991@gmail.com" className="text-teal-400 hover:underline">
                bhatnarasimha1991@gmail.com
              </a>
            </div>

            <div>
              <p className="font-semibold">📞 Phone</p>
              <a href="tel:+917899745213" className="text-teal-400 hover:underline">
                +91 7899745213
              </a>
            </div>

            <div>
              <p className="font-semibold">X</p>
              <a
                href="https://x.com/IaMSimha007"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:underline"
              >
                https://x.com/IaMSimha007
              </a>
            </div>

            <div>
              <p className="font-semibold">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/narasimha-bhat/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:underline"
              >
                https://www.linkedin.com/in/narasimha-bhat/
              </a>
            </div>
          </div>
        </div>

        {/* Right: Send a Message */}
        <div className="backdrop-blur-lg bg-black/30 border border-white/20 rounded-2xl shadow-xl p-8 transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl">
          <h2 className="text-3xl font-bold text-white mb-6">Send a Message</h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <div>
              <label className="block text-white font-medium mb-1">Your Name *</label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full rounded-lg border border-white/30 bg-black/20 px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>

            <div>
              <label className="block text-white font-medium mb-1">Email Address *</label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full rounded-lg border border-white/30 bg-black/20 px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>

            <div>
              <label className="block text-white font-medium mb-1">Phone Number</label>
              <input
                type="text"
                name="time"
                className="w-full rounded-lg border border-white/30 bg-black/20 px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>

            <div>
              <label className="block text-white font-medium mb-1">Subject *</label>
              <input
                type="text"
                name="subject"
                required
                className="w-full rounded-lg border border-white/30 bg-black/20 px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>

            <div>
              <label className="block text-white font-medium mb-1">Message *</label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full rounded-lg border border-white/30 bg-black/20 px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>

            <button
              type="submit"
              disabled={isSending}
              className={`w-full py-3 rounded-lg text-white font-medium transition-all ${
                isSending ? "bg-teal-400 cursor-not-allowed" : "bg-teal-600 hover:bg-teal-700"
              }`}
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
