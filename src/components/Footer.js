import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1 flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="flex items-center gap-2 mb-4 justify-center sm:justify-start">
              <div className="w-9 h-9 bg-linear-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">IT</span>
              </div>
              <span className="text-xl font-bold text-white">
                Indonesia<span className="text-primary">Tour</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Your gateway to unforgettable Indonesian adventures. Discover the beauty of the
              archipelago with our curated tours.
            </p>
            <div className="flex gap-3 justify-center sm:justify-start">
              {["facebook", "instagram", "twitter", "youtube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <span className="text-xs font-bold text-white uppercase">
                    {social[0]}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              {["Home", "Tours", "Destinations", "About Us", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="text-center sm:text-left">
            <h3 className="text-white font-semibold mb-4">Categories</h3>
            <ul className="space-y-2.5 text-sm">
              {["Adventure", "Beach & Islands", "Cultural & Heritage", "Diving & Snorkeling", "Trekking"].map(
                (cat) => (
                  <li key={cat}>
                    <a href="#" className="hover:text-primary transition-colors">
                      {cat}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center sm:text-left">
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 justify-center sm:justify-start">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                Jl. Sudirman No. 123, Jakarta Pusat, Indonesia
              </li>
              <li className="flex items-center gap-3 justify-center sm:justify-start">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                +62 21 1234 5678
              </li>
              <li className="flex items-center gap-3 justify-center sm:justify-start">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                info@indonesiatour.com
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p>© 2026 IndonesiaTour. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}