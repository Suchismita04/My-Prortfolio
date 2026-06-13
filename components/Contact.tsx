"use client";

import { useState } from "react";
import contactData from "@/data/contact.json";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const contactDetails = [
  {
    "icon": "fa-solid fa-envelope",
    "text": "suchismitachatterjee13@gmail.com",
    "href": "mailto:suchismitachatterjee13@gmail.com"
  },
  {
    "icon": "fa-solid fa-location-dot",
    "text": "Kolkata, West Bengal"
  },
  {
    "icon": "fa-brands fa-linkedin-in",
    "text": "LinkedIn Profile",
    "href": "https://www.linkedin.com/in/suchismita-chatterjee-736a89280/"
  }
]

export default function Contact() {
  const [loading,setLoading]=useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    setLoading(true)
    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    );

    toast.success("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  } catch (error) {
    console.error(error);
    setLoading(false)
    toast.error("Failed to send message");
  } finally{
    setLoading(false)
  }
};

  const inputClass =
    "w-full px-4 py-[13px] bg-gray-50 border border-gray-200 rounded-lg text-[0.95rem] text-gray-900 outline-none transition-all duration-300 focus:border-indigo-600 focus:shadow-[0_0_0_3px_#e0e7ff] font-sans";

  return (
    <section
      id="contact"
      className="bg-gray-50 px-[clamp(1.25rem,8%,7.5rem)] py-[90px]"
    >
      <h2 className="text-center text-[clamp(1.8rem,4vw,2.5rem)] font-bold mb-12 relative after:content-[''] after:block after:w-[50px] after:h-[4px] after:bg-indigo-600 after:mx-auto after:mt-2.5 after:rounded">
        Contact With Me
      </h2>

      <div className="flex flex-col md:flex-row gap-12 max-w-[960px] mx-auto items-start">
        {/* Info */}
        <div className="flex-1">
          <h2 className="text-[1.8rem] font-bold mb-3">
            Got a project? Let&apos;s team up.
          </h2>
          <p className="text-gray-500 mb-7">
            Whether you have a critical problem to solve, a system to scale, or
            just want to chat engineering — drop a message!
          </p>

          <div className="flex flex-col gap-5">
            {contactDetails.map((detail) => (
              <div key={detail.text} className="flex items-center gap-4">
                <span className="w-11 h-11 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                  <i
                    className={`${detail.icon} text-indigo-600 text-[1.05rem]`}
                  />
                </span>

                {detail.href ? (
                  <a
                    href={detail.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 text-[0.95rem] hover:text-indigo-600 transition-colors"
                  >
                    {detail.text}
                  </a>
                ) : (
                  <span className="text-gray-700 text-[0.95rem]">
                    {detail.text}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex-[1.2] bg-white border border-gray-200 rounded-2xl p-9 shadow-md"
        >
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              value={formData.message}
              onChange={handleChange}
              className={inputClass + " resize-none"}
            />
          </div>
          <button
            type="submit"
            className="w-full py-[14px] bg-indigo-600 text-white font-semibold text-base rounded-lg
              hover:bg-indigo-700 hover:-translate-y-0.5 transition-all duration-300"
          >
           {loading ? "Sending Message...":" Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
