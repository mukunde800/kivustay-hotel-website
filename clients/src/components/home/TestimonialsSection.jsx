import { testimonials } from "../../data/testimonials";

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-kivu-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-kivu-300 font-semibold text-sm uppercase tracking-widest">
            Témoignages
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">
            Ce que disent nos hôtes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-kivu-800/50 backdrop-blur p-8 rounded-2xl">
              <div className="text-sand-300 text-3xl mb-4">"</div>
              <p className="text-gray-200 leading-relaxed mb-6">{t.text}</p>
              <div className="flex items-center gap-4 border-t border-kivu-700 pt-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full" />
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-kivu-300">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}