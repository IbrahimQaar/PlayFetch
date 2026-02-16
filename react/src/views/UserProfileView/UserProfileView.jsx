import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import PetService from "../../services/PetService";
import styles from "./UserProfileView.module.css";

export default function UserProfileView() {
  const { user } = useContext(UserContext);
  const [myPets, setMyPets] = useState([]);

  useEffect(() => {
    if (!user) return;

    PetService.getAllPets()
      .then((res) => {
        const mine = res.data.filter((p) => p.ownerId === user.id);
        setMyPets(mine);
      })
      .catch((err) => console.error("Error fetching pets:", err));
  }, [user]);

  return (
    <div className={styles.profile}>
      {/* HEADER */}
      <header className={styles.profileHeader}>
        <h1>Welcome back, {user.firstName} {user.lastName} 🐾</h1>
        <p className={styles.subText}>Manage your pets and playdates</p>
      </header>

      {/* USER INFO */}
      <section className={styles.userInfo}>
        <div className={styles.userInfoHeader}>
          <h2>User Information</h2>
          <button className={styles.btn}>
            <Link to="/" className={styles.editProfile}>
              Edit Profile
            </Link>
          </button>
        </div>

        <div className={styles.userDetails}>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Metro Region:</strong> {user.metroRegion}</p>
        </div>
      </section>

      {/* PETS SECTION */}
      <section className={styles.userPets}>
        <div className={styles.petsHeader}>
          <h3>My Pets</h3>
          <button className={styles.btn}>
            <Link to={`/playdates/${user.id}`} className={styles.playdates}>
              View Playdates
            </Link>
          </button>
        </div>

        {myPets.length > 0 ? (
          <div className={styles.petGrid}>
            {myPets.map((myPet) => (
              <article key={myPet.petId} className={styles.petCard}>
                <div className={styles.petImageWrapper}>
                  <img
                    src={myPet.photoUrl}
                    alt={myPet.petName}
                    className={styles.dogPhoto}
                  />
                </div>

                <h4 className={styles.petName}>{myPet.petName}</h4>

                <div className={styles.petActions}>
                  <Link
                    to={`/pet/${myPet.petId}`}
                    className={styles.cardLink}
                  >
                    See Details
                  </Link>

                  <Link
                    to={`/update-pet/${myPet.petId}`}
                    className={styles.cardLinkSecondary}
                  >
                    Edit Pet
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className={styles.emptyState}>You haven’t added any pets yet 🐶</p>
        )}
      </section>
    </div>
  );
}
