package com.techelevator.dao;

import com.techelevator.model.Pet;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.SqlArrayValue;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.security.core.parameters.P;
import org.springframework.stereotype.Component;

import javax.sql.DataSource;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;

@Component
public class JdbcPetDao implements PetDao {
    private JdbcTemplate template;

    public JdbcPetDao(DataSource ds) {
        template = new JdbcTemplate(ds);
    }

    @Override
    public String getHostPetNameByHostPetId(int hostPetId) {
        Pet hostPet = new Pet();

        String sql = "SELECT * FROM pet JOIN playdate ON playdate.host_pet_id = pet.pet_id WHERE playdate.host_pet_id = ?;";

        SqlRowSet results = template.queryForRowSet(sql, hostPetId);

        if(results.next()){
            hostPet = mapRowToPet(results);
        }
        return hostPet.getPetName();
    }

    @Override
    public String getGuestPetNameByGuestPetId(int guestPetId) {
        Pet guestPet = new Pet();

        String sql = "SELECT * FROM pet JOIN playdate ON playdate.guest_pet_id = pet.pet_id WHERE guest_pet_id = ?;";

        SqlRowSet results = template.queryForRowSet(sql, guestPetId);

        if(results.next()){
            guestPet = mapRowToPet(results);
        }
        return guestPet.getPetName();
    }

    public Pet getPetByPetId(int petId){
        Pet pet = null;

        String sql = "SELECT * FROM pet WHERE pet_id = ?;";

        SqlRowSet results = template.queryForRowSet(sql, petId);

        if(results.next()){
            pet = mapRowToPet(results);
        }

        return pet;
    }

    public List<Pet> getPetsByUserId(int userId) {
        List<Pet> getPets = new ArrayList<>();

        String sql = "SELECT *  " +
                "FROM pet " +
                "WHERE owner_id  = ?;";

        SqlRowSet result = template.queryForRowSet(sql, userId);

        while (result.next()){
            Pet currentPet = mapRowToPet(result);
            getPets.add(currentPet);
        }

        return getPets;
    }

    public Pet registerPet(Pet petToRegister) {

        int newPetId = -1;

        String sql = "INSERT INTO pet(pet_name, owner_id, owner_first_name, breed, age, bio, is_shy, is_physical, is_reactive, play_setting, photo_url) " +
                "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) RETURNING pet_id;";

            newPetId = template.queryForObject(sql, Integer.class,
                    petToRegister.getPetName(),
                    petToRegister.getOwnerId(),
                    petToRegister.getOwnerFirstName(),
                    petToRegister.getBreed(),
                    petToRegister.getAge(),
                    petToRegister.getBio(),
                    petToRegister.isShy(),
                    petToRegister.isPhysical(),
                    petToRegister.isReactive(),
                    petToRegister.getPlaySetting(),
                    petToRegister.getPhotoUrl());

            return getPetByPetId(newPetId);

    }

    @Override
    public List<Pet> allPets() {
        List<Pet> pets = new ArrayList<>();
        String sql = "SELECT * FROM pet ORDER BY pet_name;";

        SqlRowSet resp = template.queryForRowSet(sql);

        while (resp.next()) {
            pets.add(mapRowToPet(resp));
        }

        return pets;
    }

    public Pet updatePet(Pet updatedPet, int petId){
        String sql = "UPDATE pet SET pet_name = ?, age = ?, bio = ?, play_setting = ?, is_shy = ? , is_physical = ? , is_reactive = ? WHERE pet_id = ?;";
        template.update(sql,
                updatedPet.getPetName(),
                updatedPet.getAge(),
                updatedPet.getBio(),
                updatedPet.getPlaySetting(),
                updatedPet.isShy(),
                updatedPet.isPhysical(),
                updatedPet.isReactive(),
                petId);

        return getPetByPetId(petId);
    }

    private Pet mapRowToPet(SqlRowSet rowSet){
        Pet pet = new Pet();
        pet.setPetId(rowSet.getInt("pet_id"));
        pet.setPetName(rowSet.getString("pet_name"));
        pet.setOwnerId(rowSet.getInt("owner_id"));
        pet.setOwnerFirstName(rowSet.getString("owner_first_name"));
        pet.setBreed(rowSet.getString("breed"));
        pet.setAge(rowSet.getInt("age"));
        pet.setBio(rowSet.getString("bio"));
        pet.setShy(rowSet.getBoolean("is_shy"));
        pet.setPhysical(rowSet.getBoolean("is_physical"));
        pet.setReactive(rowSet.getBoolean("is_reactive"));
        pet.setPlaySetting(rowSet.getString("play_setting"));
        pet.setPhotoUrl(rowSet.getString("photo_url"));

        return pet;
    }

}
