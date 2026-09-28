import { useState } from "react";
import { rooms } from "../../data/rooms";

export default function BookingForm() {
  const [form, setForm] = useState({
    checkIn: "",
    checkOut: "",
    guests: 2,
    roomSlug: rooms[0].slug,
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const selectedRoom = rooms.find((r) => r.slug === form.roomSlug);

  const nights = (() => {
    if (!form.checkIn || !form.checkOut) return 0;
    const diff = (new Date(form.checkOut) - new Date(form.checkIn)) / (1000 * 60 * 60 * 24);
    return diff > 0 ? diff : 0;
  })();

  const total = nights * (selectedRoom?.price || 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 text-green-800 p-10 rounded-2xl text-center max-w-2xl mx-auto">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="font-display text-2xl font-bold mb-2">Demande envoyée !</h3>
        <p>Merci {form.name}, nous vous contacterons sous 24h pour confirmer votre réservation.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-2xl shadow-xl max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4"
    >
      <div className="md:col-span-2">
        <label className="text-sm font-medium text-gray-700">Type de chambre</label>
        <select
          name="roomSlug"
          value={form.roomSlug}
          onChange={handleChange}
          className="w-full mt-1 border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-kivu-500"
        >
          {rooms.map((r) => (
            <option key={r.slug} value={r.slug}>
              {r.name} — ${r.price}/nuit
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700">Arrivée</label>
        <input
          type="date"
          name="checkIn"
          value={form.checkIn}
          onChange={handleChange}
          required
          className="w-full mt-1 border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-kivu-500"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700">Départ</label>
        <input
          type="date"
          name="checkOut"
          value={form.checkOut}
          onChange={handleChange}
          required
          className="w-full mt-1 border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-kivu-500"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700">Voyageurs</label>
        <input
          type="number"
          name="guests"
          min="1"
          max="10"
          value={form.guests}
          onChange={handleChange}
          className="w-full mt-1 border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-kivu-500"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700">Téléphone</label>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="+243 ..."
          className="w-full mt-1 border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-kivu-500"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700">Nom complet</label>
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

      <div className="md:col-span-2">
        <label className="text-sm font-medium text-gray-700">Message (optionnel)</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows="3"
          className="w-full mt-1 border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-kivu-500"
        />
      </div>

      {nights > 0 && (
        <div className="md:col-span-2 bg-kivu-50 border border-kivu-200 rounded-lg p-4 text-sm">
          <div className="flex justify-between mb-1">
            <span>{nights} nuit(s) × ${selectedRoom?.price}</span>
            <span className="font-semibold">${total}</span>
          </div>
          <div className="flex justify-between text-base font-bold text-kivu-700 pt-2 border-t border-kivu-200">
            <span>Total estimé</span>
            <span>${total}</span>
          </div>
        </div>
      )}

      <button
        type="submit"
        className="md:col-span-2 bg-kivu-600 hover:bg-kivu-700 text-white py-3.5 rounded-lg font-semibold transition"
      >
        Envoyer ma demande
      </button>
    </form>
  );
}