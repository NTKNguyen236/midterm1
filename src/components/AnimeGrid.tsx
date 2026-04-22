import { Anime } from "../types";
import AnimeCard from "./AnimeCard";

interface AnimeGridProps {
  animeList: Anime[];
  selectedId: string;
  onSelect: (anime: Anime) => void;
}

const AnimeGrid = ({ animeList, selectedId, onSelect }: AnimeGridProps) => {
  return (
    <section style={styles.section}>
      <h2 style={styles.sectionTitle}>New Release</h2>
      <div style={styles.cardGrid}>
        {animeList.map((anime) => (
          <AnimeCard
            key={anime.id}
            anime={anime}
            isActive={anime.id === selectedId}
            onClick={onSelect}
          />
        ))}
      </div>
    </section>
  );
};

const styles: Record<string, React.CSSProperties> = {
  section: {
    marginTop: "8px",
  },
  sectionTitle: {
    fontSize: "20px",
    fontWeight: "700",
    marginBottom: "16px",
    color: "#fff",
  },
  cardGrid: {
    display: "flex",
    gap: "14px",
    overflowX: "auto",
    paddingBottom: "8px",
  },
};

export default AnimeGrid;
