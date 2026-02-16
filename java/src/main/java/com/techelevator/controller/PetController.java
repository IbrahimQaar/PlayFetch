package com.techelevator.controller;

import com.techelevator.dao.PetDao;
import com.techelevator.dao.PlaydateDao;
import com.techelevator.dao.UserDao;
import com.techelevator.model.dto.PetDtos.RegisterPetDTO;
import com.techelevator.model.Pet;
import com.techelevator.model.User;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.security.Principal;
import java.util.List;

@RestController
@CrossOrigin

public class PetController {
    @Autowired
    private PetDao petDao;
    @Autowired
    private UserDao userDao;
    @Autowired
    private PlaydateDao playdateDao;


    @RequestMapping(path = "/pets", method = RequestMethod.GET)
    public List<Pet> getAllPets () {
        return petDao.allPets();
    }

    @RequestMapping(path = "/pet/{id}", method = RequestMethod.GET)
    public Pet getPet(@PathVariable int id) {
        return petDao.getPetByPetId(id);
    }

    @RequestMapping(path = "/playdate/host/{hostPetId}", method = RequestMethod.GET)
    public String hostPetName(@PathVariable int hostPetId){
        return petDao.getHostPetNameByHostPetId(hostPetId);
    }

    @RequestMapping(path = "/playdate/guest/{guestPetId}", method = RequestMethod.GET)
    public String guestPetName(@PathVariable int guestPetId){
        return petDao.getGuestPetNameByGuestPetId(guestPetId);
    }

    @RequestMapping(path = "/pets/{id}", method = RequestMethod.GET)
    public List<Pet> getAllPets (@PathVariable int id) {
        return petDao.getPetsByUserId(id);
    }

    @RequestMapping(path = "/register-pet", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.CREATED)
    public Pet registerPet(@RequestBody RegisterPetDTO registerPetDTO, Principal principal) {
        User currentUser = userDao.getUserByUsername(principal.getName());
        Pet newPet = new Pet();

        newPet.setPetName(registerPetDTO.getPetName());
        newPet.setOwnerId(currentUser.getId());
        newPet.setOwnerFirstName(currentUser.getFirstName()); //
        newPet.setBreed(registerPetDTO.getBreed());
        newPet.setAge(registerPetDTO.getAge());
        newPet.setBio(registerPetDTO.getBio());
        newPet.setShy(registerPetDTO.isShy());
        newPet.setPhysical(registerPetDTO.isPhysical());
        newPet.setReactive(registerPetDTO.isReactive());
        newPet.setPlaySetting(registerPetDTO.getPlaySetting());
        newPet.setPhotoUrl(registerPetDTO.getPhotoUrl());

        return petDao.registerPet(newPet);
    }
    @RequestMapping(path = "/update-pet/{petId}", method = RequestMethod.PUT)
    @PreAuthorize("isAuthenticated()")
    public Pet updatePet(@PathVariable int petId, @Valid @RequestBody Pet newPet, Principal principal){
        User currentUser = userDao.getUserByUsername(principal.getName());
       Pet originalPet = petDao.getPetByPetId(petId);
        if(originalPet == null){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "This pet doesn't exist!");
        }
        if(originalPet.getOwnerId() != currentUser.getId()){
           throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Sorry, you can only edit your own pets!");
        }
        return petDao.updatePet(newPet, petId);
    }
}
