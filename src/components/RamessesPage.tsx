interface RamessesPageProps {
  onNavigate: (page: string) => void;
}

export function RamessesPage({ onNavigate }: RamessesPageProps) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-2xl px-4">
        <h1 className="text-4xl mb-6 font-kleopatra tracking-wider text-[var(--egyptian-green)]">
          Ramesses II
        </h1>
        <p className="text-lg mb-8 text-muted-foreground font-goudy">
          This page is coming soon. Explore the legacy of one of Egypt's most powerful pharaohs.
        </p>
        <button
          onClick={() => onNavigate("home")}
          className="bg-[var(--egyptian-gold)] hover:bg-[var(--egyptian-gold)]/90 text-[var(--egyptian-green)] px-6 py-3 rounded-md font-aniron"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
