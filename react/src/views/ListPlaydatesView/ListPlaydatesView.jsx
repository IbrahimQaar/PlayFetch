
import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import PetService from "../../services/PetService";
import styles from "./ListPlaydatesView.module.css";
import { UserContext } from "../../context/UserContext";

export default function ListPlaydatesView() {
    const { user } = useContext(UserContext);
    const [hostPetNames, setHostPetNames] = useState({});
    const [guestPetNames, setGuestPetNames] = useState({});
    const [playdates, setPlaydates] = useState([]);

    const [userCanRespond, setUserCanRespond] = useState({});

    function fetchPetNames() {
        const newHostIds = playdates.map((pd) => pd.hostPetId);
        const newGuestIds = playdates.map((pd) => pd.guestPetId);

        newHostIds.forEach((id) => {
            PetService.getHostPetNameByHostPetId(id).then(
                (resp) => {
                    setHostPetNames(prev => ({ ...prev, [id]: resp.data }))
                }
            ).catch(error => console.error('Error fetching host pet name:', error));
        });

        newGuestIds.forEach((id) => {
            PetService.getGuestPetNameByGuestPetId(id).then(
                (resp) => {
                    setGuestPetNames(prev => ({ ...prev, [id]: resp.data }))
                }
            ).catch(error => console.error('Error fetching guest pet name:', error));
        });
    }

    function getAllPlaydates() {
        if (!user) return;
        PetService.getPlaydatesByUserId(user.id).then(
            (resp) => {
                setPlaydates(resp.data);
            }
        ).catch(error => console.error('Error fetching playdates:', error));
    }

    function checkUserPermissions() {
        if (!playdates.length || !user) return;

        playdates.forEach((playdate) => {
            PetService.getPet(playdate.hostPetId).then(
                (resp) => {
                    const isNotHost = resp.data.ownerId !== user.id;
                    setUserCanRespond(prev => ({
                        ...prev,
                        [playdate.playdateId]: isNotHost
                    }));
                }
            ).catch(error => console.error('Error checking pet ownership:', error));
        });
    }

    function isPastDateAndTime(playdateDay, playdateTime) {
        const today = new Date();
        const pdDateTime = new Date(`${playdateDay}T${playdateTime}`);
        return pdDateTime < today;
    }

    function updatePastPlaydates() {
        if (!playdates.length) return;

        playdates.forEach((playdate) => {
            if (isPastDateAndTime(playdate.day, playdate.time) && 
                playdate.status !== "declined" && 
                playdate.status !== "canceled" && 
                playdate.status !== "completed") {

                PetService.updatePlaydateStatus(playdate.playdateId, { status: "completed" })
                    .then(() => {
                        setPlaydates(prevPlaydates =>
                            prevPlaydates.map(pd =>
                                pd.playdateId === playdate.playdateId
                                    ? { ...pd, status: "completed" }
                                    : pd
                            )
                        );
                    })
                    .catch(error => console.error('Error updating past playdate:', error));
            }
        });
    }

    function handleStatusChange(playdateId, newStatus) {
        console.log('Updating playdate:', playdateId, 'to status:', newStatus);

        PetService.updatePlaydateStatus(playdateId, { status: newStatus })
            .then((response) => {
                console.log('Update successful:', response.data);
                setPlaydates(prevPlaydates =>
                    prevPlaydates.map(playdate =>
                        playdate.playdateId === playdateId
                            ? { ...playdate, status: newStatus }
                            : playdate
                    )
                );
            })
            .catch((error) => {
                console.error('Error updating playdate status:', error);
                console.error('Response data:', error.response?.data);
                console.error('Response status:', error.response?.status);

                const errorMessage = error.response?.data?.message || 'Failed to update playdate status. Please try again.';
                alert(errorMessage);
            });
    }

    useEffect(() => {
        getAllPlaydates();
    }, [user]);

    useEffect(() => {
        if (playdates.length > 0) {
            fetchPetNames();
            checkUserPermissions();
            updatePastPlaydates();
        }
    }, [playdates]);

    return (
        <div className={styles.fullPlaydateList}>
            <h2>All Playdates</h2>
            <div className={styles.playCard}>
                {playdates.length > 0 ? (
                    playdates.map((playdate) => (
                        <div key={playdate.playdateId} className={styles.playdateCard}> 
                            <h3>
                                {hostPetNames[playdate.hostPetId]} with{" "}
                                {guestPetNames[playdate.guestPetId]}
                            </h3>
                            <p>Day: {playdate.day}</p>
                            <p>Time: {playdate.time}</p>
                            <p>Location: {playdate.location}</p>
                            <p>Status: {playdate.status}</p>
                            <br />
                            <div className={styles.playButtons}>
                                {!isPastDateAndTime(playdate.day, playdate.time) && (

                                    <>
                                        

                                    
                                        {(playdate.status === "accepted" || (playdate.status === "pending" && userCanRespond[playdate.playdateId] === false)) && (
                                            <>
                                                <button className={styles.btn}>
                                                    <NavLink className={styles.edit} to={`/update-playdate/${playdate.playdateId}`}>
                                                        Edit
                                                    </NavLink>
                                                </button>
                                                
                                                    <button
                                                        className={styles.btn}
                                                        onClick={() =>
                                                            handleStatusChange(playdate.playdateId, "canceled")
                                                        }
                                                    >
                                                        Cancel
                                                    </button>
                                                
                                            </>
                                        )}
                                        {/* accept/pending */}
                                        {((playdate.status === "requested" || playdate.status === "pending") &&
                                            userCanRespond[playdate.playdateId] === true) && (
                                                <>
                                                    <button className={styles.btn}>
                                                        <NavLink className={styles.edit} to={`/update-playdate/${playdate.playdateId}`}>
                                                            Edit
                                                        </NavLink>
                                                    </button>
                                                    <button
                                                        className={styles.btn}
                                                        onClick={() =>
                                                            handleStatusChange(playdate.playdateId, "accepted")
                                                        }
                                                    >
                                                        Accept
                                                    </button>
                                                    <button
                                                        className={styles.btn}
                                                        onClick={() =>
                                                            handleStatusChange(playdate.playdateId, "declined")
                                                        }
                                                    >
                                                        Decline
                                                    </button>
                                                </>
                                            )} 
                                       
                                    </>
                                    
                                )}
                            </div>
                        </div>
                    ))
                ) : (
                    <div className={styles.playdateCard}>
                        <p>No playdates yet!</p>
                        <br />
                        <p>
                            Find a friend to <Link to="/pets">Playfetch here!</Link>
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
