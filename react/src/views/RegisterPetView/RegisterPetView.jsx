/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import styles from "./RegisterPetView.module.css";
import { useState, useEffect } from "react";
import PetService from "../../services/PetService";

export default function RegisterPetView() {
  const [myWidget, setMyWidget] = useState(null);
  const [pet, setPet] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    initWidget();
  }, []);

  function initWidget() {
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dsz8efr9s",
        uploadPreset: "petfetch",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          setPet((prevPet) => ({
            ...prevPet,
            photoUrl: result.info.url,
          }));
          alert("Photo uploaded successfully!");
        }
      }
    );

    setMyWidget(widget);
  }

  function upload(evt) {
    evt.preventDefault();
    myWidget.open();
  }

  function submitForm(evt) {
    evt.preventDefault();

    PetService.registerPetView(pet).then(() => {
      alert("Pet has been added!");
      navigate("/");
    });
  }

  return (
    <div className={styles.register}>
      <h1>Register a new pet to PlayFetch</h1>

      <form onSubmit={submitForm}>
        {/* ================= BASIC INFO ================= */}
        <div className={styles.inputContainer}>
          <div>
            <label>Pet Name</label>
            <input
              type="text"
              required
              onChange={(e) =>
                setPet({ ...pet, petName: e.target.value })
              }
            />
          </div>

          <div>
            <label>Breed</label>
            <input
              type="text"
              required
              onChange={(e) =>
                setPet({ ...pet, breed: e.target.value })
              }
            />
          </div>

          <div>
            <label>Age</label>
            <input
              type="number"
              min="0"
              max="30"
              required
              onChange={(e) =>
                setPet({ ...pet, age: e.target.value })
              }
            />
          </div>

          <div className={styles.bioInput}>
            <label className={styles.bioLabel}>
              Tell us about your pet
            </label>
            <textarea
              required
              onChange={(e) =>
                setPet({ ...pet, bio: e.target.value })
              }
            />
          </div>

          {/* ===== CENTERED FIELD ===== */}
          <div className={styles.centeredField}>
            <label>Preferred Play Setting</label>

            <select
              required
              onChange={(e) =>
                setPet({ ...pet, playSetting: e.target.value })
              }
            >
              <option value="" disabled selected>
                Choose location
              </option>
              <option value="home">Home</option>
              <option value="dog park">Dog Park</option>
            </select>

            <label>Upload a photo of your pet</label>

            <button
              type="button"
              className={styles.uploadButton}
              onClick={upload}
            >
              Upload
            </button>
          </div>
        </div>

        {/* ================= PERSONALITY ================= */}
        <div className={styles.checkboxContainer}>
          <h2>
            We want to ensure the smoothest and safest play date
            experience for your pup!
          </h2>

          <section className={styles.personalitySection}>
            <div>
              <label>
                <p>Social Personality</p>
                Shy pups need more time to warm up.
              </label>
              <input
                type="checkbox"
                checked={pet.isShy === true}
                onChange={(e) =>
                  setPet({ ...pet, isShy: e.target.checked })
                }
              />
            </div>

            <div>
              <label>
                <p>Physical Play Preference</p>
                Loves rough-and-tumble play.
              </label>
              <input
                type="checkbox"
                checked={pet.isPhysical === true}
                onChange={(e) =>
                  setPet({ ...pet, isPhysical: e.target.checked })
                }
              />
            </div>

            <div>
              <label>
                <p>Chill Factor</p>
                Needs a calm environment.
              </label>
              <input
                type="checkbox"
                checked={pet.isReactive === true}
                onChange={(e) =>
                  setPet({ ...pet, isReactive: e.target.checked })
                }
              />
            </div>
          </section>

          {/* ================= SAFETY ================= */}
          <div className={styles.checkBox}>
            <h3>Before completing registration, confirm:</h3>

            <label>
              <input type="checkbox" required />
              Vaccinations and flea/tick preventatives are up to date.
            </label>

            <label>
              <input type="checkbox" required />
              This pet has never harmed people or animals.
            </label>
          </div>
        </div>

        {/* ================= SUBMIT ================= */}
        <button type="submit" className={styles.submitButton}>
          Submit Pet Registration
        </button>
      </form>
    </div>
  );
}
