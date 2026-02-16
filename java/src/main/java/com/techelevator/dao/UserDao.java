package com.techelevator.dao;

import com.techelevator.model.dto.UserDtos.RegisterUserDto;
import com.techelevator.model.User;
import com.techelevator.model.dto.UserDtos.UpdateUserInfoDto;

import java.util.List;

public interface UserDao {

    List<User> getUsers();

    User getUserById(int id);

    User getUserByUsername(String username);

    User createUser(RegisterUserDto user);

    User updateUser(UpdateUserInfoDto userWithUpdates, int userId);
}
