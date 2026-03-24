import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./components/HomePage";
import { AboutPage } from "./components/AboutPage";
import { RamessesPage } from "./components/RamessesPage";
import { UnifiedStatueViewer } from "./components/UnifiedStatueViewer";
import { Footer } from "./components/Footer";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Check if current page is a statue detail page
  const isStatueDetailPage = currentPage.startsWith("statue-");
  const statueId = isStatueDetailPage ? currentPage.replace("statue-", "") : "";

  return (
    <div className="min-h-screen">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      
      <main className="pt-16">
        {currentPage === "home" && <HomePage onNavigate={handleNavigate} />}
        {currentPage === "ramesses" && <RamessesPage onNavigate={handleNavigate} />}
        {(currentPage === "statues" || isStatueDetailPage) && (
          <UnifiedStatueViewer 
            initialStatueId={statueId || "ramesses-ii"} 
            onNavigate={handleNavigate} 
          />
        )}
        {currentPage === "about" && <AboutPage />}
      </main>

      <Footer />
    </div>
  );
}

