import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import styles from "./MainNav.module.css";
import logo from "../../assets/PlayFetch.png";

export default function MainNav() {
  const { user } = useContext(UserContext);

  return (
    <header className={styles.header}>
       <Link to="/" className={styles.logoLink}>
          <img
            src={logo}
            alt="playfetch logo"
            className={styles.logoImg}
          />
        </Link>
    <nav className={styles.MainNav}>
  
    
        <ul className={styles.mainNavList}>
          <li>
            <NavLink to="/register-pet">Add Pet</NavLink>
          </li>

          <li>
            <NavLink to="/pets">Find Playdates</NavLink>
          </li>

          {user && (
            <li>
              <NavLink to={`/playdates/${user.id}`}>
                 My Playdates
              </NavLink>
            </li>
          )}
        </ul>

        {/* RIGHT: PROFILE / AUTH */}
        <div className={styles.right}>
          {user ? (
            <>
              <NavLink to="/userProfile" className={styles.profile}>
                <span className={styles.profileIcon}>👤</span>
                Profile
              </NavLink>

              <Link to="/logout" className={styles.logout}>
                Logout
              </Link>
            </>
          ) : (
            <NavLink to="/login" className={styles.login}>
              Login
            </NavLink>
          )}
        </div>

    </nav>
    </header>
  );
}

