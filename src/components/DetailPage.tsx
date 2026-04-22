import { Anime } from "../types";

interface DetailPageProps {
  anime: Anime;
  allAnime: Anime[];
  onSelectAnime: (anime: Anime) => void;
  onBack: () => void;
}

const DetailPage = ({ anime, allAnime, onSelectAnime, onBack }: DetailPageProps) => {
  const popularAnime = allAnime.filter((a) => a.id !== anime.id);

  const handleSelectPopular = (selected: Anime) => {
    onSelectAnime(selected);
  };

  return (
    <div style={styles.page}>
      <div style={styles.layout}>
        <div style={styles.left}>
          <button style={styles.backBtn} onClick={onBack}>
            ← Back
          </button>

          <h2 style={styles.title}>
            {anime.movieName} - Episode {anime.episode}
          </h2>

          <div style={styles.videoPlayer}>
            <div style={styles.playBtn}>▶</div>
          </div>

          <div style={styles.infoRow}>
            <img src={anime.image} alt={anime.movieName} style={styles.poster} />

            <div style={styles.meta}>
              <div style={styles.metaItem}>
                <span style={styles.metaLabel}>Type :</span>
                <span style={styles.metaValue}>{anime.type}</span>
              </div>
              <div style={styles.metaItem}>
                <span style={styles.metaLabel}>Status :</span>
                <span style={styles.metaValue}>{anime.status}</span>
              </div>
              <div style={styles.metaItem}>
                <span style={styles.metaLabel}>Studios :</span>
                <span style={styles.metaValue}>{anime.studios}</span>
              </div>
              <div style={styles.metaItem}>
                <span style={styles.metaLabel}>Duration :</span>
                <span style={styles.metaValue}>{anime.duration}</span>
              </div>
              <div style={styles.metaItem}>
                <span style={styles.metaLabel}>Genres :</span>
                <span style={styles.metaValue}>{anime.genres}</span>
              </div>
            </div>
          </div>

          <div style={styles.synopsisSection}>
            <h3 style={styles.synopsisTitle}>Sypnosis :</h3>
            <p style={styles.synopsisText}>{anime.description}</p>
          </div>
        </div>

        <div style={styles.right}>
          <h3 style={styles.popularTitle}>Popular Anime</h3>
          <div style={styles.popularGrid}>
            {popularAnime.map((a) => (
              <div
                key={a.id}
                style={styles.popularCard}
                onClick={() => handleSelectPopular(a)}
              >
                <img src={a.image} alt={a.movieName} style={styles.popularImg} />
                <div style={styles.popularOverlay}>
                  <span style={styles.popularName}>{a.movieName}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  page: {
    padding: "24px 32px",
    maxWidth: "1100px",
    margin: "0 auto",
  },
  layout: {
    display: "flex",
    gap: "32px",
    alignItems: "flex-start",
  },
  left: {
    flex: "1 1 0",
    minWidth: 0,
  },
  backBtn: {
    background: "none",
    border: "none",
    color: "#aaa",
    fontSize: "13px",
    cursor: "pointer",
    marginBottom: "12px",
    padding: 0,
  },
  title: {
    fontSize: "18px",
    fontWeight: "700",
    color: "#fff",
    marginBottom: "14px",
  },
  videoPlayer: {
    width: "100%",
    height: "260px",
    background: "#000",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "16px",
  },
  playBtn: {
    width: "52px",
    height: "52px",
    background: "rgba(255,255,255,0.15)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
    color: "#fff",
    cursor: "pointer",
  },
  infoRow: {
    display: "flex",
    gap: "16px",
    marginBottom: "20px",
  },
  poster: {
    width: "110px",
    height: "150px",
    objectFit: "cover",
    borderRadius: "6px",
    flexShrink: 0,
  },
  meta: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    justifyContent: "center",
  },
  metaItem: {
    display: "flex",
    gap: "8px",
    fontSize: "13px",
  },
  metaLabel: {
    color: "#fff",
    fontWeight: "600",
    minWidth: "70px",
  },
  metaValue: {
    color: "#aaa",
  },
  synopsisSection: {
    marginTop: "4px",
  },
  synopsisTitle: {
    fontSize: "14px",
    fontWeight: "700",
    color: "#fff",
    marginBottom: "8px",
  },
  synopsisText: {
    fontSize: "12px",
    color: "#aaa",
    lineHeight: 1.7,
  },
  right: {
    width: "220px",
    flexShrink: 0,
  },
  popularTitle: {
    fontSize: "16px",
    fontWeight: "700",
    color: "#fff",
    marginBottom: "14px",
  },
  popularGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "10px",
  },
  popularCard: {
    position: "relative",
    borderRadius: "8px",
    overflow: "hidden",
    cursor: "pointer",
    height: "100px",
  },
  popularImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  popularOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    background: "linear-gradient(transparent, rgba(0,0,0,0.75))",
    padding: "6px 6px 4px",
  },
  popularName: {
    fontSize: "9px",
    color: "#fff",
    fontWeight: "600",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  },
};

export default DetailPage;
