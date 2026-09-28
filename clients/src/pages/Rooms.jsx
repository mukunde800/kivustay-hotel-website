import { useMemo, useState } from "react";
import { rooms } from "../data/rooms";
import RoomCard from "../components/rooms/RoomCard";
import RoomFilters from "../components/rooms/RoomFilters";

export default function Rooms() {
  const [filters, setFilters] = useState({ type: "Tous", sort: "price-asc" });

  const filtered = useMemo(() => {
    let list = [...rooms];
    if (filters.type !== "Tous") list = list.filter((r) => r.type === filters.type);
    switch (filters.sort) {
      case "price-asc": list.sort((a, b) => a.price - b.price); break;
      case "price-desc": list.sort((a, b) => b.price - a.price); break;
      case "name": list.sort((a, b) => a.name.localeCompare(b.name)); break;
    }
    return list;
  }, [filters]);

  return (
    <div className="pt-32 pb-24 bg-sand-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-kivu-600 font-semibold text-sm uppercase tracking-widest">
            Hébergements
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mt-3 text-gray-900">
            Chambres & Suites
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Trouvez l'espace parfait pour votre séjour au bord du lac Kivu.
          </p>
        </div>

        <RoomFilters filters={filters} onChange={setFilters} />

        {filtered.length === 0 ? (
          <p className="text-center text-gray-500 py-20">Aucune chambre ne correspond.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((r) => (
              <RoomCard key={r.slug} room={r} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}