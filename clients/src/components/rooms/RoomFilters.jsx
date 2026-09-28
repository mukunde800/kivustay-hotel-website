const types = ["Tous", "Standard", "Deluxe", "Suite"];
const sorts = [
  { value: "price-asc", label: "Prix croissant" },
  { value: "price-desc", label: "Prix décroissant" },
  { value: "name", label: "Nom (A-Z)" },
];

export default function RoomFilters({ filters, onChange }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col md:flex-row gap-4 md:items-center md:justify-between mb-10">
      <div className="flex flex-wrap gap-2">
        {types.map((t) => (
          <button
            key={t}
            onClick={() => onChange({ ...filters, type: t })}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              filters.type === t
                ? "bg-kivu-600 text-white"
                : "bg-sand-100 text-gray-700 hover:bg-sand-200"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <label className="text-sm text-gray-600">Trier :</label>
        <select
          value={filters.sort}
          onChange={(e) => onChange({ ...filters, sort: e.target.value })}
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-kivu-500"
        >
          {sorts.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}