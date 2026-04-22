import { useState } from "react";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import AnimeGrid from "./components/AnimeGrid";
import DetailPage from "./components/DetailPage";
import LandingPage from "./components/LandingPage";
import { animeData } from "./data";
import { Anime, Page } from "./types";

function App() {
  const [selectedAnime, setSelectedAnime] = useState<Anime>(animeData[0]);
  const [page, setPage] = useState<Page>("landing");
  const [detailAnime, setDetailAnime] = useState<Anime | null>(null);

  const newReleaseList = animeData.slice(1);

  const handleCardClick = (anime: Anime) => {
    setDetailAnime(anime);
    setPage("detail");
  };

  const handlePopularClick = (anime: Anime) => {
    setDetailAnime(anime);
  };

  const handleBack = () => {
    setPage("home");
    setDetailAnime(null);
  };

  if (page === "landing") {
    return (
      <LandingPage
        animeData={animeData}
        onEnter={() => setPage("home")}
      />
    );
  }

  return (
    <div style={styles.app}>
      <Header />
      {page === "home" ? (
        <main style={styles.main}>
          <HeroBanner anime={selectedAnime} />
          <AnimeGrid
            animeList={newReleaseList}
            selectedId={selectedAnime.id}
            onSelect={(anime) => {
              setSelectedAnime(anime);
              handleCardClick(anime);
            }}
          />
        </main>
      ) : (
        <DetailPage
          anime={detailAnime!}
          allAnime={animeData}
          onSelectAnime={handlePopularClick}
          onBack={handleBack}
        />
      )}
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  app: {
    minHeight: "100vh",
    background: "#0f1117",
    color: "#fff",
    fontFamily: "'Segoe UI', sans-serif",
  },
  main: {
    padding: "24px 32px",
    maxWidth: "1100px",
    margin: "0 auto",
  },
};

export default App;
