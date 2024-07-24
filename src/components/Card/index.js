import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import iconWhite from "./favorite.png";
import iconRed from "./unfavorite.png";
import { useFavoriteContext } from "../../contexts/Favorites";

function Card({ id }) {
  const { favorite, addFavorite } = useFavoriteContext();
  const isFavorite = favorite.some((fav) => fav.id === id);
  const icon = isFavorite ? iconRed : iconWhite;

  return (
    <section className={styles.card}>
      <Link to={`/watch/${id}`}>
        <img
          src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
          alt="Capa"
          className={styles.cover}
        />
      </Link>
      <figure className={styles.icon}>
        <img src={icon} alt="Ícone" onClick={() => addFavorite({ id })} />
      </figure>
    </section>
  );
}

export default Card;
