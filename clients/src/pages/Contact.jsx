import ContactForm from "../components/contact/ContactForm";

export default function Contact() {
  return (
    <div className="pt-32 pb-24 bg-sand-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-kivu-600 font-semibold text-sm uppercase tracking-widest">
            Contact
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mt-3 text-gray-900">
            Parlons de votre séjour
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-2xl shadow-md space-y-6">
            <h2 className="font-display text-2xl font-bold">Nos coordonnées</h2>

            <div className="space-y-4 text-gray-700">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="font-semibold">Adresse</p>
                  <p className="text-sm text-gray-600">Avenue du Lac, Quartier Les Volcans<br />Goma, Nord-Kivu, RDC</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">📞</span>
                <div>
                  <p className="font-semibold">Téléphone</p>
                  <p className="text-sm text-gray-600">+243 990 000 000</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✉️</span>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-sm text-gray-600">contact@kivustay.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🕒</span>
                <div>
                  <p className="font-semibold">Réception</p>
                  <p className="text-sm text-gray-600">Ouverte 24h/24, 7j/7</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden">
              <iframe
                title="Carte KivuStay"
                src="https://www.openstreetmap.org/export/embed.html?bbox=29.15%2C-1.72%2C29.28%2C-1.60&layer=mapnik"
                className="w-full h-64 border-0"
              />
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
}