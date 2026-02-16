package com.techelevator.model.dto.PlaydateDtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;

public class UpdatePlaydateStatusDto {
    @Pattern(regexp = "accepted|declined|canceled|completed", message = "New status must be accepted or declined")
    private String status;

    public UpdatePlaydateStatusDto() {}

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public UpdatePlaydateStatusDto(String status){
        this.status = status;
    }

}
