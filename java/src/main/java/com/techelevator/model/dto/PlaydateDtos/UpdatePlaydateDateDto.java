package com.techelevator.model.dto.PlaydateDtos;

import org.springframework.cglib.core.Local;

import java.time.LocalDate;

public class UpdatePlaydateDateDto {
    private LocalDate date;

    public UpdatePlaydateDateDto() {}

    public UpdatePlaydateDateDto(LocalDate date) {
        this.date = date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public LocalDate getDate(){
        return date;
    }

}
