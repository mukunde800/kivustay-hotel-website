import { services } from "../../data/services";

export default function ServicesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-kivu-600 font-semibold text-sm uppercase tracking-widest">
            Nos services
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 text-gray-900">
            Une expérience d'exception
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-sand-100 p-8 rounded-2xl hover:-translate-y-1 transition shadow-sm hover:shadow-lg"
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">{s.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}