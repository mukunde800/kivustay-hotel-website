import { Link } from "react-router-dom";

export default function CtaSection() {
  return (
    <section className="relative py-24 bg-kivu-700 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative max-w-4xl mx-auto px-6 text-center text-white">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
          Prêt à vivre l'expérience KivuStay ?
        </h2>
        <p className="text-lg text-kivu-100 mb-10">
          Réservez dès maintenant et profitez de 15% de réduction sur votre première nuit.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to="/reservation"
            className="bg-white text-kivu-700 hover:bg-sand-200 px-8 py-3.5 rounded-full font-semibold transition"
          >
            Réserver ma chambre
          </Link>
          <Link
            to="/contact"
            className="border-2 border-white hover:bg-white hover:text-kivu-700 px-8 py-3.5 rounded-full font-semibold transition"
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </section>
  );
}