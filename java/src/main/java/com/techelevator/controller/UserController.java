package com.techelevator.controller;

import com.techelevator.dao.UserDao;
import com.techelevator.exception.DaoException;
import com.techelevator.model.User;
import com.techelevator.model.dto.UserDtos.UpdateUserInfoDto;
import com.techelevator.model.dto.UserDtos.RegisterUserDto;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.security.Principal;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * The UserController is a class for handling HTTP Requests related to getting User information.
 * <p>
 * It depends on an instance of a UserDAO for retrieving and storing data. This is provided
 * through dependency injection.
 * <p>
 * Note: This class does not handle authentication (registration/login) of Users. That is
 * handled separately in the AuthenticationController.
 */
@RestController
@CrossOrigin
@Component

@PreAuthorize("isAuthenticated()")
@RequestMapping(path = "/users")
public class UserController {

    private UserDao userDao;

    public UserController(UserDao userDao) {
        this.userDao = userDao;
    }

    @PreAuthorize("hasRole('ADMIN')")
    @RequestMapping(method = RequestMethod.GET)
    public List<User> getAllUsers() {
        List<User> users = new ArrayList<>();

        try {
            users = userDao.getUsers();
        } catch (DaoException e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage());
        }

        return users;
    }

    @RequestMapping(path = "/{userId}", method = RequestMethod.GET)
    public User getById(@PathVariable int userId, Principal principal) {
        User user = null;

        try {
            user = userDao.getUserById(userId);
        } catch (DaoException e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage());
        }

        return user;
    }

    @PreAuthorize("isAuthenticated()")
    @RequestMapping(path = "/update", method = RequestMethod.PUT)
    public User updateUser( @Valid @RequestBody UpdateUserInfoDto updateUserInfoDto, Principal principal){
        try {
            User currentUser = userDao.getUserByUsername(principal.getName());
            User updatedUser = userDao.getUserById(currentUser.getId());

            if (currentUser == null) {
                throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Please login to edit your profile");
            }
            if (currentUser.getId() != updatedUser.getId()) {
                throw new ResponseStatusException(HttpStatus.FORBIDDEN, "You can only edit your own profile");
            }
            updatedUser = userDao.updateUser(updateUserInfoDto, currentUser.getId());
            return updatedUser;
        }
        catch (DaoException e) {
            e.printStackTrace();
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage());
        }







    }




}
