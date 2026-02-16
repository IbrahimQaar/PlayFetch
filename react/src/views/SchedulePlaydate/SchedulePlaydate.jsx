import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PetService from "../../services/PetService";
import styles from './SchedulePlaydate.module.css';
import { UserContext } from '../../context/UserContext';

export default function SchedulePlaydate() {
    const { id } = useParams();

    const [petOptions, setPetOptions] = useState([]);
    const [selectedPetId, setSelectedPetId] = useState('');
    const [playdate, setPlaydate] = useState({
        hostPetId: '',
        guestPetId: parseInt(id,10),
        location: '',
        day: '',
        time: ''
    });

    const navigate = useNavigate();
    const { user } = useContext(UserContext);

    useEffect(() => {
        PetService.getAllPets()
            .then((res) => {
                const mine = res.data.filter((p) => p.ownerId === user.id);
                setPetOptions(mine);

                if (mine.length === 1) {
                    setSelectedPetId(mine[0].petId);
                    setPlaydate(prev => ({ ...prev, hostPetId: mine[0].petId }));
                }
            })
            .catch((err) => {
                console.error("Failed to fetch pets:", err);
            });
    }, [user.id]);

    function handlePetChange(evt) {
        const value = parseInt(evt.target.value, 10);
        setSelectedPetId(value);
        setPlaydate(prev => ({ ...prev, hostPetId: value }));
    }

    function handleInputChange(evt) {
        const { name, value } = evt.target;
    
        if (!['location', 'day', 'time'].includes(name)) {
            console.warn("Unexpected field in playdate:", name);
            return;
        }
    
        setPlaydate(prev => ({ ...prev, [name]: value }));
    }

    function submitForm(evt) {
        evt.preventDefault();
        console.log("Submitting playdate:", playdate);

        PetService.schedulePlaydate(playdate)
            .then((response) => {
                console.log('Playdate requested', response.data);
                alert("Playdate Requested!");
                navigate("/pets");
            })
            .catch((err) => {
                console.error("Failed to create playdate:", err);
            });
    }

    return (
        <div className={styles.schedule}>
           
            <form onSubmit={submitForm} className={styles.playdateForm}>
                 <h1>Schedule a playdate with a cute friend</h1>

                <div className={styles.selectorContainer}>
                    <label htmlFor="petSelect" className={styles.petLabel}>Pick one of your pets to schedule this date:</label>
                    {petOptions.length === 0 ? (
                        <p>You don’t have any pets yet! Add a pet first to schedule a playdate.</p>
                    ) : (
                        <select
                        className={styles.petInput}
                            id="petSelect"
                            value={selectedPetId}
                            onChange={handlePetChange}
                            disabled={petOptions.length === 1}
                            required
                        >
                            {petOptions.length !== 1 && <option value="" disabled>Select a pet</option>}
                            {petOptions.map(pet => (
                                <option key={pet.petId} value={pet.petId}>
                                    {pet.petName}
                                </option>
                            ))}
                        </select>
                    )}
                </div>

                <div className={styles.location}>
                    <label htmlFor="location" className={styles.locationLabel}>Preferred Play location:</label>
                    <select
                    className={styles.locationInput}
                        id="location"
                        name="location"
                        value={playdate.location}
                        onChange={handleInputChange}
                        required
                    >
                        <option value=''>Select an Option Below</option>
                        <option value="home">Home</option>
                        <option value="dog park">Dog Park</option>
                    </select>
                </div>

                <div className={styles.date}>
                    <label htmlFor="date" className={styles.dateLabel}>What day for the playdate:</label>
                    <input
                    className={styles.dateInput}
                        type="date"
                        id="day"
                        name="day"
                        value={playdate.day}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className={styles.time}>
                    <label htmlFor="time" className={styles.timeLabel}>What time for the playdate:</label>
                    <input
                    className={styles.timeInput}
                        type="time"
                        id="time"
                        name="time"
                        value={playdate.time}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <button
                className={styles.btn}
                    type="submit"
                    disabled={
                        !playdate.hostPetId || !playdate.day || !playdate.time || !playdate.location
                    }
                >
                    Schedule Playdate
                </button>
            </form>
        </div>
    );
}
