package com.techelevator.dao;

import com.techelevator.model.Playdate;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

public interface PlaydateDao {

    Playdate getPlaydateByPlaydateId (int playdateId);
    Playdate schedulePlaydate (Playdate playdate);
    List<Playdate> getPlaydatesByUserId (int userId);
    Playdate updatePlaydateStatusByPlaydateId(String status, int playdateId);
    Playdate hostUpdatePlaydateDateByPlaydateId(LocalDate newDate, int playdateId);

    Playdate guestUpdatePlaydateDateByPlaydateId(int playdateId, int newHostId, int newGuestId, LocalDate newDate);

    Playdate hostUpdatePlaydateTimeByPlaydateId(LocalTime newTime, int playdateId);

    Playdate guestUpdatePlaydateTimeByPlaydateId(int newHostId, int newGuestId, LocalTime newTime, int playdateId);

    //List<Playdate> getAllPlaydates ();

}
