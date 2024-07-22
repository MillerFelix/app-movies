import Footer from "../../components/Footer";
import Header from "../../components/Header";
import imageError from "./erro404.png";
import styles from "./PageNotFound.module.css";

function PageNotFound() {
  return (
    <>
      <Header />
      <section className={styles.container}>
        <h2>Ops! Conteúdo não localizado!</h2>
        <img src={imageError} alt="Imagem de erro página não localizada" />
      </section>
      <Footer />
    </>
  );
}

export default PageNotFound;
