import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams, NavLink } from "react-router-dom";
import PetService from "../../services/PetService";
import styles from "./UpdatePlaydateView.module.css";
import { UserContext } from "../../context/UserContext";

export default function UpdatePlaydateView() {
    const { user } = useContext(UserContext);
    const { playdateId } = useParams();
    const [playdate, setPlaydate] = useState({});
    const [originalPlaydate, setOriginalPlaydate] = useState({});
    const nav = useNavigate();

    function getPlaydate() {
        PetService.getPlaydateByPlaydateId(playdateId)
            .then((resp) => {
                setPlaydate(resp.data);
                setOriginalPlaydate(resp.data);
            })
            .catch((err) => {
                console.error("Error fetching playdate:", err);
            });
    }

    function submitForm(evt) {
        evt.preventDefault();

    const timeChanged = playdate.time !== originalPlaydate.time;
    const dayChanged = playdate.day !== originalPlaydate.day;

    console.log('Sending time update:', {time: playdate.time});
console.log('playdate.time value:', playdate.time, typeof playdate.time);
    

    if (!timeChanged && !dayChanged) {
        alert('No changes to save');
        return;
    }

    if (timeChanged && dayChanged) {
        PetService.updatePlaydateTime(playdateId, {time: playdate.time})
            .then(() => {
                return PetService.updatePlaydateDate(playdateId, {date: playdate.day});
            })
            .then(() => {
                alert('Playdate Updated!');
                nav('/');
            })
            .catch((err) => {
                console.log('error', err);
                alert('Failed to update playdate');
            });
    } else if (timeChanged) {
        // Only update time
        PetService.updatePlaydateTime(playdateId, {time: playdate.time})
            .then(() => {
                alert('Playdate Updated!');
                nav('/');
            })
            .catch((err) => {
                console.log('error', err);
                alert('Failed to update playdate');
            });
    } else if (dayChanged) {
        // Only update date
        PetService.updatePlaydateDate(playdateId, {date: playdate.day})
            .then(() => {
                alert('Playdate Updated!');
                nav('/');
            })
            .catch((err) => {
                console.log('error', err);
                alert('Failed to update playdate');
            });
    }
    }

    function handleInputChange(evt) {
        const { name, value } = evt.target;

        if (!["day", "time"].includes(name)) {
            return;
        }

        setPlaydate((prev) => ({ ...prev, [name]: value }));
    }

    useEffect(() => {
        getPlaydate();
    }, [playdateId]);

    return (
        <div className={styles.fullUpdatePlaydate}>
            <h2>Update Playdate Details</h2>

            <form onSubmit={submitForm} className={styles.updatePlaydateForm}>
                <div className={styles.date}>
                    <label htmlFor="day" className={styles.dateLabel}>
                        What day for the playdate:
                    </label>
                    <input
                        className={styles.dateInput}
                        type="date"
                        id="day"
                        name="day"
                        value={playdate.day || ""}
                        onChange={handleInputChange}
                    />
                </div>

                <div className={styles.time}>
                    <label htmlFor="time" className={styles.timeLabel}>
                        What time for the playdate:
                    </label>
                    <input
                        className={styles.timeInput}
                        type="time"
                        id="time"
                        name="time"
                        value={playdate.time || ""}
                        onChange={handleInputChange}
                    />
                </div>

                <button type="submit"  className={styles.btn}>
                Submit Playdate Edits
                </button>
                <button type="button" className={styles.btn}>
                    <NavLink to={`/playdates/${user.id}`} className={styles.btnPlaydates}>
                        My Playdates
                    </NavLink>
                </button>
            </form>
        </div>
    );
}
