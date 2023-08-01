package projectproposals;
import java.util.ArrayList;
import java.util.*;
public class Main 
{
public static void main(String args[])
{
	Scanner vk=new Scanner(System.in);
	
	ArrayList<Student> students=new ArrayList<Student>();
	ArrayList<Project> projects=new ArrayList<Project>();
	
	StudentDao dao=new StudentDao();
	ProjectDao pdao=new ProjectDao();
	
	System.out.print("1 for Register,2 for Exit,3 for project proposals, 5 for show student details,6 for  delete ,7 for update");
	int n=vk.nextInt();
	
	Project project=new Project();
	Student student =new Student();
	
	if(n==1)
	 {
		 System.out.println("Registering.....");

		 System.out.println("Enter Student ID");
		 int studentid=vk.nextInt();
		 student.setStudentid(studentid);
		 vk.nextLine();
		 
		 System.out.println("Enter Name");
		 String  studentname=vk.nextLine();
		 student.setName(studentname);
		 
		 System.out.println("Enter  Department");
		 String department=vk.nextLine();
		 student.setDepartment(department);
		 
		 System.out.println("Enter class");
		 String clas=vk.nextLine();
		 student.setClas(clas);
		 
		 System.out.println("Enter phone number");
		 int phno=vk.nextInt();
		 student.setPhnno(phno);
		 
		 dao.create(student);
	 }
	if(n==5)
	{
		 dao. getAllStudents(students);
	}
	if(n==6)
	{
		System.out.println("Enter a id for delete");
		int id=vk.nextInt();
		dao.deleteStudent(id);
	}
	if(n==7)
	{
		 dao.updateStudent(student);
	}
	 
	if(n==3)
	{
		System.out.println("Enter Student ID");
		int studentid=vk.nextInt();
		project.setStudentid(studentid);
		vk.nextLine();
		
		System.out.println("Enter Project Name");
		String projectname=vk.nextLine();
		project.setProjectname(projectname);

		System.out.println("Enter Objective");
		String objective=vk.nextLine();
		project.setObjective(objective);
		
		System.out.println("Enter Starting Date");
	    String  startingdate=vk.next();
	    project.setStartingdate(startingdate);
		
		System.out.println("Enter Ending Date");
		String endingdate =vk.next();
		project.setEndingdate(endingdate);
		
		System.out.println("Enter Submission Date");
		String submissiondate=vk.next();
		project.setSubmissiondate(submissiondate);
		
		
		System.out.println("Enter Technology Used");
		String technologyused =vk.next();
		project.setTechnologyused(technologyused);
		
		pdao.create(project);
	}
//	if(n==4)
//	{
//		Student[] list = dao.read();
//		for(Student obj:list)
//		{
//		System.out.println(obj);
//		}
//		break;
//	}
	
}
}
//this.studentid = studentid;
//this.projectname = projectname;
//this.objective = objective;
//this.startingdate = startingdate;
//this.endingdate = endingdate;
//this.submissiondate = submissiondate;
//this.technologyused = technologyused
