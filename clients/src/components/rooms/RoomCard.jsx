import { Link } from "react-router-dom";

export default function RoomCard({ room }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300">
      <div className="relative h-56 overflow-hidden">
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <span className="absolute top-4 left-4 bg-kivu-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
          {room.type}
        </span>
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
          {room.name}
        </h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
          {room.description}
        </p>
        <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
          <span>👥 {room.capacity} pers.</span>
          <span>📐 {room.size} m²</span>
        </div>
        <div className="flex items-center justify-between border-t pt-4">
          <div>
            <span className="text-2xl font-bold text-kivu-700">${room.price}</span>
            <span className="text-sm text-gray-500"> / nuit</span>
          </div>
          <Link
            to={`/chambres/${room.slug}`}
            className="text-sm font-semibold text-kivu-600 hover:text-kivu-800"
          >
            Détails →
          </Link>
        </div>
      </div>
    </div>
  );
}