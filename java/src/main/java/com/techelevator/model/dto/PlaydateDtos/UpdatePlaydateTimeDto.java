package com.techelevator.model.dto.PlaydateDtos;
import java.time.LocalTime;
public class UpdatePlaydateTimeDto {
    private LocalTime time;

    public UpdatePlaydateTimeDto(){}

    public UpdatePlaydateTimeDto(LocalTime time) {
        this.time = time;
    }

    public LocalTime getTime() {
        return time;
    }

    public void setTime(LocalTime time) {
        this.time = time;
    }
}
