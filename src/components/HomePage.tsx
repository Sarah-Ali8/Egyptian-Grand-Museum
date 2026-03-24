import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { BookTicketButton } from "./BookTicketButton";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const highlights = [
    {
      title: "Tutankhamun Collection",
      description: "Over 5,000 artifacts from the tomb of the legendary pharaoh",
      image: "https://images.unsplash.com/photo-1566214358736-df5a0048a9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dXRhbmtoYW11biUyMG1hc2slMjBnb2xkfGVufDF8fHx8MTc1OTc1NjE2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Ancient Statues",
      description: "Monumental statues and sculptures from various dynasties",
      image: "https://images.unsplash.com/photo-1728739831383-d8a2cdc283cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwZWd5cHRpYW4lMjBzdGF0dWV8ZW58MXx8fHwxNzU5NzU2MTY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Royal Artifacts",
      description: "Treasures and daily items from ancient Egyptian royalty",
      image: "https://images.unsplash.com/photo-1695902263765-9636769b5833?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwZWd5cHQlMjBhcnRpZmFjdHN8ZW58MXx8fHwxNzU5NzU2MTY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1637356216542-0d0a4e93f992?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZ3lwdGlhbiUyMG11c2V1bSUyMHB5cmFtaWRzfGVufDF8fHx8MTc1OTc1NjE2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Egyptian Museum"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl mb-6 font-kleopatra tracking-wider">Egyptian Grand Museum</h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 font-goudy">
            Discover the wonders of ancient Egypt in the world's largest archaeological museum
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <BookTicketButton variant="hero" />
            <Button
              onClick={() => onNavigate("statues")}
              className="bg-[var(--egyptian-gold)] hover:bg-[var(--egyptian-gold)]/90 text-[var(--egyptian-green)] px-8 py-6"
            >
              Explore Collections
            </Button>
            <Button
              onClick={() => onNavigate("about")}
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white/30 px-8 py-6 backdrop-blur"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Visit Information */}
      <section className="py-12 bg-[var(--egyptian-peach)]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[var(--egyptian-gold)] flex items-center justify-center flex-shrink-0">
                <Clock className="text-[var(--egyptian-green)]" size={24} />
              </div>
              <div>
                <h3 className="mb-2 font-aniron tracking-wide">Opening Hours</h3>
                <p className="text-muted-foreground font-goudy">
                  Daily: 9:00 AM - 7:00 PM<br />
                  Friday: 9:00 AM - 9:00 PM
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[var(--egyptian-gold)] flex items-center justify-center flex-shrink-0">
                <MapPin className="text-[var(--egyptian-green)]" size={24} />
              </div>
              <div>
                <h3 className="mb-2 font-aniron tracking-wide">Location</h3>
                <p className="text-muted-foreground font-goudy">
                  Near the Pyramids of Giza<br />
                  Cairo, Egypt
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[var(--egyptian-gold)] flex items-center justify-center flex-shrink-0">
                <Calendar className="text-[var(--egyptian-green)]" size={24} />
              </div>
              <div>
                <h3 className="mb-2 font-aniron tracking-wide">Book Your Visit</h3>
                <p className="text-muted-foreground font-goudy">
                  Online booking available<br />
                  Reserve your tickets today
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Artifact Banner */}
      <section className="py-12 bg-gradient-to-r from-[var(--egyptian-green)] to-[var(--egyptian-green)]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left text-white">
              <span className="inline-block px-3 py-1 bg-[var(--egyptian-gold)] text-[var(--egyptian-green)] rounded-full text-sm font-aniron mb-2">
                Featured
              </span>
              <h3 className="text-3xl mb-2 font-aniron tracking-wide">The Colossus of Ramesses II</h3>
              <p className="text-white/90 font-goudy">
                Experience our iconic 11-meter statue in immersive 3D
              </p>
            </div>
            <Button
              onClick={() => onNavigate("ramesses")}
              className="bg-[var(--egyptian-gold)] hover:bg-[var(--egyptian-gold)]/90 text-[var(--egyptian-green)] px-8 py-6 font-aniron"
            >
              Explore Now
            </Button>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 font-aniron tracking-wide">Museum Highlights</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-goudy">
              Experience the most extraordinary collection of ancient Egyptian artifacts ever assembled
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer" onClick={() => onNavigate("statues")}>
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={highlight.image}
                    alt={highlight.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="mb-2 font-aniron tracking-wide">{highlight.title}</h3>
                  <p className="text-muted-foreground font-goudy">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Viewer CTA */}
      <section className="py-16 bg-gradient-to-br from-[var(--egyptian-gold)]/20 to-[var(--egyptian-peach)]/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4 font-kleopatra text-[var(--egyptian-green)] tracking-wider">
            Interactive 3D Experience
          </h2>
          <p className="mb-8 text-muted-foreground max-w-2xl mx-auto font-goudy">
            Explore our statues in stunning 3D, switch between artifacts seamlessly, and chat with AI to discover fascinating details about ancient Egypt
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => onNavigate("viewer")}
              className="bg-[var(--egyptian-green)] hover:bg-[var(--egyptian-green)]/90 text-white px-8 py-6 font-aniron"
            >
              Launch Interactive Viewer
            </Button>
            <Button
              onClick={() => onNavigate("statues")}
              variant="outline"
              className="border-[var(--egyptian-green)] text-[var(--egyptian-green)] hover:bg-[var(--egyptian-green)]/10 px-8 py-6 font-aniron"
            >
              Browse Collection
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6 font-aniron tracking-wide">A Monument to History</h2>
              <p className="mb-4 text-muted-foreground font-goudy">
                The Egyptian Grand Museum stands as one of the world's most ambitious cultural projects, 
                housing over 100,000 artifacts spanning 5,000 years of Egyptian civilization.
              </p>
              <p className="mb-6 text-muted-foreground font-goudy">
                Located near the Great Pyramids of Giza, this architectural marvel brings together 
                treasures from across Egypt, including the complete Tutankhamun collection displayed 
                together for the first time.
              </p>
              <Button
                onClick={() => onNavigate("about")}
                className="bg-[var(--egyptian-gold)] hover:bg-[var(--egyptian-gold)]/90 text-[var(--egyptian-green)]"
              >
                Discover Our Story
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1757240758722-52aa9986f5da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGhpbnglMjBlZ3lwdHxlbnwxfHx8fDE3NTk3NTYxNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Sphinx"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}