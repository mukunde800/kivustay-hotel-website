import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-white">
      <img
        src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1920"
        alt="Lac Kivu"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <span className="inline-block bg-white/20 backdrop-blur px-4 py-1.5 rounded-full text-sm mb-6">
          🌊 Bord du Lac Kivu · RDC
        </span>
        <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
          L'évasion au bord du <span className="text-kivu-300">Lac Kivu</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-100 mb-10">
          Vivez une expérience unique entre nature, confort et hospitalité congolaise.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to="/reservation"
            className="bg-kivu-600 hover:bg-kivu-700 px-8 py-3.5 rounded-full font-semibold transition shadow-lg"
          >
            Réserver maintenant
          </Link>
          <Link
            to="/chambres"
            className="bg-white/10 backdrop-blur border border-white/40 hover:bg-white/20 px-8 py-3.5 rounded-full font-semibold transition"
          >
            Découvrir nos chambres
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/70 text-2xl">
        ↓
      </div>
    </section>
  );
}