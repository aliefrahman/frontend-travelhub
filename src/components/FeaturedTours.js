import { Clock, Users, Star, MapPin, ArrowRight } from "lucide-react";

const tours = [
  {
    id: 1,
    badge: "4D/3N",
    b2b: false,
    rating: 5.0,
    location: "Raja Ampat",
    title: "Raja Ampat Snorkeling & Island Hopping — 4 Days",
    duration: "4 days",
    maxPax: 8,
    price: 895,
    image: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?w=600&q=80",
  },
  {
    id: 2,
    badge: "Day Tour",
    b2b: false,
    rating: 4.9,
    location: "Ubud",
    title: "Ubud Art, Craft & Jungle Walk",
    duration: "1 day",
    maxPax: 10,
    price: 65,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80",
  },
  {
    id: 3,
    badge: "2D/1N",
    b2b: false,
    rating: 4.9,
    location: "Yogyakarta",
    title: "Borobudur & Prambanan Temples — 2-Day Yogyakarta",
    duration: "2 days",
    maxPax: 16,
    price: 245,
    image: "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=600&q=80",
  },
  {
    id: 4,
    badge: "5D/4N",
    b2b: true,
    rating: 4.9,
    location: "Ubud",
    title: "Bali Luxury Retreat: Private Villa, Spa & Cooking Class — 5 Days B2B Package",
    duration: "5 days",
    maxPax: 6,
    price: 1490,
    image: "https://images.unsplash.com/photo-1573790387438-4da905039392?w=600&q=80",
  },
  {
    id: 5,
    badge: "3D/2N",
    b2b: true,
    rating: 4.8,
    location: "Komodo Island",
    title: "Komodo Dragon & Pink Beach — 3 Days",
    duration: "3 days",
    maxPax: 10,
    price: 580,
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=600&q=80",
  },
  {
    id: 6,
    badge: "Day Tour",
    b2b: false,
    rating: 4.8,
    location: "Bali",
    title: "Bali Sunrise & Rice Terraces Day Tour",
    duration: "1 day",
    maxPax: 12,
    price: 89,
    image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=600&q=80",
  },
];

export default function FeaturedTours() {
  return (
    <section id="tours" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-3">Featured Tours</h2>
            <p className="text-gray-500">Handpicked experiences across Indonesia</p>
          </div>
          <a
            href="#"
            className="hidden sm:flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            View All <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tours.map((tour) => (
            <div
              key={tour.id}
              className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />

                {/* Badges */}
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="bg-white/90 backdrop-blur-sm text-dark text-xs font-semibold px-3 py-1 rounded-full">
                    {tour.badge}
                  </span>
                  {tour.b2b && (
                    <span className="bg-secondary/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      B2B
                    </span>
                  )}
                </div>

                {/* Rating */}
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                  <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs font-semibold text-dark">{tour.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-1 text-primary text-xs font-medium mb-2">
                  <MapPin className="w-3.5 h-3.5" />
                  {tour.location}
                </div>
                <h3 className="font-bold text-dark text-base leading-snug mb-4 line-clamp-2 group-hover:text-primary transition-colors">
                  {tour.title}
                </h3>

                <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {tour.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" />
                    Max {tour.maxPax}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <span className="text-xs text-gray-400">From</span>
                    <p className="text-xl font-bold text-primary">
                      ${tour.price.toLocaleString()}
                    </p>
                  </div>
                  <button className="bg-primary/10 text-primary px-4 py-2 rounded-xl text-sm font-semibold hover:bg-primary hover:text-white transition-all">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All */}
        <div className="sm:hidden text-center mt-8">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary font-semibold"
          >
            View All Tours <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}