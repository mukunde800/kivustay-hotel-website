import { useState } from "react";

// 🌐 URL du backend (configurable via .env du frontend)
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [feedback, setFeedback] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setFeedback("");

    // ⏱️ Timeout de 15 s
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form), // { name, email, subject, message }
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Erreur inconnue");

      setStatus("success");
      setFeedback("✅ Merci ! Votre message a bien été envoyé.");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      clearTimeout(timeoutId);
      console.error("Erreur envoi formulaire :", err);

      let message = "Erreur réseau. Réessayez plus tard.";
      if (err.name === "AbortError") {
        message = "Le serveur met trop de temps à répondre. Réessayez.";
      } else if (err.message === "Failed to fetch") {
        message = `Impossible de contacter le serveur (${API_URL}). Vérifie que le backend est démarré.`;
      } else if (err.message) {
        message = err.message;
      }

      setStatus("error");
      setFeedback("❌ " + message);
    }
  };

  // ---------- ÉCRAN DE SUCCÈS ----------
  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 text-green-800 p-8 rounded-2xl text-center">
        <div className="text-4xl mb-3">📩</div>
        <h3 className="font-display text-xl font-bold mb-2">Message envoyé !</h3>
        <p className="text-sm mb-4">
          Nous vous répondrons dans les plus brefs délais.
        </p>
        <button
          onClick={() => {
            setStatus("idle");
            setFeedback("");
          }}
          className="text-sm text-green-700 underline hover:no-underline"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  const isLoading = status === "loading";

  // ---------- FORMULAIRE ----------
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-2xl shadow-xl space-y-4"
    >
      <div>
        <label className="text-sm font-medium text-gray-700">Nom</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          disabled={isLoading}
          className="w-full mt-1 border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-kivu-500 disabled:bg-gray-100"
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
          disabled={isLoading}
          className="w-full mt-1 border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-kivu-500 disabled:bg-gray-100"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700">Sujet</label>
        <input
          type="text"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          disabled={isLoading}
          className="w-full mt-1 border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-kivu-500 disabled:bg-gray-100"
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
          disabled={isLoading}
          className="w-full mt-1 border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-kivu-500 disabled:bg-gray-100"
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-kivu-600 hover:bg-kivu-700 text-white py-3.5 rounded-lg font-semibold transition disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isLoading ? "Envoi en cours..." : "Envoyer le message"}
      </button>

      {feedback && status === "error" && (
        <p className="text-sm text-center font-medium text-red-600">
          {feedback}
        </p>
      )}
    </form>
  );
}