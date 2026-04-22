import { Anime } from "../types";

interface AnimeCardProps {
  anime: Anime;
  isActive: boolean;
  onClick: (anime: Anime) => void;
}

const AnimeCard = ({ anime, isActive, onClick }: AnimeCardProps) => {
  return (
    <div
      style={{
        ...styles.card,
        ...(isActive ? styles.cardActive : {}),
      }}
      onClick={() => onClick(anime)}
    >
      <div style={styles.cardImgWrapper}>
        <img src={anime.image} alt={anime.movieName} style={styles.cardImg} />
      </div>
      <div style={styles.cardEpisode}>Episode {anime.episode}</div>
      <div style={styles.cardName}>{anime.movieName}</div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  card: {
    flexShrink: 0,
    width: "150px",
    cursor: "pointer",
    borderRadius: "8px",
    overflow: "hidden",
    transition: "transform 0.2s",
  },
  cardActive: {
    outline: "2px solid #e74c3c",
    transform: "scale(1.04)",
  },
  cardImgWrapper: {
    width: "150px",
    height: "200px",
    overflow: "hidden",
    background: "#1e2230",
    borderRadius: "8px 8px 0 0",
  },
  cardImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  cardEpisode: {
    fontSize: "11px",
    color: "#aaa",
    marginTop: "7px",
    paddingLeft: "4px",
  },
  cardName: {
    fontSize: "12px",
    fontWeight: "600",
    color: "#fff",
    marginTop: "3px",
    paddingLeft: "4px",
    lineHeight: 1.3,
    paddingBottom: "6px",
    textAlign: "center",
  },
};

export default AnimeCard;
