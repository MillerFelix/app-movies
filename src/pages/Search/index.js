import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SearchVideoList from "../../components/SearchVideoList";
import videos from "../../json/videos.json";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import styles from "./Search.module.css";

function Search() {
  return (
    <>
      <ScrollToTopButton />
      <Header />
      <Container>
        <section className={styles.search}>
          <SearchVideoList videos={videos} />
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Search;
