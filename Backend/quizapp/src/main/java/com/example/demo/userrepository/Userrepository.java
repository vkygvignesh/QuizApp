package com.example.demo.userrepository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.userentity.Userentity;

@Repository

public interface Userrepository extends JpaRepository <Userentity,Integer>
{

	public  Userentity findByEmail(String email) ;
	
  
}
