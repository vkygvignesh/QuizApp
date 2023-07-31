package com.example.demo.quizservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.quizentity.Quizentity;
import com.example.demo.quizrepo.Quizrepo;

@Service
public class Quizservice
{
    @Autowired
    Quizrepo Quizrepo;
    public boolean addQuizentity(Quizentity Quizentity)
    {
    	return Quizrepo.save(Quizentity)!=null?true:false;
    }
    public List <Quizentity> getAllQuizentity()
    {
    return Quizrepo.findAll();
    }
	public List<Quizentity> getByType(int type) {
		return Quizrepo.getByQuizeType(type);
	}
}
