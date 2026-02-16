import { NavLink } from "react-router-dom";
import styles from "./HomeView.module.css";

export default function HomeView() {
  return (
    <div className={styles.mainGrid}>

      {/* ================= HERO SECTION ================= */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Welcome to PlayFetch</h1>
          <p>
            A trusted platform where dogs and their people connect for safe,
            fun, and meaningful playdates throughout the Columbus area.
          </p>

          <div className={styles.heroActions}>
            <NavLink to="/playdates" className={styles.primaryBtn}>
              Find a Playdate
            </NavLink>

            <NavLink to="/register" className={styles.secondaryBtn}>
              Register Your Pet
            </NavLink>
          </div>
        </div>
      </div>

      {/* ================= ABOUT US ================= */}
      <div className={styles.row2}>
        <h2>About Us</h2>
        <p className={styles.about}>
          PlayFetch was created for dog owners who believe play is more than just
          exercise. It is how dogs build confidence, develop social skills, and
          form meaningful friendships. Our platform connects dog owners across
          the Columbus Metropolitan Area and makes it easy to arrange safe and
          compatible playdates based on each dog’s personality and energy level.
          <br /><br />
          Whether your dog is shy, adventurous, gentle, or full of energy,
          PlayFetch helps you find the right match so every playdate feels
          comfortable, enjoyable, and rewarding for both dogs and their people.
        </p>
      </div>

      {/* ================= JOIN CTA ================= */}
      <div className={styles.rowJoin}>
        <NavLink to="/register" className={styles.btn}>
          Join Today
        </NavLink>
      </div>

      {/* ================= DOG FACTS ================= */}
      <div className={styles.factsSection}>
        <h2 className={styles.factsHeader}>Dog Facts</h2>

        <NavLink to="/facts">
          <img
            src="https://res.cloudinary.com/dsz8efr9s/image/upload/v1755446663/Depositphotos_49380373_m-2015_ajp27a.jpg"
            alt="Dogs Playing"
            className={styles.factsImage}
          />
        </NavLink>

        <p className={styles.factsText}>
          Did you know? Dogs are one of the few species that can recognize and
          respond to human emotions. They are more than pets. They are loyal
          companions, motivators, and an important part of the family.
        </p>
      </div>

      {/* ================= FEATURES ================= */}
      <div className={styles.featureSection}>
        <h2 className={styles.featureHeader}>
          Dog Friendly Spots and Helpful Tips
        </h2>

        <div className={styles.featureGrid}>
          <div className={styles.card}>
            <img
              src="https://res.cloudinary.com/dsz8efr9s/image/upload/v1755447427/Schiller_Park_vhdivj.jpg"
              alt="Schiller Park"
              className={styles.parkImage}
            />
            <h3>Schiller Park</h3>
            <p>
              A historic park in German Village that is ideal for relaxed walks
              and friendly dog meetups.
            </p>
          </div>

          <div className={styles.card}>
            <img
              src="https://res.cloudinary.com/dsz8efr9s/image/upload/v1755447591/GoodalePark_cuqlao.jpg"
              alt="Goodale Park"
              className={styles.parkImage}
            />
            <h3>Goodale Park</h3>
            <p>
              Located in the Short North, this park offers open green spaces and
              a calm atmosphere for dogs and their owners.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Pet of the Week: Freddy</h3>
            <img
              src="https://res.cloudinary.com/dsz8efr9s/image/upload/v1755446283/dog-3698557_1280_souhw0.jpg"
              alt="Freddy"
              className={styles.petImage}
            />
            <p>
              Meet Freddy, a friendly Labrador who loves playing fetch and
              making new friends wherever he goes.
            </p>
          </div>

          <div className={styles.card}>
            <h3>PlayFetch Tips</h3>
            <img
              src="https://res.cloudinary.com/dsz8efr9s/image/upload/v1755446283/dogs_playing_okx6k1.jpg"
              alt="Dogs Playing"
              className={styles.tipImage}
            />
            <p>
              Helpful tips on dog behavior, socialization, and safe play
              practices to ensure every playdate is a positive experience.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
