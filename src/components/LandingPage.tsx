import { Anime } from "../types";

interface LandingPageProps {
  animeData: Anime[];
  onEnter: () => void;
}

const LandingPage = ({ animeData, onEnter }: LandingPageProps) => {
  const [banner, card1, card2, card3] = animeData;

  return (
    <div style={styles.page}>
      <div style={styles.blob1} />
      <div style={styles.blob2} />

      <div style={styles.logoBadge}>Anonime</div>

      <div style={styles.heroText}>
        <h1 style={styles.heading}>
          Anime Movie<br />Streaming Web<br />App
        </h1>
        <button style={styles.enterBtn} onClick={onEnter}>
          Watch Now →
        </button>
      </div>

      <div style={styles.mockupsWrapper}>

        <div style={{ ...styles.mockup, ...styles.mockupMain }}>
          <div style={styles.mNavbar}>
            <span style={styles.mLogo}>Anonime</span>
            <div style={styles.mNavLinks}>
              <span style={styles.mNavLink}>Home</span>
              <span style={styles.mNavLink}>List anime</span>
            </div>
            <div style={styles.mSearch}>Search anime or movie</div>
          </div>
          {/* Banner */}
          <div style={{ ...styles.mBanner, backgroundImage: `url(${banner?.image})` }}>
            <div style={styles.mBannerOverlay} />
            <div style={styles.mBannerContent}>
              <div style={styles.mExplore}>Explore</div>
              <div style={styles.mSubtitle}>What are you gonna watch today ?</div>
              <div style={styles.mBannerTitle}>{banner?.movieName}</div>
              <div style={styles.mBannerDesc}>{banner?.description?.slice(0, 80)}...</div>
            </div>
          </div>
          <div style={styles.mRelease}>
            <div style={styles.mReleaseTitle}>New Release</div>
            <div style={styles.mCards}>
              {animeData.slice(1, 7).map((a) => (
                <div key={a.id} style={styles.mCard}>
                  <img src={a.image} alt={a.movieName} style={styles.mCardImg} />
                  <div style={styles.mCardEp}>Episode {a.episode}</div>
                  <div style={styles.mCardName}>{a.movieName}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ ...styles.mockup, ...styles.mockupLeft }}>
          <div style={styles.smNavbar}>
            <span style={styles.smLogo}>Anonime</span>
            <span style={styles.smMenu}>≡</span>
          </div>
          <div style={styles.smTitle}>{card1?.movieName} - Episode {card1?.episode}</div>
          <div style={styles.smVideo}>
            <div style={styles.smPlayBtn}>▶</div>
          </div>
          <div style={styles.smInfo}>
            <img src={card1?.image} alt="" style={styles.smPoster} />
            <div style={styles.smMeta}>
              <div style={styles.smMetaRow}><b>Type :</b></div>
              <div style={styles.smMetaRow}><span style={{ color: "#aaa" }}>{card1?.type}</span></div>
              <div style={styles.smMetaRow}><b>Status :</b></div>
              <div style={styles.smMetaRow}><span style={{ color: "#aaa" }}>{card1?.status}</span></div>
            </div>
          </div>
        </div>

        <div style={{ ...styles.mockup, ...styles.mockupRight }}>
          <div style={styles.smNavbar}>
            <span style={styles.smLogo}>Anonime</span>
            <span style={styles.smMenu}>≡</span>
          </div>
          <div style={styles.trExplore}>Explore</div>
          <div style={styles.trSubtitle}>What are you gonna watch today ?</div>
          <div style={styles.trSearch}>Search anime or movie</div>
          <div style={{ ...styles.trBanner, backgroundImage: `url(${card2?.image})` }}>
            <div style={styles.mBannerOverlay} />
            <div style={styles.trBannerName}>{card2?.movieName}</div>
          </div>
          <div style={styles.mReleaseTitle}>New Realease</div>
          <div style={styles.trCards}>
            {animeData.slice(1, 4).map((a) => (
              <div key={a.id} style={styles.trCard}>
                <img src={a.image} alt={a.movieName} style={styles.trCardImg} />
                <div style={styles.trCardName}>{a.movieName}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ ...styles.mockup, ...styles.mockupDetail }}>
          <div style={styles.detailTitle}>{card3?.movieName} - Episode {card3?.episode}</div>
          <div style={styles.detailMeta}>
            <img src={card3?.image} alt="" style={styles.detailPoster} />
            <div>
              <div style={styles.detailMetaRow}><b style={{ color: "#fff" }}>Type :</b> <span style={{ color: "#aaa" }}>{card3?.type}</span></div>
              <div style={styles.detailMetaRow}><b style={{ color: "#fff" }}>Status :</b> <span style={{ color: "#aaa" }}>{card3?.status}</span></div>
              <div style={styles.detailMetaRow}><b style={{ color: "#fff" }}>Genres :</b> <span style={{ color: "#aaa" }}>{card3?.genres}</span></div>
            </div>
          </div>
          <div style={styles.detailSynLabel}>Sypnosis :</div>
          <div style={styles.detailSynText}>{card3?.description?.slice(0, 180)}...</div>
        </div>

      </div>

      <div style={styles.dot1} />
      <div style={styles.dot2} />
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0a0e1a 0%, #0f1526 50%, #0a1020 100%)",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    fontFamily: "'Segoe UI', sans-serif",
    color: "#fff",
  },
  blob1: {
    position: "absolute",
    width: "500px",
    height: "500px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(30,80,160,0.25) 0%, transparent 70%)",
    top: "-100px",
    right: "200px",
    pointerEvents: "none",
  },
  blob2: {
    position: "absolute",
    width: "300px",
    height: "300px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(20,60,130,0.2) 0%, transparent 70%)",
    bottom: "0px",
    left: "200px",
    pointerEvents: "none",
  },
  logoBadge: {
    position: "absolute",
    top: "32px",
    left: "40px",
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: "8px",
    padding: "8px 18px",
    fontWeight: "700",
    fontSize: "15px",
    zIndex: 10,
  },
  heroText: {
    position: "absolute",
    left: "40px",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 10,
  },
  heading: {
    fontSize: "42px",
    fontWeight: "800",
    lineHeight: 1.2,
    marginBottom: "28px",
    color: "#fff",
  },
  enterBtn: {
    background: "rgba(255,255,255,0.1)",
    border: "1px solid rgba(255,255,255,0.25)",
    color: "#fff",
    padding: "10px 24px",
    borderRadius: "24px",
    fontSize: "14px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "background 0.2s",
  },
  mockupsWrapper: {
    position: "absolute",
    right: "0",
    top: "0",
    width: "75%",
    height: "100%",
    pointerEvents: "none",
  },

  mockup: {
    position: "absolute",
    background: "#0f1525",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.08)",
    overflow: "hidden",
    boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
    color: "#fff",
  },

  mockupMain: {
    width: "520px",
    top: "50%",
    left: "50%",
    transform: "translate(-20%, -50%)",
    zIndex: 5,
  },
  mNavbar: {
    display: "flex",
    alignItems: "center",
    padding: "8px 12px",
    borderBottom: "1px solid #1e2230",
    gap: "12px",
    background: "#0f1525",
  },
  mLogo: { fontWeight: "700", fontSize: "11px", marginRight: "8px" },
  mNavLinks: { display: "flex", gap: "10px", flex: 1 },
  mNavLink: { color: "#aaa", fontSize: "9px" },
  mSearch: {
    background: "#1e2230",
    borderRadius: "10px",
    padding: "3px 10px",
    fontSize: "8px",
    color: "#555",
  },
  mBanner: {
    position: "relative",
    height: "130px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  mBannerOverlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to right, rgba(0,0,0,0.85) 30%, rgba(0,0,0,0.1))",
  },
  mBannerContent: {
    position: "absolute",
    bottom: "10px",
    left: "12px",
    zIndex: 1,
    maxWidth: "200px",
  },
  mExplore: { fontSize: "10px", fontWeight: "700", marginBottom: "1px" },
  mSubtitle: { fontSize: "7px", color: "#888", marginBottom: "6px" },
  mBannerTitle: { fontSize: "11px", fontWeight: "700", marginBottom: "3px" },
  mBannerDesc: { fontSize: "6px", color: "#ccc", lineHeight: 1.4 },
  mRelease: { padding: "8px 12px" },
  mReleaseTitle: { fontSize: "10px", fontWeight: "700", marginBottom: "8px" },
  mCards: { display: "flex", gap: "6px" },
  mCard: { flex: 1, minWidth: 0 },
  mCardImg: {
    width: "100%",
    height: "60px",
    objectFit: "cover",
    borderRadius: "4px",
    display: "block",
  },
  mCardEp: { fontSize: "6px", color: "#888", marginTop: "3px" },
  mCardName: {
    fontSize: "6px",
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 1.2,
    marginTop: "2px",
    overflow: "hidden",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
  },

  mockupLeft: {
    width: "160px",
    top: "55%",
    left: "2%",
    transform: "translateY(-50%)",
    zIndex: 4,
    padding: "10px",
  },
  smNavbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "8px",
  },
  smLogo: { fontWeight: "700", fontSize: "10px" },
  smMenu: { fontSize: "14px", color: "#aaa" },
  smTitle: { fontSize: "8px", fontWeight: "600", marginBottom: "6px", color: "#fff" },
  smVideo: {
    height: "70px",
    background: "#000",
    borderRadius: "6px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "8px",
  },
  smPlayBtn: {
    width: "24px",
    height: "24px",
    background: "rgba(255,255,255,0.15)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "10px",
  },
  smInfo: { display: "flex", gap: "8px" },
  smPoster: { width: "45px", height: "60px", objectFit: "cover", borderRadius: "4px" },
  smMeta: { fontSize: "7px", display: "flex", flexDirection: "column", gap: "3px" },
  smMetaRow: { color: "#fff" },

  mockupRight: {
    width: "200px",
    top: "55%",
    right: "2%",
    transform: "translateY(-40%)",
    zIndex: 4,
    padding: "10px",
  },
  trExplore: { fontSize: "10px", fontWeight: "700", marginBottom: "2px" },
  trSubtitle: { fontSize: "7px", color: "#888", marginBottom: "6px" },
  trSearch: {
    background: "#1e2230",
    borderRadius: "8px",
    padding: "4px 8px",
    fontSize: "7px",
    color: "#555",
    marginBottom: "8px",
  },
  trBanner: {
    position: "relative",
    height: "70px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "6px",
    overflow: "hidden",
    marginBottom: "8px",
  },
  trBannerName: {
    position: "absolute",
    bottom: "6px",
    left: "8px",
    fontSize: "8px",
    fontWeight: "700",
    zIndex: 1,
  },
  trCards: { display: "flex", gap: "5px" },
  trCard: { flex: 1 },
  trCardImg: {
    width: "100%",
    height: "45px",
    objectFit: "cover",
    borderRadius: "4px",
    display: "block",
  },
  trCardName: {
    fontSize: "6px",
    textAlign: "center",
    marginTop: "2px",
    color: "#ccc",
    overflow: "hidden",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
  },

  mockupDetail: {
    width: "300px",
    top: "4%",
    right: "8%",
    zIndex: 6,
    padding: "12px",
  },
  detailTitle: { fontSize: "9px", fontWeight: "700", marginBottom: "8px" },
  detailMeta: { display: "flex", gap: "8px", marginBottom: "8px" },
  detailPoster: {
    width: "50px",
    height: "65px",
    objectFit: "cover",
    borderRadius: "4px",
    flexShrink: 0,
  },
  detailMetaRow: { fontSize: "7px", marginBottom: "4px" },
  detailSynLabel: { fontSize: "8px", fontWeight: "700", marginBottom: "4px" },
  detailSynText: { fontSize: "7px", color: "#aaa", lineHeight: 1.5 },

  dot1: {
    position: "absolute",
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    background: "#3a6fd8",
    top: "42%",
    left: "250px",
  },
  dot2: {
    position: "absolute",
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    background: "#3a6fd8",
    top: "62%",
    left: "80px",
  },
};

export default LandingPage;
