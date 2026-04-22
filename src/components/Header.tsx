const Header = () => {
  return (
    <nav style={styles.navbar}>
      <span style={styles.logo}>Anonime</span>
      <div style={styles.navLinks}>
        <a href="#" style={styles.navLink}>Home</a>
        <a href="#" style={styles.navLink}>List anime</a>
      </div>
      <div style={styles.searchBox}>
        <span style={styles.searchPlaceholder}>Search anime or movie</span>
      </div>
    </nav>
  );
};

const styles: Record<string, React.CSSProperties> = {
  navbar: {
    display: "flex",
    alignItems: "center",
    padding: "14px 32px",
    background: "#0f1117",
    borderBottom: "1px solid #1e2230",
    gap: "32px",
  },
  logo: {
    fontSize: "20px",
    fontWeight: "700",
    color: "#fff",
    letterSpacing: "0.5px",
    marginRight: "16px",
  },
  navLinks: {
    display: "flex",
    gap: "28px",
    flex: 1,
  },
  navLink: {
    color: "#aaa",
    textDecoration: "none",
    fontSize: "14px",
  },
  searchBox: {
    background: "#1e2230",
    borderRadius: "20px",
    padding: "7px 20px",
    minWidth: "200px",
    cursor: "text",
  },
  searchPlaceholder: {
    color: "#666",
    fontSize: "13px",
  },
};

export default Header;
