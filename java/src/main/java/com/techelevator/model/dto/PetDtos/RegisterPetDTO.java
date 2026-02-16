package com.techelevator.model.dto.PetDtos;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;

public class RegisterPetDTO {
    @NotBlank(message = "Pet name cannot be blank")
    @JsonProperty("pet_name")
    private String petName;

    @NotBlank(message = "Breed cannot be blank. If you're not sure, just type 'not sure'!")
    @JsonProperty("breed")
    private String breed;

    @Positive(message = "Pet age must be greater than zero!")
    @JsonProperty("age")
    private int age;

    @JsonProperty("bio")
    private String bio;

    @JsonProperty("is_shy")
    private boolean isShy;

    @JsonProperty("is_physical")
    private boolean isPhysical;

    @JsonProperty("is_reactive")
    private boolean isReactive;


    @JsonProperty("play_setting")
    private String playSetting;

    @NotBlank(message = "Show us your pupper!")
    @JsonProperty("photo_url")
    private String photoUrl;

    public RegisterPetDTO(String petName, String breed, int age, String bio, boolean isShy, boolean isPhysical, boolean isReactive, String playSetting, String photoUrl) {
        this.petName = petName;
        this.breed = breed;
        this.age = age;
        this.bio = bio;
        this.isShy = isShy;
        this.isPhysical = isPhysical;
        this.isReactive = isReactive;
        this.playSetting = playSetting;
        this.photoUrl = photoUrl;
    }

    public String getPetName() {
        return petName;
    }

    public void setPetName(String petName) {
        this.petName = petName;
    }

    public String getBreed() {
        return breed;
    }

    public void setBreed(String breed) {
        this.breed = breed;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public boolean isShy() {
        return isShy;
    }

    public void setShy(boolean shy) {
        isShy = shy;
    }

    public boolean isPhysical() {
        return isPhysical;
    }

    public void setPhysical(boolean physical) {
        isPhysical = physical;
    }

    public boolean isReactive() {
        return isReactive;
    }

    public void setReactive(boolean reactive) {
        isReactive = reactive;
    }

    public String getPlaySetting() {
        return playSetting;
    }

    public void setPlaySetting(String playSetting) {
        this.playSetting = playSetting;
    }

    public String getPhotoUrl() {
        return photoUrl;
    }

    public void setPhotoUrl(String photoUrl) {
        this.photoUrl = photoUrl;
    }
}
