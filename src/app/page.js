import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar/Navbar";
import Button from "@/components/Button/Button";

export default function Home() {

  return (
      <div className={styles.home}>
        <Navbar />

        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Award-winning custom designs and digital branding solutions</h1>
            <p className={styles.heroText}>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>

            <Button props={"LEARN MORE"}/>
          </div>

          <Image 
          src="/assets/home/desktop/image-hero-phone.png"
          width={640}
          height={930}
          alt="Backrgound image"
          className={styles.heroImage}
        />
        </div>

        <Image 
          src="/assets/shared/desktop/bg-pattern-leaf.svg"
          width={1000}
          height={590}
          alt="Backrgound image"
          className={styles.backgroundImageLeft}
        />
      </div>
  );
}
