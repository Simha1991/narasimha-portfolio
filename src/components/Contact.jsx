import React, { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const form = useRef();
  const [visits, setVisits] = useState(null);
  const [isSending, setIsSending] = useState(false);

    useEffect(() => {
      fetch("https://api.countapi.xyz/hit/narasimha-portfolio/visits")
        .then((res) => res.json())
        .then((data) => setVisits(data.value))
        .catch(() => {});
    }, []);
  
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
  className="relative py-24 px-6 bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-900 text-white"
>
  <Toaster position="bottom-center" reverseOrder={false} />

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

    {/* Left */}
    <div className="bg-white/5 border border-white/10 rounded-2xl p-8">

      <h2 className="text-3xl font-bold mb-6">
        Get in Touch
      </h2>

      <div className="space-y-6 text-gray-300">

        <div>
          <p className="text-sm text-gray-400">Location</p>
          <a
            href="https://maps.app.goo.gl/NCySbXLRSLBgrV8o7"
            className="text-white hover:underline"
          >
            Mangaluru, Karnataka, India
          </a>
        </div>

        <div>
          <p className="text-sm text-gray-400">Email</p>
          <a
            href="mailto:bhatnarasimha1991@gmail.com"
            className="text-white hover:underline"
          >
            bhatnarasimha1991@gmail.com
          </a>
        </div>

        <div>
          <p className="text-sm text-gray-400">X (Twitter)</p>
          <a
            href="https://twitter.com/IaMSimha007"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline"
          >
            @IaMSimha007 ↗
          </a>
        </div>

        <div>
          <p className="text-sm text-gray-400">LinkedIn</p>
          <a
            href="https://www.linkedin.com/in/narasimha-bhat"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline"
          >
            /in/narasimha-bhat ↗
          </a>
        </div>

      </div>
    </div>

    {/* Right */}
    <div className="bg-white/5 border border-white/10 rounded-2xl p-8">

      <h2 className="text-3xl font-bold mb-6">
        Send a Message
      </h2>

      <form ref={form} onSubmit={sendEmail} className="space-y-5">

        <input
          type="text"
          name="user_name"
          placeholder="Your Name *"
          required
          className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white"
        />

        <input
          type="email"
          name="user_email"
          placeholder="Email Address *"
          required
          className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white"
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject *"
          required
          className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white"
        />

        <textarea
          name="message"
          rows="4"
          placeholder="Message *"
          required
          className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white"
        />

        <button
          type="submit"
          disabled={isSending}
          className={`w-full py-3 rounded-lg font-medium transition ${
            isSending
              ? "bg-white/30 text-white/60 cursor-not-allowed"
              : "bg-white text-gray-900 hover:bg-gray-200"
          }`}
        >
          {isSending ? "Sending..." : "Send Message"}
        </button>

      </form>
    </div>

  </div>
  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-white/30 tracking-widest">
    {visits ? `${visits.toLocaleString()} visits` : ""}
  </div>
      
</section>
  );
};

export default Contact;
