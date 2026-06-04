import { Globe, DollarSign, ShieldCheck, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Global Access",
    desc: "Book from anywhere, in your currency",
  },
  {
    icon: DollarSign,
    title: "Wholesale Rates",
    desc: "Special pricing for B2B partners",
  },
  {
    icon: ShieldCheck,
    title: "Guaranteed Service",
    desc: "Priority support for your clients",
  },
];

export default function B2BSection() {
  return (
    <section id="b2b" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-linear-to-br from-dark via-slate-800 to-dark rounded-3xl overflow-hidden">
          {/* Decorative */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 p-8 md:p-14">
            {/* Left */}
            <div>
              <span className="inline-block bg-primary/20 text-primary-light text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
                For Travel Agents & Operators
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                B2B Partner Program
              </h2>
              <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-lg">
                Access exclusive wholesale rates, dedicated booking management tools, and curated
                packages designed for travel agents and tour operators worldwide.
              </p>

              <div className="flex flex-wrap gap-3">
                <button className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors flex items-center gap-2">
                  Browse B2B Packages
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="border border-gray-600 text-gray-300 hover:border-primary hover:text-primary px-6 py-3 rounded-xl font-semibold text-sm transition-all">
                  Make a B2B Booking
                </button>
              </div>
            </div>

            {/* Right — Features */}
            <div className="space-y-5">
              {features.map((feat, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors"
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center shrink-0">
                    <feat.icon className="w-6 h-6 text-primary-light" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{feat.title}</h3>
                    <p className="text-gray-400 text-sm">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}