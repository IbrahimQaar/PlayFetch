package com.techelevator.model;

public class Pet {
    private int petId;
    private String petName;
    private int ownerId;
    private String ownerFirstName;
    private String breed;
    private int age;
    private String bio;
    private boolean isShy;
    private boolean isPhysical;
    private boolean isReactive;
    private String playSetting;
    private String photoUrl;


    public int getPetId() {
        return petId;
    }

    public void setPetId(int petId) {
        this.petId = petId;
    }

    public String getPetName() {
        return petName;
    }

    public void setPetName(String petName) {
        this.petName = petName;
    }

    public int getOwnerId() {
        return ownerId;
    }

    public void setOwnerId(int ownerId) {
        this.ownerId = ownerId;
    }

    public String getOwnerFirstName() {
        return ownerFirstName;
    }

    public void setOwnerFirstName(String ownerFirstName) {
        this.ownerFirstName = ownerFirstName;
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

    @Override
    public String toString() {
        return "Pet{" +
                "petId=" + petId +
                ", petName='" + petName + '\'' +
                ", ownerId=" + ownerId +
                ", ownerFirstName='" + ownerFirstName + '\'' +
                ", breed='" + breed + '\'' +
                ", age=" + age +
                ", bio='" + bio + '\'' +
                ", isShy=" + isShy +
                ", isPhysical=" + isPhysical +
                ", isReactive=" + isReactive +
                ", playSetting='" + playSetting + '\'' +
                ", photoUrl='" + photoUrl + '\'' +
                '}';
    }
}
