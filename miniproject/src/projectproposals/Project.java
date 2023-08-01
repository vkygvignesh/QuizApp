package projectproposals;
import java.util.*;
public class Project 
{
   int studentid;
   String projectname;
   String objective;
   String startingdate;
   String endingdate;
   String submissiondate;
   String technologyused;
   
   
    Project(int studentid, String projectname, String objective, String startingdate, String endingdate,
    		String submissiondate, String technologyused) 
    {
	super();
	this.studentid = studentid;
	this.projectname = projectname;
	this.objective = objective;
	this.startingdate = startingdate;
	this.endingdate = endingdate;
	this.submissiondate = submissiondate;
	this.technologyused = technologyused;
    }	


	public int getStudentid() {
		return studentid;
	}


	public void setStudentid(int studentid) {
		this.studentid = studentid;
	}


	public String getProjectname() {
		return projectname;
	}


	public void setProjectname(String projectname) {
		this.projectname = projectname;
	}


	public String getObjective() {
		return objective;
	}


	public void setObjective(String objective) {
		this.objective = objective;
	}


	public String getStartingdate() {
		return startingdate;
	}


	public void setStartingdate(String startingdate) {
		this.startingdate = startingdate;
	}


	public String  getEndingdate() {
		return endingdate;
	}


	public void setEndingdate(String endingdate) {
		this.endingdate = endingdate;
	}


	public String getSubmissiondate() {
		return submissiondate;
	}


	public void setSubmissiondate(String submissiondate) {
		this.submissiondate = submissiondate;
	}


	public String getTechnologyused() {
		return technologyused;
	}


	public void setTechnologyused(String technologyused) {
		this.technologyused = technologyused;
	}


	@Override
	public String toString() 
	{
		return "Project [studentid=" + studentid + ", projectname=" + projectname + ", objective=" + objective
				+ ", startingdate=" + startingdate + ", endingdate=" + endingdate + ", submissiondate=" + submissiondate
				+ ", technologyused=" + technologyused + "]";
	} 
	Project()
	{
		super();
	}
}
