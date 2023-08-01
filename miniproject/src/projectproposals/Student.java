package projectproposals;

public class Student
{
     int studentid;
     String studentname;
     String department;
     String clas;
     int phnno;

     public int getStudentid() {
		return studentid;
	}

	public void setStudentid(int studentid) {
		this.studentid = studentid;
	}

	public String getName() {
		return studentname;
	}

	public void setName(String studentname) {
		this.studentname= studentname;
	}

	public String getDepartment() {
		return department;
	}

	public void setDepartment(String department) {
		this.department = department;
	}

	public String getClas() {
		return clas;
	}

	public void setClas(String clas) {
		this.clas = clas;
	}

	public int getPhnno() {
		return phnno;
	}

	public void setPhnno(int phnno){
		this.phnno = phnno;
	}

		@Override
	public String toString() {
		return "Student [studentid=" + studentid + ", name=" + studentname + ", department=" + department + ", clas=" + clas
				+ ", phnno=" + phnno + "]";
	}

	Student (){
		super();
	}
	Student(int studentid, String studentname, String department, String clas, int phnno)
	{
		super();
		this.studentid = studentid;
		this.studentname = studentname;
		this.department = department;
		this.clas = clas;
		this.phnno = phnno;
	}   
}
