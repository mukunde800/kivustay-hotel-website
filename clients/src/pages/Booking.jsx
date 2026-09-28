import BookingForm from "../components/booking/BookingForm";

export default function Booking() {
  return (
    <div className="pt-32 pb-24 bg-sand-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-kivu-600 font-semibold text-sm uppercase tracking-widest">
            Réservation
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mt-3 text-gray-900">
            Réservez votre séjour
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Remplissez le formulaire ci-dessous et nous vous confirmerons votre réservation sous 24h.
          </p>
        </div>

        <BookingForm />

        <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-3xl mx-auto text-center text-sm">
          {[
            { icon: "✅", t: "Annulation gratuite", d: "jusqu'à 48h avant l'arrivée" },
            { icon: "🔒", t: "Paiement sécurisé", d: "aucune carte demandée en ligne" },
            { icon: "☎️", t: "Assistance 24/7", d: "notre équipe vous accompagne" },
          ].map((f) => (
            <div key={f.t} className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="text-3xl mb-2">{f.icon}</div>
              <p className="font-semibold text-gray-800">{f.t}</p>
              <p className="text-gray-500 text-xs mt-1">{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}