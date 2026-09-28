import { useState } from "react";

const images = [
  { src: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200", cat: "Extérieur" },
  { src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200", cat: "Chambres" },
  { src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200", cat: "Extérieur" },
  { src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200", cat: "Chambres" },
  { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200", cat: "Restaurant" },
  { src: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1200", cat: "Spa" },
  { src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200", cat: "Chambres" },
  { src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200", cat: "Extérieur" },
  { src: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200", cat: "Activités" },
  { src: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200", cat: "Extérieur" },
  { src: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200", cat: "Chambres" },
  { src: "https://images.unsplash.com/photo-1544025162-d76694265947?w=1200", cat: "Restaurant" },
];

const cats = ["Tous", "Extérieur", "Chambres", "Restaurant", "Spa", "Activités"];

export default function Gallery() {
  const [filter, setFilter] = useState("Tous");
  const [lightbox, setLightbox] = useState(null);

  const list = filter === "Tous" ? images : images.filter((i) => i.cat === filter);

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-kivu-600 font-semibold text-sm uppercase tracking-widest">
            Galerie
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mt-3 text-gray-900">
            Plongez dans l'univers KivuStay
          </h1>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                filter === c
                  ? "bg-kivu-600 text-white"
                  : "bg-sand-100 text-gray-700 hover:bg-sand-200"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {list.map((img, i) => (
            <button
              key={i}
              onClick={() => setLightbox(img.src)}
              className="relative overflow-hidden rounded-xl group aspect-square"
            >
              <img
                src={img.src}
                alt={img.cat}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition text-2xl">
                  🔍
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-pointer"
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-white text-3xl"
          >
            ✕
          </button>
          <img
            src={lightbox}
            alt=""
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}