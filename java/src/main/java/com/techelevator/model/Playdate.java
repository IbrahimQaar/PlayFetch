package com.techelevator.model;

import java.time.LocalDate;
import java.time.LocalTime;

public class Playdate {

    private int playdateId;
    private int hostPetId;
    private int guestPetId;
    private String location;
    private LocalDate day;
    private LocalTime time;
    private String status;



    public int getPlaydateId() {
        return playdateId;
    }

    public void setPlaydateId(int playdateId) {
        this.playdateId = playdateId;
    }

    public int getHostPetId() {
        return hostPetId;
    }

    public void setHostPetId(int hostPetId) {
        this.hostPetId = hostPetId;
    }

    public int getGuestPetId() {
        return guestPetId;
    }

    public void setGuestPetId(int guestPetId) {
        this.guestPetId = guestPetId;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public LocalDate getDay() {
        return day;
    }

    public void setDay(LocalDate day) {
        this.day = day;
    }

    public LocalTime getTime() {
        return time;
    }

    public void setTime(LocalTime time) {
        this.time = time;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
