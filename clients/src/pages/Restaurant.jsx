const menu = [
  { name: "Tilapia grillé du lac", desc: "Poisson frais, riz parfumé, sauce citron-gingembre", price: 25 },
  { name: "Poulet Moambé", desc: "Recette traditionnelle à la sauce de noix de palme", price: 22 },
  { name: "Brochettes de bœuf", desc: "Marinées aux épices locales, frites de plantain", price: 18 },
  { name: "Salade tropicale", desc: "Mangue, avocat, papaye, vinaigrette passion", price: 12 },
  { name: "Soupe de poisson Kivu", desc: "Bouillon parfumé aux herbes du terroir", price: 14 },
  { name: "Fondant au chocolat", desc: "Chocolat noir, crème vanille de Madagascar", price: 10 },
];

export default function Restaurant() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <section className="relative h-[60vh] -mt-32 flex items-center justify-center text-white">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920"
          alt="Restaurant"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
            Restaurant & Bar
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Une cuisine raffinée entre saveurs locales et inspirations internationales.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 mt-16">
        <div className="text-center mb-12">
          <span className="text-kivu-600 font-semibold text-sm uppercase tracking-widest">
            Notre carte
          </span>
          <h2 className="font-display text-4xl font-bold mt-3 text-gray-900">
            Saveurs du terroir
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
          {menu.map((item) => (
            <div key={item.name} className="flex justify-between border-b border-dashed pb-4">
              <div>
                <h3 className="font-semibold text-gray-900">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
              <span className="font-bold text-kivu-700 whitespace-nowrap ml-4">
                ${item.price}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-sand-100 p-8 rounded-2xl text-center">
          <p className="text-sm text-gray-600 mb-4">🕒 Horaires</p>
          <p className="text-gray-800">
            Petit-déjeuner : 6h30 – 10h30 · Déjeuner : 12h – 15h · Dîner : 19h – 22h30
          </p>
        </div>
      </div>
    </div>
  );
}