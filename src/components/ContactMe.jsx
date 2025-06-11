import React from 'react';

const ContactMe = ({ dayTheme }) => {
  return (
    <div className={`w-11/12 px-6 py-10 shadow-md rounded-md mb-40 flex flex-col items-center ${dayTheme ? 'day-theme' : 'night-theme'}`}>
      
      {/* Section Header */}
      <div className="flex items-center justify-center w-full mb-8">
        <hr className="flex-grow border-t border-gray-400" />
        <span className="mx-4 text-3xl font-bold tracking-wide">Contact Me</span>
        <hr className="flex-grow border-t border-gray-400" />
      </div>

      {/* Contact Info */}
      <div className="w-full max-w-2xl mb-12">
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Personal Email</h3>
          <p className="text-gray-700 dark:text-gray-300">dibakar.personal@example.com</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">College Email</h3>
          <p className="text-gray-700 dark:text-gray-300">dibakar.college@university.edu</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Current Location</h3>
          <p className="text-gray-700 dark:text-gray-300">Kolkata, West Bengal, India</p>
        </div>
      </div>

      {/* Message Over TLS Section */}
      <div className="w-full max-w-2xl bg-gray-100 dark:bg-gray-900 p-6 rounded-md shadow-inner">
        <h3 className="text-2xl font-semibold mb-4">Send Me a Secure Message (TLS)</h3>
        <form
          method="POST"
          action="https://your-secure-endpoint.com/send-message"
          className="flex flex-col space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition"
          >
            Send Securely
          </button>
        </form>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
          This message will be transmitted over TLS for secure delivery.
        </p>
      </div>
    </div>
  );
};

export default ContactMe;
