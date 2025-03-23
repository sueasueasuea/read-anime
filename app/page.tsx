import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}></main>
      <Footer/>
    </div>
  );
}
