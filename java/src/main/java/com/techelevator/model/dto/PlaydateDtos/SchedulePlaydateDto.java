package com.techelevator.model.dto;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotBlank;
import java.time.LocalDate;
import java.time.LocalTime;

public class SchedulePlaydateDto {
    @NotBlank(message = "You must choose a pet to add")
    @JsonProperty("host_pet_id")
    private int hostPetId;

    @NotBlank(message = "You must have a playdate pet chosen")
    @JsonProperty("guest_pet_id")
    private int guestPetId;

    @NotBlank(message = "Make sure you say where you'd like to meet up!")
    @JsonProperty("location")
    private String location;

    @NotBlank(message= "Please select a day for your playdate")
    @JsonProperty("playdate_date")
    private LocalDate day;

    @NotBlank(message = "Please select a time for your playdate")
    @JsonProperty("playdate_time")
    private LocalTime time;

    @JsonProperty("status")
    private String status;



    public SchedulePlaydateDto(int hostPetId, int guestPetId, String location, LocalDate day, LocalTime time, String status) {
        this.hostPetId = hostPetId;
        this.guestPetId = guestPetId;
        this.location = location;
        this.day = day;
        this.time = time;
        this.status = status;
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
