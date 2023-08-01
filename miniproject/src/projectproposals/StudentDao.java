package projectproposals;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.ArrayList;
public class StudentDao
{
	public void create(Student s) 
	{
		PreparedStatement ps = null;
		Connection conn = null;
		
		try 
		{
			conn = DBHandler.connectToDatabase();
			String query = "insert into student(studentid,studentname,department,clas,phno) values(?,?,?,?,?)";
			ps = conn.prepareStatement(query);
			
			ps.setInt(1, s.getStudentid());
			ps.setString(2, s.getName());
			ps.setString(3, s.getDepartment());
			ps.setString(4, s.getClas());
			ps.setInt(5, s.getPhnno());
			
			int rows = ps.executeUpdate();
			System.out.println(rows + "row  inserted");
			
		} 
		catch (SQLException e)
		{
			System.out.println(e.getMessage());
		}
		finally 
		{
			try
			{
				conn.close();
			}
			catch (SQLException e)
			{
				System.out.println(e.getMessage());
			}
		}
	}
		
		public List<Student> getAllStudents(ArrayList<Student> students2) {
	        List<Student> students = new ArrayList<>();

	        Connection conn = null;
	        PreparedStatement ps = null;
	        ResultSet rs = null;

	        try {
	            conn = DBHandler.connectToDatabase();
	            String query = "SELECT * FROM student";
	            ps = conn.prepareStatement(query);
	            rs = ps.executeQuery();

	            while (rs.next()) {
	                int studentid = rs.getInt("studentid");
	                String studentname = rs.getString("studentname");
	                String department = rs.getString("department");
	                String clas = rs.getString("clas");
	                int phnno = rs.getInt("phno");

	                students.add(new Student(studentid, studentname, department, clas, phnno));
	            }
	        } catch (SQLException e) {
	            System.out.println(e.getMessage());
	        } finally {
	            try {
	                if (rs != null) rs.close();
	                if (ps != null) ps.close();
	                if (conn != null) conn.close();
	            } catch (SQLException e) {
	                System.out.println(e.getMessage());
	            }
	        }

	        return students;
		}
	        public void updateStudent(Student s) {
	            Connection conn = null;
	            PreparedStatement ps = null;

	            try {
	                conn = DBHandler.connectToDatabase();
	                String query = "UPDATE student SET studentname=?, department=?, clas=?, phno=? WHERE studentid=?";
	                ps = conn.prepareStatement(query);

	                ps.setString(1, s.getName());
	                ps.setString(2, s.getDepartment());
	                ps.setString(3, s.getClas());
	                ps.setInt(4, s.getPhnno());
	                ps.setInt(5, s.getStudentid());

	                int rows = ps.executeUpdate();
	                System.out.println(rows + " row(s) updated");
	            } catch (SQLException e) {
	                System.out.println(e.getMessage());
	            } finally {
	                try {
	                    if (ps != null) ps.close();
	                    if (conn != null) conn.close();
	                } catch (SQLException e) {
	                    System.out.println(e.getMessage());
	                }
	            }
	        }

	        public void deleteStudent(int studentId) {
	            Connection conn = null;
	            PreparedStatement ps = null;

	            try {
	                conn = DBHandler.connectToDatabase();
	                String query = "DELETE FROM student WHERE studentid=?";
	                ps = conn.prepareStatement(query);

	                ps.setInt(1, studentId);

	                int rows = ps.executeUpdate();
	                System.out.println(rows + " row(s) deleted");
	            } catch (SQLException e) {
	                System.out.println(e.getMessage());
	            } finally {
	                try {
	                    if (ps != null) ps.close();
	                    if (conn != null) conn.close();
	                } catch (SQLException e) {
	                    System.out.println(e.getMessage());
	                }
	            }
	        
	    
	}
		
//	public List<Student> read() 
//	{
//		List<Student> list = new ArrayList<>();
//		Student s = null;
//		Connection conn = null;
//		try {
//			conn = DBHandler.connectToDatabase();
//			String query = "select * from student";
//			PreparedStatement ps = conn.prepareStatement(query);
////			ps.setInt(1, total);
//			ResultSet rs = ps.executeQuery();
//			System.out.println("Students Details");
//			while (rs.next()) {
//				s = new Student();
//				s.setStudentid(rs.getInt("studentid"));
//				s.setName(rs.getString("studentname"));
//				s.setDepartment(rs.getString("department"));
//				s.setClas(rs.getString("clas"));
//				s.setPhnno(rs.getInt("phno"));
////				s.setTotalScore(rs.getInt("total"));
//				list.add(s);
//			}
//		} catch (SQLException e) {
//			System.out.println(e.getMessage());
//		} finally {
//			try {
//				conn.close();
//			} catch (SQLException e) {
//				System.out.println(e.getMessage());
//			}
//		}
//		return list;
//	}
}

//int studentid;
//String studentname;
//String department;
//String clas;
//int phnno;