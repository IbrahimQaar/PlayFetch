package com.techelevator.model.dto.PlaydateDtos;

import jakarta.validation.constraints.Pattern;

public class CancelPlaydateDto {


    @Pattern(regexp = "Canceled", message = "New status must be canceled")
    private String status;

    public CancelPlaydateDto() {};

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public CancelPlaydateDto(String status){
        this.status = status;
    }

}
