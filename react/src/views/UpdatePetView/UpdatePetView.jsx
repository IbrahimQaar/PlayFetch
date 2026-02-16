import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate, useParams } from "react-router-dom";
import PetService from "../../services/PetService";
import styles from "./UpdatePetView.module.css";

export default function UpdatePetView() {
  const { petId } = useParams();
  const [newPet, setPet] = useState({});
  const [originalPet, setOriginalPet] = useState({});
  const nav = useNavigate();
  const petToSend = {
    ...newPet,
    isShy: newPet.shy,
    isPhysical: newPet.physical,
    isReactive: newPet.reactive,
  };

  function getPet() {
    PetService.getPet(petId, petToSend)
      .then((resp) => {
        setPet(resp.data);
        setOriginalPet(resp.data);
      })
      .catch((err) => {
        console.error("Error fetching pet:", err);
      });
  }

  function submitForm(evt) {
    evt.preventDefault();
    console.log("Pet ID:", petId);
    console.log("Pet object:", newPet);
    console.log("Pet object type:", typeof newPet);
    console.log("Pet object keys:", Object.keys(newPet));

    console.log(newPet);

    PetService.updatePet(petId, newPet)
      .then((resp) => {
        if (resp.status === 200) {
          alert("Pet Updated!");
          nav("/");
        }
      })
      .catch(console.log("error"));
  }

  function handleInputChange(evt) {
    const { name, value, type, checked } = evt.target;
    console.log("Input changed:", name, value);
    if (
      ![
        "petName",
        "age",
        "bio",
        "playSetting",
        "isShy",
        "isPhysical",
        "isReactive",
      ].includes(name)
    ) {
      console.log("Field name not allowed:", name);
      return;
    }
    const newValue = type === "checkbox" ? checked : value;
    setPet((prev) => ({ ...prev, [name]: newValue }));
  }

  useEffect(() => {
    getPet();
  }, [petId]);

  return (
    <div className={styles.updatePetView}>
      <h1>Update a pet to PlayFetch</h1>
      <p>
        {newPet.petName}, {newPet.age}, {newPet.playSetting}
      </p>

      <form onSubmit={submitForm}>
        <container className={styles.inputContainer}>
          <div>
            <label>Pet Name:</label>
            <input
              className={styles.nameInput}
              type="text"
              id="petName"
              name="petName"
              value={newPet.petName || ""}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label>Age:</label>
            <input
              className={styles.ageInput}
              type="number"
              min="0"
              max="30"
              id="age"
              name="age"
              value={newPet.age || ""}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label className={styles.bioLabel}>Bio for your pet:</label>
            <textarea
              className={styles.bioInput}
              id="bio"
              name="bio"
              value={newPet.bio || ""}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label>Preferred Play Setting:</label>
            <select
              onChange={handleInputChange}
              id="playSetting"
              name="playSetting"
            >
              <option value="null">Select an Option Below</option>
              <option value="home">Home</option>
              <option value="dog park">Dog Park</option>
            </select>
          </div>
        </container>

        <container className={styles.checkboxContainer}>
          <h2>
            We want to ensure the smoothest and safest play date experience for
            your pup! <br />
            For each question below, check the box if the description is a good
            fit for your pet.
          </h2>

          <section className={styles.personalitySection}>
            <div>
              <label>
                <p>Social Personality</p>
                Social Personality: Some pups are instant friends with everyone
                they meet, and others need more time to warm up! Check here if
                your pup is on the shyer side. Leave it unchecked if they're a
                social butterfly!
              </label>
              
              <input
                id="isShy"
                type="checkbox"
                name="isShy"
                checked={!!newPet.isShy}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label>
                <p>Physical Play Preference</p>
                Some dogs love to tussle and roll with their pet friends. Others
                prefer parallel play that keeps their personal bubble intact.
                Check here if your pup is ready to rumble! Leave it unchecked if
                your pup wants their space.
              </label>
              

              <input
                id="isPhysical"
                type="checkbox"
                name="isPhysical"
                checked={!!newPet.isPhysical}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label>
                <p>Chill Factor</p>
                Some of our furry friends are easily startled and may react to
                unexpected stimuli. Other pups are unruffled no matter what
                comes their way. Check this box if your dog needs a calmer
                environment to feel comfortable; leave it unchecked for cool
                cucumbers!
              </label>
              <input
                id="isReactive"
                type="checkbox"
                name="isReactive"
                checked={!!newPet.isReactive}
                onChange={handleInputChange}
              />
            </div>
          </section>
        </container>
        <button type="submit" className={styles.submitButton}>
          Submit Pet Registration
        </button>
      </form>
    </div>
  );
}
