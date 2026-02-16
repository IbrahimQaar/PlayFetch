import { useState, useEffect } from "react";
import PetService from "../../services/PetService";
import { NavLink, useParams } from "react-router-dom";
import styles from "./PetView.module.css"




export default function PetView() {

    const { id } = useParams()
    const [pet, setPet] = useState([])



    function getPet() {

        PetService.getPet(id).then(
            (response) => {
                setPet(response.data)
            }
        )
    }

    useEffect(() => {
        getPet();
    }, []);


    return (
        <div className={styles.allPetView}>
            <div className={styles.pageGrid}>
                <div className={styles.header}>
                    <h2 className={styles.head}>{pet.petName}</h2>
                    <img src={pet.photoUrl} className={styles.dogPhoto} />
                </div>
                <div className={styles.info}>
                    <p>Owner's Name: {pet.ownerFirstName}</p>
                    <br />
                    <p>Breed: {pet.breed}</p>
                    <br />
                    <p>Age: {pet.age}</p>
                    <br />
                    <p>Bio: {pet.bio}</p>
                    <br />
                    <p>Play Setting: {pet.playSetting}</p>
                </div>
                <button className={styles.btn} >
                    <NavLink to="/pets" className={styles.backlink}>
                        Potential Playdates
                    </NavLink>
                </button>
                <button className={styles.btnPlay}>
                    <NavLink to={`/schedule-playdate/${pet.petId}`} className={styles.backlink}>
                        Schedule a Playdate
                    </NavLink>
                </button>
            </div>
        </div>

    )


}