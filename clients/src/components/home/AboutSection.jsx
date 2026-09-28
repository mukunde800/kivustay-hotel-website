import { Link } from "react-router-dom";

export default function AboutSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800"
            alt="Hôtel KivuStay"
            className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
          />
          <div className="absolute -bottom-8 -right-8 bg-kivu-600 text-white p-8 rounded-2xl shadow-2xl hidden md:block">
            <p className="text-4xl font-display font-bold">15+</p>
            <p className="text-sm">années d'excellence</p>
          </div>
        </div>

        <div>
          <span className="text-kivu-600 font-semibold text-sm uppercase tracking-widest">
            À propos
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 text-gray-900 leading-tight">
            Une parenthèse enchantée sur les rives du lac
          </h2>
          <p className="text-gray-600 mt-6 leading-relaxed">
            Situé sur la rive nord du majestueux Lac Kivu, <strong>KivuStay</strong> vous
            invite à découvrir un art de vivre unique. Entre montagnes verdoyantes et
            eaux cristallines, notre hôtel allie luxe contemporain et authenticité
            congolaise.
          </p>
          <p className="text-gray-600 mt-4 leading-relaxed">
            Chaque détail a été pensé pour que votre séjour devienne un souvenir
            inoubliable : chambres élégantes, restaurant d'exception, spa raffiné et
            expériences uniques au cœur de la nature.
          </p>

          <div className="grid grid-cols-3 gap-6 mt-10">
            <div>
              <p className="font-display text-3xl font-bold text-kivu-700">48</p>
              <p className="text-sm text-gray-500">Chambres & suites</p>
            </div>
            <div>
              <p className="font-display text-3xl font-bold text-kivu-700">4.9★</p>
              <p className="text-sm text-gray-500">Note clients</p>
            </div>
            <div>
              <p className="font-display text-3xl font-bold text-kivu-700">24/7</p>
              <p className="text-sm text-gray-500">Service concierge</p>
            </div>
          </div>

          <Link
            to="/contact"
            className="inline-block mt-10 text-kivu-600 font-semibold hover:text-kivu-800 transition"
          >
            En savoir plus sur nous →
          </Link>
        </div>
      </div>
    </section>
  );
}