import { Anime } from "../types";

interface HeroBannerProps {
  anime: Anime;
}

const HeroBanner = ({ anime }: HeroBannerProps) => {
  return (
    <section style={styles.bannerSection}>
      <div style={styles.exploreLabel}>Explore</div>
      <div style={styles.exploreSubtitle}>What are you gonna watch today ?</div>
      <div
        style={{
          ...styles.bannerCard,
          backgroundImage: `url(${anime.image})`,
        }}
      >
        <div style={styles.bannerOverlay} />
        <div style={styles.bannerContent}>
          <h2 style={styles.bannerTitle}>{anime.movieName}</h2>
          <p style={styles.bannerDesc}>{anime.description}</p>
        </div>
      </div>
    </section>
  );
};

const styles: Record<string, React.CSSProperties> = {
  bannerSection: {
    marginBottom: "32px",
  },
  exploreLabel: {
    fontSize: "22px",
    fontWeight: "700",
    marginBottom: "4px",
    color: "#fff",
  },
  exploreSubtitle: {
    fontSize: "13px",
    color: "#888",
    marginBottom: "16px",
  },
  bannerCard: {
    position: "relative",
    width: "100%",
    height: "340px",
    borderRadius: "12px",
    backgroundSize: "cover",
    backgroundPosition: "center top",
    overflow: "hidden",
  },
  bannerOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(to right, rgba(0,0,0,0.80) 30%, rgba(0,0,0,0.1) 100%)",
  },
  bannerContent: {
    position: "absolute",
    bottom: "28px",
    left: "28px",
    maxWidth: "380px",
    zIndex: 1,
  },
  bannerTitle: {
    fontSize: "24px",
    fontWeight: "700",
    marginBottom: "10px",
    lineHeight: 1.2,
    color: "#fff",
  },
  bannerDesc: {
    fontSize: "12px",
    color: "#ccc",
    lineHeight: 1.6,
    display: "-webkit-box",
    WebkitLineClamp: 4,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  },
};

export default HeroBanner;
