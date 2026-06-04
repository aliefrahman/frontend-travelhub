import { Map, Compass, Users, Star } from "lucide-react";

const stats = [
  { icon: Compass, value: "8+", label: "Tours Available", color: "text-primary" },
  { icon: Map, value: "6", label: "Destinations", color: "text-accent" },
  { icon: Users, value: "11", label: "Happy Travelers", color: "text-secondary" },
  { icon: Star, value: "4.9 / 5.0", label: "Average Rating", color: "text-yellow-500" },
];

export default function Stats() {
  return (
    <section className="relative -mt-16 z-20 max-w-5xl mx-auto px-4">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gray-50 group-hover:bg-primary/10 transition-colors mb-3">
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <p className="text-2xl md:text-3xl font-bold text-dark">{stat.value}</p>
              <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}