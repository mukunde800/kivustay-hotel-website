const treatments = [
  { name: "Massage relaxant aux huiles essentielles", duration: "60 min", price: 45 },
  { name: "Massage profond tissus (deep tissue)", duration: "75 min", price: 60 },
  { name: "Soin du visage à l'argile du Kivu", duration: "45 min", price: 40 },
  { name: "Gommage corps au café", duration: "30 min", price: 30 },
  { name: "Rituel signature KivuStay (corps + visage)", duration: "120 min", price: 95 },
  { name: "Bain de boue volcanique", duration: "40 min", price: 50 },
];

export default function Spa() {
  return (
    <div className="bg-white min-h-screen">
      <section className="relative h-[70vh] flex items-center justify-center text-white">
        <img
          src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1920"
          alt="Spa"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <span className="text-kivu-300 font-semibold text-sm uppercase tracking-widest">
            Bien-être
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-bold mt-3 mb-4">
            Spa & Massage
          </h1>
          <p className="text-lg text-gray-200">
            Un sanctuaire de sérénité au bord du lac, pour ressourcer corps et esprit.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="font-display text-3xl font-bold text-gray-900 mb-10 text-center">
          Nos soins signature
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {treatments.map((t) => (
            <div key={t.name} className="bg-sand-100 p-6 rounded-2xl hover:shadow-md transition">
              <h3 className="font-semibold text-gray-900 mb-1">{t.name}</h3>
              <div className="flex justify-between items-center text-sm text-gray-600 mt-3">
                <span>⏱️ {t.duration}</span>
                <span className="font-bold text-kivu-700 text-lg">${t.price}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6 text-center">
          {[
            { icon: "🌿", t: "Produits naturels", d: "Ingrédients locaux et bio" },
            { icon: "🧖", t: "Praticiens certifiés", d: "Équipe expérimentée" },
            { icon: "🌅", t: "Vue lac", d: "Salles ouvertes sur le panorama" },
          ].map((f) => (
            <div key={f.t} className="p-6">
              <div className="text-4xl mb-3">{f.icon}</div>
              <h3 className="font-semibold mb-1">{f.t}</h3>
              <p className="text-sm text-gray-600">{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}