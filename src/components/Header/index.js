import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <Link to={"/"}>
        <span>Movies</span>
      </Link>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/search"}>Pesquisar 🔎</Link>
      </nav>
    </header>
  );
}

export default Header;
