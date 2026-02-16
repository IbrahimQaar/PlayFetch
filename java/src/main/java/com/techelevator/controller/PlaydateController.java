package com.techelevator.controller;

import com.techelevator.dao.PetDao;
import com.techelevator.dao.PlaydateDao;
import com.techelevator.dao.UserDao;
import com.techelevator.exception.DaoException;
import com.techelevator.model.Pet;
import com.techelevator.model.Playdate;
import com.techelevator.model.User;
import com.techelevator.model.dto.PlaydateDtos.CancelPlaydateDto;
//import com.techelevator.model.dto.UpdatePlaydateDateDto;
//import com.techelevator.model.dto.UpdatePlaydateStatusDto;
import com.techelevator.model.dto.PlaydateDtos.UpdatePlaydateDateDto;
import com.techelevator.model.dto.PlaydateDtos.UpdatePlaydateStatusDto;
import com.techelevator.model.dto.PlaydateDtos.UpdatePlaydateTimeDto;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.security.Principal;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@RestController
@CrossOrigin
public class PlaydateController {

    @Autowired
    private UserDao userDao;
    @Autowired
    private PetDao petDao;
    @Autowired
    private PlaydateDao playdateDao;

    @RequestMapping(path = "/schedule-playdate", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.CREATED)
    @PreAuthorize("isAuthenticated()")
    public Playdate schedulePlaydate(@RequestBody Playdate playdate , Principal principal) {
        User currentUser = userDao.getUserByUsername(principal.getName());
        Pet hostPet = petDao.getPetByPetId(playdate.getHostPetId());
        Pet guestPet = petDao.getPetByPetId(playdate.getGuestPetId());
        if (hostPet == null || hostPet.getOwnerId() != currentUser.getId()) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "You can only schedule playdates for your pets");
        }
        if (guestPet.getOwnerId() == currentUser.getId()) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "You can't schedule a playdate between two of your own pets!");
        }
        if (playdate.getStatus() == null) {
            playdate.setStatus("pending");
        }

        return playdateDao.schedulePlaydate(playdate);
    }

    @RequestMapping (path = "/playdates/{id}", method = RequestMethod.GET)
    @PreAuthorize("isAuthenticated()")
    public List<Playdate> getPlaydatesByUserId (@PathVariable int id, Principal principal) {
        User loggedInUser = userDao.getUserByUsername(principal.getName());
        User currentUser = userDao.getUserById(id);

        if (currentUser == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Current User is not found");
        }
        if (loggedInUser.getId() != currentUser.getId()) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "You can only view your own playdates");
        }

        return playdateDao.getPlaydatesByUserId(id);
    }

    @RequestMapping(path = "/playdate/{playdateId}", method = RequestMethod.GET)
    @PreAuthorize("isAuthenticated()")
    public Playdate getPlaydateByPlaydateId (@PathVariable int playdateId, Principal principal) {
        User currentUser = userDao.getUserByUsername(principal.getName());
        Playdate playdate = playdateDao.getPlaydateByPlaydateId(playdateId);

        if (playdate == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Playdate not found");
        }

        Pet host = petDao.getPetByPetId(playdate.getHostPetId());
        Pet guest = petDao.getPetByPetId(playdate.getGuestPetId());

        if (currentUser == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Current User is not found");
        }

        if (host.getOwnerId() != currentUser.getId() && guest.getOwnerId() != currentUser.getId()) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "You can only view your own playdates");
        }

        return playdate;
    }

    @RequestMapping(path = "/playdate/status/{playdateId}", method = RequestMethod.PUT)
    @PreAuthorize("isAuthenticated()")
    public Playdate updatePlaydateStatus(@PathVariable int playdateId, @Valid @RequestBody UpdatePlaydateStatusDto updatePlaydateStatusDto, Principal principal){

        try{
            User currentUser = userDao.getUserByUsername(principal.getName());
            Playdate playdate = playdateDao.getPlaydateByPlaydateId(playdateId);

            if (playdate == null) {
                throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Playdate not found");
            }

            Pet host = petDao.getPetByPetId(playdate.getHostPetId());
            Pet guest = petDao.getPetByPetId(playdate.getGuestPetId());
            LocalDate date = playdate.getDay();

            if (currentUser == null) {
                throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Please login to edit playdate status");
            }

            if (host.getOwnerId() != currentUser.getId() && guest.getOwnerId() != currentUser.getId()) {
                throw new ResponseStatusException(HttpStatus.FORBIDDEN, "You can only edit your own playdates");
            }

            if(!playdate.getStatus().equals("pending")) {
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "You can only accept or decline pending playdates");
            }

            if(date.isBefore(LocalDate.now())) {
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Playdate invitation has expired");
            }

            return playdateDao.updatePlaydateStatusByPlaydateId(updatePlaydateStatusDto.getStatus(), playdateId);

        } catch (DaoException e) {
            e.printStackTrace();
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage());
        }
    }

    @RequestMapping(path = "/playdate/date/{playdateId}", method = RequestMethod.PUT)
    @PreAuthorize("isAuthenticated()")
    public Playdate updatePlaydateDate(@PathVariable int playdateId, @Valid @RequestBody UpdatePlaydateDateDto updatePlaydateDateDto, Principal principal){

        try{
            User currentUser = userDao.getUserByUsername(principal.getName());
            Playdate playdate = playdateDao.getPlaydateByPlaydateId(playdateId);

            if (playdate == null) {
                throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Playdate not found");
            }

            Pet host = petDao.getPetByPetId(playdate.getHostPetId());
            Pet guest = petDao.getPetByPetId(playdate.getGuestPetId());

            LocalDate newDate = updatePlaydateDateDto.getDate();

            if (currentUser == null) {
                throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Please login to edit playdate");
            }

            if (host.getOwnerId() != currentUser.getId() && guest.getOwnerId() != currentUser.getId()) {
                throw new ResponseStatusException(HttpStatus.FORBIDDEN, "You can only edit your own playdates");
            }

            // Check if the current playdate is in the past
            if(playdate.getDay().isBefore(LocalDate.now())) {
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "You can't reschedule a playdate from the past!");
            }

            // Check if the new date is in the past
            if(newDate.isBefore(LocalDate.now())) {
                if(!newDate.isAfter(LocalDate.now())) {
                    throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                            "Playdates must be scheduled for future dates.");
                }
            }

            if(host.getOwnerId() == currentUser.getId()) {
                return playdateDao.hostUpdatePlaydateDateByPlaydateId(newDate, playdateId);
            } else {
                int newHostId = guest.getPetId();
                int newGuestId = host.getPetId();

                return playdateDao.guestUpdatePlaydateDateByPlaydateId(playdateId, newHostId, newGuestId, newDate);
            }

        } catch (DaoException e) {
            e.printStackTrace();
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage());
        }
    }

    @RequestMapping(path = "/playdate/time/{playdateId}", method = RequestMethod.PUT)
    @PreAuthorize("isAuthenticated()")
    public Playdate updatePlaydateTime(@PathVariable int playdateId, @Valid @RequestBody UpdatePlaydateTimeDto updatePlaydateTimeDto, Principal principal){

        try{
            User currentUser = userDao.getUserByUsername(principal.getName());
            Playdate playdate = playdateDao.getPlaydateByPlaydateId(playdateId);

            if (playdate == null) {
                throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Playdate not found");
            }

            Pet host = petDao.getPetByPetId(playdate.getHostPetId());
            Pet guest = petDao.getPetByPetId(playdate.getGuestPetId());
            LocalTime newTime = updatePlaydateTimeDto.getTime();

            if (currentUser == null) {
                throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Please login to edit playdate");
            }

            if (host.getOwnerId() != currentUser.getId() && guest.getOwnerId() != currentUser.getId()) {
                throw new ResponseStatusException(HttpStatus.FORBIDDEN, "You can only edit your own playdates");
            }

            // Check if the current playdate is in the past (considering both date and time)
            LocalDate currentDate = playdate.getDay();
            LocalTime currentTime = playdate.getTime();

            if(currentDate.isBefore(LocalDate.now()) ||
                    (currentDate.equals(LocalDate.now()) && currentTime.isBefore(LocalTime.now()))) {
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "You can't reschedule a playdate from the past!");
            }

            // Check if the new time would be in the past (if it's today)
            if(currentDate.equals(LocalDate.now()) && newTime.isBefore(LocalTime.now())) {
                if (!currentDate.equals(LocalDate.now()) && newTime.isAfter(LocalTime.now()))
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "You can't reschedule a playdate time into the past!");
            }

            if(host.getOwnerId() == currentUser.getId()) {
                return playdateDao.hostUpdatePlaydateTimeByPlaydateId(newTime, playdateId);
            } else {
                int newHostId = guest.getPetId();
                int newGuestId = host.getPetId();

                return playdateDao.guestUpdatePlaydateTimeByPlaydateId(newHostId, newGuestId, newTime, playdateId);
            }

        } catch (DaoException e) {
            e.printStackTrace();
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage());
        }
    }

    @RequestMapping(path = "/playdate/cancel/{playdateId}", method = RequestMethod.PUT)
    @PreAuthorize("isAuthenticated()")
    public Playdate cancelPlaydate(@PathVariable int playdateId, @Valid @RequestBody CancelPlaydateDto cancelPlaydateDto, Principal principal){

        try{
            User currentUser = userDao.getUserByUsername(principal.getName());
            Playdate playdate = playdateDao.getPlaydateByPlaydateId(playdateId);

            if (playdate == null) {
                throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Playdate not found");
            }

            Pet host = petDao.getPetByPetId(playdate.getHostPetId());
            Pet guest = petDao.getPetByPetId(playdate.getGuestPetId());
            LocalDate date = playdate.getDay();

            if (currentUser == null) {
                throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Please login to edit playdate status");
            }

            if (host.getOwnerId() != currentUser.getId() && guest.getOwnerId() != currentUser.getId()) {
                throw new ResponseStatusException(HttpStatus.FORBIDDEN, "You can only edit your own playdates");
            }

            if(!playdate.getStatus().equals("pending")) {
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "You can only cancel confirmed playdates");
            }

            if(date.isBefore(LocalDate.now())) {
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Playdate invitation has expired");
            }

            return playdateDao.updatePlaydateStatusByPlaydateId(cancelPlaydateDto.getStatus(), playdateId);

        } catch (DaoException e) {
            e.printStackTrace();
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage());
        }
    }
}