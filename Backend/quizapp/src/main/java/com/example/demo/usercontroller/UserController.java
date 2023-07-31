package com.example.demo.usercontroller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.userentity.Userentity;
import com.example.demo.userentity.Userloginmodel;
import com.example.demo.userservice.Userservice;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController
{
	@Autowired
	Userservice userservice;
	
	@PostMapping("/Userdetails")
	public boolean addUserentity(@RequestBody Userentity User)
	{
	return userservice.adduserentity(User);
	}
	@GetMapping("/showdetails")
	public List <Userentity> getAlluserentity()
	{
	return userservice.getAlluserentity();
	}
	@PostMapping("/checkLogin")
	public String validateUser(@RequestBody Userloginmodel u)
	{

	return userservice.validateUser(u.getEmail(),u.getPassword());
	}
	
}
