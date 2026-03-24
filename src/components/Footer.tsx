export function Footer() {
  return (
    <footer className="bg-[var(--egyptian-green)] border-t border-[var(--egyptian-gold)]/30 py-12 text-[var(--egyptian-cream)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="mb-4 text-[var(--egyptian-gold)] font-aniron tracking-wide">Egyptian Grand Museum</h4>
            <p className="text-[var(--egyptian-cream)]/80 text-sm font-goudy">
              Preserving and celebrating Egypt's magnificent heritage for future generations.
            </p>
          </div>
          
          <div>
            <h4 className="mb-4 text-[var(--egyptian-gold)] font-aniron tracking-wide">Visit Us</h4>
            <p className="text-[var(--egyptian-cream)]/80 text-sm font-goudy">
              Near the Pyramids of Giza<br />
              Cairo, Egypt<br />
              Daily: 9:00 AM - 7:00 PM
            </p>
          </div>
          
          <div>
            <h4 className="mb-4 text-[var(--egyptian-gold)] font-aniron tracking-wide">Connect</h4>
            <p className="text-[var(--egyptian-cream)]/80 text-sm font-goudy">
              Email: info@egyptianmuseum.eg<br />
              Phone: +20 2 1234 5678<br />
              Follow us on social media
            </p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-[var(--egyptian-gold)]/30 text-center text-[var(--egyptian-cream)]/80 text-sm font-goudy">
          <p>&copy; 2024 Egyptian Grand Museum. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
