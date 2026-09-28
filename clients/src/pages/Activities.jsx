import { activitiesList } from "../data/services";
import { Link } from "react-router-dom";

export default function Activities() {
  return (
    <div className="pt-32 pb-24 bg-sand-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-kivu-600 font-semibold text-sm uppercase tracking-widest">
            Aventures
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mt-3 text-gray-900">
            Activités & Excursions
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Découvrez la richesse naturelle et culturelle de la région du Kivu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activitiesList.map((a) => (
            <div key={a.title} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition group">
              <div className="relative h-52 overflow-hidden">
                <img
                  src={a.image}
                  alt={a.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm">
                  {a.icon}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-gray-900 mb-2">{a.title}</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">{a.desc}</p>
                <div className="flex justify-between items-center border-t pt-4 text-sm">
                  <span className="text-gray-500">⏱️ {a.duration}</span>
                  <span className="font-bold text-kivu-700 text-lg">${a.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            to="/contact"
            className="inline-block bg-kivu-600 hover:bg-kivu-700 text-white px-8 py-3.5 rounded-full font-semibold transition"
          >
            Réserver une activité
          </Link>
        </div>
      </div>
    </div>
  );
}