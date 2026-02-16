package com.techelevator.dao;
import com.techelevator.model.Pet;

import java.util.*;


public interface PetDao {

    Pet getPetByPetId(int petId);
    Pet registerPet(Pet petToRegister);
    List<Pet> allPets();
    List<Pet> getPetsByUserId(int userId);
    String getHostPetNameByHostPetId(int hostPetId);
    String getGuestPetNameByGuestPetId(int guestPetId);
    Pet updatePet(Pet updatedPet, int petId);

}
