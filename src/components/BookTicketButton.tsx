import { Ticket } from "lucide-react";
import { Button } from "./ui/button";

interface BookTicketButtonProps {
  variant?: "default" | "hero";
}

export function BookTicketButton({ variant = "default" }: BookTicketButtonProps) {
  const handleBooking = () => {
    window.open("https://visit-gem.com/en/AdmissionTkt", "_blank");
  };

  const buttonClasses = variant === "hero" 
    ? "bg-[var(--egyptian-green)] hover:bg-[var(--egyptian-green)]/90 text-[var(--egyptian-cream)] px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300" 
    : "bg-[var(--egyptian-green)] hover:bg-[var(--egyptian-green)]/90 text-[var(--egyptian-cream)] px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105";

  return (
    <Button
      onClick={handleBooking}
      className={buttonClasses}
    >
      <Ticket className="mr-2 h-5 w-5" />
      Book a Ticket
    </Button>
  );
}





