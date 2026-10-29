import React, { useRef, useState, forwardRef } from 'react';
import emailjs from '@emailjs/browser';
import { RxGithubLogo } from "react-icons/rx";
import { FaLinkedin } from "react-icons/fa6";
import BackgroundWaves from './stringBG';

const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

const details = [
  { label: "Personal Email", value: "itsdibakar007@gmail.com", href: "mailto:itsdibakar007@gmail.com" },
  { label: "Institute Email (inactive)", value: "dibakarb.cse.pg@jadavpuruniversity.in", href: null },
  { label: "Current Location", value: "Kolkata, West Bengal, India", href: null },
];

const socials = [
  { label: "LinkedIn", href: "https://linkedin.com/in/connect-dibakar", Icon: FaLinkedin },
  { label: "GitHub", href: "https://github.com/dibakar7", Icon: RxGithubLogo },
];

const ContactMe = forwardRef(({ dayTheme }, ref) => {
  const form = useRef();
  const [status, setStatus] = useState(null);
  const [isError, setIsError] = useState(false);
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    setStatus(null);

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(() => {
        setIsError(false);
        setStatus('Message sent successfully!');
        form.current.reset();
      })
      .catch(() => {
        setIsError(true);
        setStatus('Failed to send message. Please try again.');
      })
      .finally(() => setSending(false));
  };

  const chipClass = `text-[17px] font-normal mt-1 px-4 py-2 rounded-lg w-fit max-w-full break-all xs:text-sm ${
    dayTheme ? "bg-gray-100 text-gray-800" : "bg-gray-800 text-gray-100"
  }`;

  const inputClass = `p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
    dayTheme
      ? "bg-white border-gray-300 text-black placeholder-gray-500"
      : "bg-gray-900 border-gray-600 text-white placeholder-gray-400"
  }`;

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden min-h-96 w-11/12 px-6 md:px-24 shadow-2xl rounded-2xl mb-40 flex flex-col items-center backdrop-blur-sm
      ${
        dayTheme
          ? "bg-gradient-to-r from-yellow-50 via-blue-50 to-blue-100 text-black"
          : "bg-gradient-to-r from-slate-900 via-slate-800 to-gray-950 text-white"
      } p-10`}
    >
      <BackgroundWaves dayTheme={dayTheme} />

      {/* Section Header */}
      <div className="flex items-center justify-center w-full mb-10">
        <hr className="flex-grow border-t border-gray-400" />
        <span className={`mx-4 text-3xl font-bold font-display tracking-tight xs:text-2xl ${dayTheme ? "text-black" : "text-white"}`}>
          Contact Me
        </span>
        <hr className="flex-grow border-t border-gray-400" />
      </div>

      <div className="flex flex-row w-full justify-center items-start gap-10 xt:flex-col">
        {/* Contact details */}
        <div className="w-full max-w-md mb-12 flex flex-col gap-6">
          {details.map(({ label, value, href }) => (
            <div key={label}>
              <h3 className={`text-lg xs:text-base font-medium ${dayTheme ? "text-gray-800" : "text-gray-300"}`}>
                {label}
              </h3>
              {href ? (
                <a href={href} className={`block hover:underline ${chipClass}`}>{value}</a>
              ) : (
                <p className={chipClass}>{value}</p>
              )}
            </div>
          ))}

          <hr className="border-t border-gray-400" />

          <div className="flex flex-row flex-wrap gap-4">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                title={label}
                className={`flex flex-row items-center gap-2 text-[17px] px-4 py-2 rounded-lg transition hover:-translate-y-0.5 ${
                  dayTheme ? "bg-gray-100 text-gray-800 hover:bg-gray-200" : "bg-gray-800 text-gray-100 hover:bg-gray-700"
                }`}
              >
                <Icon style={{ width: "20px", height: "20px" }} />
                <span className="inline xs:hidden">{label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Message form */}
        <div className={`w-full max-w-2xl p-6 rounded-md shadow-inner ${dayTheme ? "bg-white" : "bg-gray-800"}`}>
          <h3 className="text-2xl xs:text-xl font-semibold mb-4">Send Me a Message</h3>
          <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4">
            <input type="text" name="user_name" placeholder="Your Name" aria-label="Your name" required className={inputClass} />
            <input type="email" name="user_email" placeholder="Your Email" aria-label="Your email" required className={inputClass} />
            <textarea name="message" rows="5" placeholder="Your Message" aria-label="Your message" required className={inputClass}></textarea>
            <button
              type="submit"
              disabled={sending}
              className="bg-blue-600 hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-2 px-4 rounded-md transition"
            >
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>

          {status && (
            <p
              role="status"
              className={`text-sm mt-3 ${
                isError ? (dayTheme ? "text-red-600" : "text-red-400") : (dayTheme ? "text-green-600" : "text-green-400")
              }`}
            >
              {status}
            </p>
          )}
        </div>
      </div>

      <div className="flex items-center justify-center w-full pt-10">
        <hr className="flex-grow border-t border-gray-400" />
        <span className={`mx-4 text-2xl font-bold tracking-wide ${dayTheme ? "text-black" : "text-white"}`}>*******</span>
        <hr className="flex-grow border-t border-gray-400" />
      </div>
    </div>
  );
});

export default ContactMe;