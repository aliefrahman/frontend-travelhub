import { MapPin } from "lucide-react";

const destinations = [
  {
    name: "Bali",
    region: "Bali",
    tours: 2,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80",
  },
  {
    name: "Komodo Island",
    region: "Flores",
    tours: 1,
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=600&q=80",
  },
  {
    name: "Lombok",
    region: "Lombok",
    tours: 1,
    image: "https://images.unsplash.com/photo-1570789210967-2cac24f06d91?w=600&q=80",
  },
  {
    name: "Raja Ampat",
    region: "West Papua",
    tours: 1,
    image: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?w=600&q=80",
  },
];

export default function Destinations() {
  return (
    <section id="destinations" className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-3">Top Destinations</h2>
            <p className="text-gray-500">Most popular places our travelers love</p>
          </div>
          <div className="hidden sm:flex gap-2">
            <button className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-full">
              All Destinations
            </button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest, i) => (
            <div
              key={i}
              className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-xl font-bold text-white mb-1">{dest.name}</h3>
                <div className="flex items-center gap-1 text-gray-300 text-sm">
                  <MapPin className="w-3.5 h-3.5" />
                  {dest.region}
                </div>
                <p className="text-primary-light text-sm font-medium mt-2">
                  {dest.tours} tours available
                </p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}