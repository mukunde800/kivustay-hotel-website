import { Link, useParams, Navigate } from "react-router-dom";
import { useState } from "react";
import { getRoomBySlug } from "../data/rooms";

export default function RoomDetail() {
  const { slug } = useParams();
  const room = getRoomBySlug(slug);
  const [activeImg, setActiveImg] = useState(0);

  if (!room) return <Navigate to="/chambres" replace />;

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <Link to="/chambres" className="text-sm text-kivu-600 hover:text-kivu-800">
          ← Retour aux chambres
        </Link>

        <div className="mt-6 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <img
              src={room.gallery[activeImg]}
              alt={room.name}
              className="w-full h-[450px] object-cover rounded-2xl shadow-lg"
            />
            <div className="grid grid-cols-3 gap-3 mt-4">
              {room.gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`overflow-hidden rounded-lg border-2 transition ${
                    activeImg === i ? "border-kivu-600" : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-24 object-cover" />
                </button>
              ))}
            </div>

            <h1 className="font-display text-4xl font-bold text-gray-900 mt-10 mb-4">
              {room.name}
            </h1>
            <p className="text-gray-600 leading-relaxed mb-8">{room.longDescription}</p>

            <h2 className="font-display text-2xl font-bold mb-4">Équipements</h2>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {room.amenities.map((a) => (
                <li key={a} className="flex items-center gap-2 text-gray-700 text-sm">
                  <span className="text-kivu-600">✓</span> {a}
                </li>
              ))}
            </ul>
          </div>

          <aside className="lg:sticky lg:top-28 self-start bg-sand-100 p-8 rounded-2xl shadow-md">
            <p className="text-sm text-gray-500 mb-1">À partir de</p>
            <p className="font-display text-4xl font-bold text-kivu-700 mb-6">
              ${room.price}
              <span className="text-base font-normal text-gray-500"> / nuit</span>
            </p>

            <ul className="space-y-2 text-sm text-gray-700 mb-6">
              <li>👥 Jusqu'à {room.capacity} personnes</li>
              <li>📐 {room.size} m²</li>
              <li>🛏️ {room.type}</li>
            </ul>

            <Link
              to="/reservation"
              className="block text-center bg-kivu-600 hover:bg-kivu-700 text-white py-3.5 rounded-full font-semibold transition"
            >
              Réserver cette chambre
            </Link>
            <Link
              to="/contact"
              className="block text-center mt-3 border-2 border-kivu-600 text-kivu-700 hover:bg-kivu-600 hover:text-white py-3 rounded-full font-semibold transition"
            >
              Poser une question
            </Link>
          </aside>
        </div>
      </div>
    </div>
  );
}