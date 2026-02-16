import { useState, useEffect } from "react"
import styles from "./PetsView.module.css"
import PetService from "../../services/PetService"
import { Link, NavLink } from "react-router-dom"

export default function PetsView() {

    const [pets, setPets] = useState([])

    function getAllPets() {
        PetService.getAllPets().then(
            (response) => {
                setPets(response.data);
            }
        )
    }
    useEffect(
        () => getAllPets(), []
    )

    return (
        <div className={styles.fullPetsView}>

            <h2>Animal Friends to Play With</h2>
            {
                pets.map(
                    (pet) => (
                        <li key={pet.id} className={styles.petCardInfo}>

                            <ul className={styles.petInfo}>

                                <h3>{pet.petName}</h3>

                                <br />

                                <img src={pet.photoUrl} className={styles.photoUrl} />

                                <br />

                                <button className={styles.btn}>
                                    <NavLink to={`/pet/${pet.petId}`} className={styles.link}>
                                        See Details
                                    </NavLink>
                                </button>
                            </ul>

                        </li>
                    )
                )
            }
        </div>
    )
}