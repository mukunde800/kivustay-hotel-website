import { Link } from "react-router-dom";
import { rooms } from "../../data/rooms";
import RoomCard from "../rooms/RoomCard";

export default function FeaturedRooms() {
  return (
    <section className="py-24 bg-sand-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-kivu-600 font-semibold text-sm uppercase tracking-widest">
            Hébergements
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 text-gray-900">
            Nos chambres phares
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Du confort contemporain au luxe absolu, choisissez l'espace qui vous ressemble.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rooms.map((room) => (
            <RoomCard key={room.slug} room={room} />
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            to="/chambres"
            className="inline-block bg-kivu-600 hover:bg-kivu-700 text-white px-8 py-3.5 rounded-full font-semibold transition"
          >
            Voir toutes les chambres
          </Link>
        </div>
      </div>
    </section>
  );
}