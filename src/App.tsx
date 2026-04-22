import { useState } from "react";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import AnimeGrid from "./components/AnimeGrid";
import { animeData } from "./data";
import { Anime } from "./types";

function App() {
  const [selectedAnime, setSelectedAnime] = useState<Anime>(animeData[0]);

  const newReleaseList = animeData.slice(1);

  return (
    <div style={styles.app}>
      <Header />
      <main style={styles.main}>
        <HeroBanner anime={selectedAnime} />
        <AnimeGrid
          animeList={newReleaseList}
          selectedId={selectedAnime.id}
          onSelect={setSelectedAnime}
        />
      </main>
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
