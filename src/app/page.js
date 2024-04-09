import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar/Navbar";
import Button from "@/components/Button/Button";
import Link from "next/link"

export default function Home() {

  return (
      <div className={styles.home}>
        <Navbar />

        <section className={styles.heroContainer}>
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
        </section>

        <Image 
          src="/assets/shared/desktop/bg-pattern-leaf.svg"
          width={1000}
          height={590}
          alt="Backrgound image"
          className={styles.backgroundImageLeft}
        />

        <section className={styles.category}>
          
          <Link href="/web-design" className={styles.imageLeftContainer}>
              <div className={styles.categoryOverlay}></div>
                <h2 className={styles.categoryTitle}>WEB DESIGN</h2>
                
                <div className={styles.categoryContent}>
                  <p className={styles.categoryText}>VIEW PROJECTS</p>

                  <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4 4-4 4" stroke="#E7816B" stroke-width="2" fill="none" fillRule="evenodd"/></svg>
                </div>
          </Link>

          <div className={styles.imageRightContainer}>
            <Link href="/app-design" className={styles.categoryImageTop}>
                <div className={styles.categoryOverlay}></div>
                  <h2 className={styles.categoryTitle}>APP DESIGN</h2>

                  <div className={styles.categoryContent}>
                    <p className={styles.categoryText}>VIEW PROJECTS</p>

                    <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4 4-4 4" stroke="#E7816B" stroke-width="2" fill="none" fillRule="evenodd"/></svg>
                  </div>
            </Link>

            <Link href="/graphic-design" className={styles.categoryImageBottom}>
                <div className={styles.categoryOverlay}></div>
                  <h2 className={styles.categoryTitle}>GRAPHIC DESIGN</h2>

                  <div className={styles.categoryContent}>
                    <p className={styles.categoryText}>VIEW PROJECTS</p>

                    <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4 4-4 4" stroke="#E7816B" stroke-width="2" fill="none" fillRule="evenodd"/></svg>
                  </div>
            </Link>
          </div>

        </section>
      </div>
  );
}
