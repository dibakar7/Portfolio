import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { RxGithubLogo } from "react-icons/rx";
import { FaLinkedin } from "react-icons/fa6";

const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

const ContactMe = ({ dayTheme }) => {
  const form = useRef();
  const [status, setStatus] = useState(null);
  const [isError, setIsError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    (emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(() => {
        setIsError(false);
        setStatus('✅ Message sent successfully!');
        form.current.reset();
      })
      .catch((error) => {
        setIsError(true);
        setStatus('❌ Failed to send message. Please try again.');
      })
    );

  };

  return (
    <div className={`w-11/12 px-6 py-10 shadow-md rounded-md mb-40 flex flex-col items-center ${dayTheme ? 'bg-gradient-to-r from-yellow-50 to-blue-100 text-black' : 'bg-gradient-to-r from-slate-800 to-gray-900 text-white'}`}>
      <div className="flex items-center justify-center w-full mb-8">
        <hr className="flex-grow border-t border-gray-400" />
        <span className="mx-4 text-3xl font-bold tracking-wide xs:text-2xl">Contact Me</span>
        <hr className="flex-grow border-t border-gray-400" />
      </div>
      <div className="flex flex-row w-full justify-center items-start gap-10 xs:flex-col">
        <div className="w-full max-w-md mb-12 flex flex-col gap-6">
          <div>
            <h3 className={`text-lg xs:text-md font-medium tracking-wide ${dayTheme ? 'text-gray-800' : 'text-gray-300'}`}>Personal Email</h3>
            <p className="text-[17px] font-normal xs:text-sm text-gray-700 dark:text-gray-100 mt-1 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg w-fit">
              itsdibakar007@gmail.com
            </p>

          </div>

          <div>
            <h3 className={`text-lg xs:text-md font-medium tracking-wide ${dayTheme ? 'text-gray-800' : 'text-gray-300'}`}>College Email</h3>
            <p className="text-[17px] font-normal xs:text-[11px] text-gray-700 dark:text-gray-100 mt-1 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg w-fit">dibakarb.cse.pg@jadavpuruniversity.in</p>
          </div>

          <div>
            <h3 className={`text-lg xs:text-md font-medium tracking-wide ${dayTheme ? 'text-gray-800' : 'text-gray-300'}`}>Current Location</h3>
            <p className="text-[17px] font-normal xs:text-sm text-gray-700 dark:text-gray-100 mt-1 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg w-fit">Kolkata, West Bengal, India</p>
          </div>
          <hr className="flex-grow border-t border-gray-400" />
          <div className="flex flex-row gap-8 xs:gap-2">
            <a href="https://linkedin.com/in/connect-dibakar" target="_blank" rel="noreferrer" className="flex flex-row gap-2 text-[17px] font-normal text-gray-700 dark:text-gray-100 mt-1 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg w-fit">
              <FaLinkedin style={{width:"20px", height: "20px"}} />
              <span className="inline xs:hidden">LinkedIn</span>
            </a>
            <a href="https://github.com/dibakar7" target="_blank" rel="noreferrer" className="flex flex-row gap-2 text-[17px] font-normal text-gray-700 dark:text-gray-100 mt-1 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg w-fit">
              <RxGithubLogo style={{width:"20px", height: "20px"}} />
              <span className="inline xs:hidden">GitHub</span>
            </a>
          </div>
        </div>

        <div className={`w-full max-w-2xl p-6 rounded-md shadow-inner shadow-lg ${dayTheme ? 'bg-white' : 'bg-gray-800'}`}>
          <h3 className="text-2xl xs:text-md font-semibold mb-4">Send Me a Message</h3>
          <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white/10 dark:bg-black/20 backdrop-blur-md text-black dark:text-white"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white/10 dark:bg-black/20 backdrop-blur-md text-black dark:text-white"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white/10 dark:bg-black/20 backdrop-blur-md text-black dark:text-white"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition"
            >
              Send Message
            </button>
          </form>

          {status && (
            <p className={`text-sm mt-3 ${isError ? 'text-red-500 dark:text-red-400' : 'text-green-600 dark:text-green-400'}`}>
              {status}
            </p>
          )}
        </div>
      </div>
      <div className="flex items-center justify-center w-full pt-10">
        <hr className="flex-grow border-t border-gray-400" />
        <span className={`mx-4 text-2xl font-bold tracking-wide ${dayTheme ? 'text-black' : 'text-white'}`}>*******</span>
        <hr className="flex-grow border-t border-gray-400" />
      </div>
    </div>
  );
};

export default ContactMe;
