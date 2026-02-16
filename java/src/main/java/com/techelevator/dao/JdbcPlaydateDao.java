package com.techelevator.dao;

import com.techelevator.model.Playdate;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;

import javax.sql.DataSource;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

@Component
public class JdbcPlaydateDao implements PlaydateDao{

    private JdbcTemplate template;
    public JdbcPlaydateDao(DataSource ds) {
        template = new JdbcTemplate(ds);
    }

    public Playdate mapRowToPlaydate(SqlRowSet resp) {
        Playdate playdate = new Playdate();

        playdate.setPlaydateId(resp.getInt("playdate_id"));
        playdate.setHostPetId(resp.getInt("host_pet_id"));
        playdate.setGuestPetId(resp.getInt("guest_pet_id"));
        playdate.setLocation(resp.getString("location"));
        playdate.setDay(resp.getDate("playdate_date").toLocalDate());
        playdate.setTime(resp.getTime("playdate_time").toLocalTime());
        playdate.setStatus(resp.getString("status"));

        return playdate;
    }

    @Override
    public Playdate getPlaydateByPlaydateId(int id) {
        Playdate playdate = new Playdate();
        String sql = "SELECT * FROM playdate WHERE playdate_id = ?;";

        SqlRowSet resp = template.queryForRowSet(sql, id);

        if (resp.next()) {
            playdate = mapRowToPlaydate(resp);
        }

        return playdate;
    }

    @Override
    public Playdate schedulePlaydate(Playdate playdate) {
        int newPlaydateId = 0;
        String sql = "INSERT INTO playdate (host_pet_id, guest_pet_id, location, playdate_date, playdate_time, status) " +
                "VALUES (?,?,?,?,?,?) RETURNING playdate_id;";

        //do we need a db constraint so we can't create a playdate between two pets with the same owner?
        newPlaydateId= template.queryForObject(sql, Integer.class,
                playdate.getHostPetId(),
                playdate.getGuestPetId(),
                playdate.getLocation(),
                playdate.getDay(),
                playdate.getTime(),
                playdate.getStatus());

        System.out.println("DEBUG: Date is " + playdate.getDay());


        return getPlaydateByPlaydateId(newPlaydateId);
    }

    @Override
    public List<Playdate> getPlaydatesByUserId(int userId) {
        List<Playdate> myPlaydates = new ArrayList<>();
        String sql = "SELECT * FROM playdate JOIN pet on pet.pet_id = playdate.host_pet_id OR pet.pet_id = playdate.guest_pet_id " +
                "WHERE pet.owner_id = ?;";

        SqlRowSet resp = template.queryForRowSet(sql, userId);

        while (resp.next()) {
            myPlaydates.add(mapRowToPlaydate(resp));
        }

        return myPlaydates;
    }

    @Override //change to update time, day, and status
    public Playdate updatePlaydateStatusByPlaydateId(String newStatus, int playdateId) {
        String sql = "UPDATE playdate SET status = ? WHERE playdate_id = ?;";

        template.update(sql, newStatus, playdateId);

        return getPlaydateByPlaydateId (playdateId);
    }

    //when a playdate request is initiated, the host pet owner should see 'edit' and 'cancel' (status: pending)
    //when a playdate request is received, the guest pet owner should see 'accept' and 'decline' (status: pending)
    //when a playdate request is accepted (by guest pet owner), the playdate status should change to 'accepted'
    //when playdate status is 'accepted,' both host and guest see 'edit' and 'cancel'
    //when either host or guest pet owner hits cancel, playdate status should change to 'canceled' and both owners should see nothing--which means in 'listplaydatesview' we need an if statement to hide the playdate card if the status is 'canceled' ??????
    //

    //any time either pet owner hits 'edit' and submits the 'edit playdate' form,
        //currently, our sql changes the date or time or both AND updates the playdate status to 'pending'
        //we need to also write logic to see whether the pet owner submitting the edit playdate form is the current host pet owner.
        //if playdate editor is current host pet owner, status changes to pending AND host and guest stay the same
            //BUT if playdate editor is current *guest* pet owner, we need a sql update query that:
                //--changes status from 'accepted' to 'pending' AND
                //--changes host pet id to guest pet id and guest pet id to host pet id

    //then, the initial logic kicks in: if playdate status pending, host owner sees edit and cancel, guest owner sees accept and decline




    @Override
    public Playdate hostUpdatePlaydateDateByPlaydateId(LocalDate newDate, int playdateId) {

        String sql = "UPDATE playdate SET playdate_date = ?, status = 'pending' WHERE playdate_id = ?;";
        template.update(sql, newDate, playdateId);

        return getPlaydateByPlaydateId(playdateId);
    }

    @Override
    public Playdate guestUpdatePlaydateDateByPlaydateId(int playdateId, int newHostId, int newGuestId, LocalDate newDate) {
        String sql = "UPDATE playdate SET host_pet_id = ?, guest_pet_id = ?, playdate_date = ?, status = 'pending' WHERE playdate_id = ?;";

        template.update(sql, newHostId, newGuestId, newDate, playdateId);

        return getPlaydateByPlaydateId(playdateId);
    }

    @Override
    public Playdate hostUpdatePlaydateTimeByPlaydateId(LocalTime newTime, int playdateId) {
        String sql = "UPDATE playdate SET playdate_time = ?, status = 'pending' WHERE playdate_id = ?;";

        template.update(sql, newTime, playdateId);

        return getPlaydateByPlaydateId(playdateId);
    }


    @Override
    public Playdate guestUpdatePlaydateTimeByPlaydateId(int newHostId, int newGuestId, LocalTime newTime, int playdateId) {
        String sql = "UPDATE playdate SET host_pet_id =?, guest_pet_id =?, playdate_time = ?, status = 'pending' WHERE playdate_id = ?;";

        template.update(sql, newHostId, newGuestId, newTime, playdateId);

        return getPlaydateByPlaydateId(playdateId);
    }


}
