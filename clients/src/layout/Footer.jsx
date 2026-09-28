import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-kivu-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h3 className="font-display text-2xl font-bold text-white mb-4">
            Kivu<span className="text-sand-300">Stay</span>
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Un havre de paix au bord du Lac Kivu, où confort rime avec nature et hospitalité congolaise.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/chambres" className="hover:text-white transition">Chambres</Link></li>
            <li><Link to="/restaurant" className="hover:text-white transition">Restaurant</Link></li>
            <li><Link to="/spa" className="hover:text-white transition">Spa</Link></li>
            <li><Link to="/activites" className="hover:text-white transition">Activités</Link></li>
            <li><Link to="/galerie" className="hover:text-white transition">Galerie</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>📍 Avenue du Lac, Goma, RDC</li>
            <li>📞 +243 990 000 000</li>
            <li>✉️ contact@kivustay.com</li>
            <li>🕒 Réception 24h/24</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Suivez-nous</h4>
          <div className="flex gap-3">
            {["F", "I", "T", "L"].map((s) => (
              <a
                key={s}
                href="#"
                className="w-10 h-10 rounded-full bg-kivu-800 hover:bg-kivu-600 flex items-center justify-center font-semibold text-white transition"
              >
                {s}
              </a>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-4">
            Recevez nos offres exclusives
          </p>
          <form className="flex mt-2">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-1 px-3 py-2 rounded-l-full bg-kivu-800 text-white text-sm outline-none placeholder:text-gray-500"
            />
            <button className="bg-kivu-600 hover:bg-kivu-500 px-4 rounded-r-full text-white text-sm">
              →
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-kivu-800 text-sm text-center text-gray-500">
        © {new Date().getFullYear()} KivuStay — Tous droits réservés. Conçu avec ❤️ au bord du lac.
      </div>
    </footer>
  );
}