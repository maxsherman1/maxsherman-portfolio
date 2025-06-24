'use client';

import React, { useState } from 'react';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/mwpbrvnr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmissionStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmissionStatus('error');
      }
    } catch {
      setSubmissionStatus('error');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Me</h1>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-[var(--text-primary)]">Contact Details</h2>
            <ul className="space-y-4">
              <li className="flex items-center text-[var(--foreground)]">
                <MdEmail className="text-[var(--link-active)] mr-2" size={30} />
                <div>
                  <h3 className="text-lg font-semibold text-[var(--foreground)]">Email</h3>
                  <a href="mailto:work.maxsherman@outlook.com" className="hover:underline text-[var(--foreground)]">work.maxsherman@outlook.com</a>
                </div>
              </li>
              <li className="flex items-center text-[var(--foreground)]">
                <MdPhone className="text-[var(--link-active)] mr-2" size={30} />
                <div>
                  <h3 className="text-lg font-semibold text-[var(--foreground)]">Phone</h3>
                  <a href="tel:+447944304575" className="hover:underline text-[var(--foreground)]">+44 (0) 7944 304 575</a>
                </div>
              </li>
              <li className="flex items-center text-[var(--foreground)]">
                <MdLocationOn className="text-[var(--link-active)] mr-2" size={30} />
                <div>
                  <h3 className="text-lg font-semibold text-[var(--foreground)]">Location</h3>
                  <span>Nijmegen, NL</span>
                </div>
              </li>
            </ul>
          </div>
          <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-[var(--text-primary)]">Send me a message</h2>
          <div className="mb-4">
            <label htmlFor="name" className="block text-[var(--text-primary)] font-semibold mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[var(--link-active)] text-[var(--foreground)]"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-[var(--text-primary)] font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[var(--link-active)] text-[var(--foreground)]"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-[var(--text-primary)] font-semibold mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[var(--link-active)] text-[var(--foreground)]"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[var(--link-active)] text-[var(--text-primary)] px-4 py-2 rounded hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--link-active)]"
          >
            Send Message
          </button>
          {submissionStatus === 'success' && (
            <div className="mt-4 text-[var(--success)]">Your message has been sent successfully!</div>
          )}
          {submissionStatus === 'error' && (
            <div className="mt-4 text-[var(--error)]">There was an error sending your message. Please try again.</div>
          )}
        </form>
      </div>
    </div>
  </div>
  );
}
