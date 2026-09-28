import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="bg-green-50 border border-green-200 text-green-800 p-8 rounded-2xl text-center">
        <div className="text-4xl mb-3">📩</div>
        <h3 className="font-display text-xl font-bold mb-2">Message envoyé !</h3>
        <p className="text-sm">Nous vous répondrons dans les plus brefs délais.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl space-y-4">
      <div>
        <label className="text-sm font-medium text-gray-700">Nom</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full mt-1 border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-kivu-500"
        />
      </div>
      <div>
        <label className="text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full mt-1 border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-kivu-500"
        />
      </div>
      <div>
        <label className="text-sm font-medium text-gray-700">Sujet</label>
        <input
          type="text"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          className="w-full mt-1 border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-kivu-500"
        />
      </div>
      <div>
        <label className="text-sm font-medium text-gray-700">Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows="5"
          required
          className="w-full mt-1 border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-kivu-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-kivu-600 hover:bg-kivu-700 text-white py-3.5 rounded-lg font-semibold transition"
      >
        Envoyer le message
      </button>
    </form>
  );
}