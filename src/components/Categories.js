const categories = [
  { emoji: "🧗", name: "Adventure", count: 3 },
  { emoji: "🏖️", name: "Beach & Islands", count: 5 },
  { emoji: "🛕", name: "Cultural & Heritage", count: 4 },
  { emoji: "🤿", name: "Diving & Snorkeling", count: 3 },
  { emoji: "🦎", name: "Nature & Wildlife", count: 2 },
  { emoji: "🥾", name: "Trekking & Hiking", count: 4 },
];

export default function Categories() {
  return (
    <section className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-3">
            Browse by Category
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Find the perfect adventure that matches your travel style
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat, i) => (
            <button
              key={i}
              className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 text-center"
            >
              <span className="text-4xl block mb-3 group-hover:scale-110 transition-transform">
                {cat.emoji}
              </span>
              <h3 className="font-semibold text-dark text-sm mb-1">{cat.name}</h3>
              <p className="text-xs text-gray-400">{cat.count} tours</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}