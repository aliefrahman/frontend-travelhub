"use client";

import { Search, MapPin, Calendar } from "lucide-react";
import { useState } from "react";

export default function Hero() {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { id: "all", label: "All Types" },
    { id: "day", label: "Day Tour" },
    { id: "multi", label: "Multiday" },
  ];

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1920&q=80')",
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/70" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <p className="text-primary-light text-sm font-semibold tracking-widest uppercase mb-4 animate-fade-in">
          Explore The Archipelago
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 animate-slide-up">
          Discover the Magic of{" "}
          <span className="bg-linear-to-r from-primary-light to-accent bg-clip-text text-transparent">
            Indonesia
          </span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in">
          From the terraced rice fields of Bali to the remote reefs of Raja Ampat — unforgettable day
          tours and multiday adventures await.
        </p>

        {/* Search Box */}
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-2 max-w-2xl mx-auto animate-slide-up">
          {/* Tabs */}
          <div className="flex gap-1 mb-3 px-2 pt-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-primary text-white shadow-md"
                    : "text-gray-500 hover:text-primary hover:bg-gray-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="flex items-center gap-2 p-2">
            <div className="flex-1 flex items-center gap-2 bg-gray-50 rounded-xl px-4 py-3">
              <MapPin className="w-5 h-5 text-primary shrink-0" />
              <input
                type="text"
                placeholder="Where do you want to go?"
                className="w-full bg-transparent outline-none text-sm text-dark placeholder:text-gray-400"
              />
            </div>
            <div className="hidden sm:flex items-center gap-2 bg-gray-50 rounded-xl px-4 py-3">
              <Calendar className="w-5 h-5 text-primary shrink-0" />
              <input
                type="text"
                placeholder="Date"
                className="w-28 bg-transparent outline-none text-sm text-dark placeholder:text-gray-400"
              />
            </div>
            <button className="bg-linear-to-r from-primary to-primary-dark text-white px-6 py-3 rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-primary/30 transition-all flex items-center gap-2">
              <Search className="w-4 h-4" />
              <span className="hidden sm:inline">Search</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
}