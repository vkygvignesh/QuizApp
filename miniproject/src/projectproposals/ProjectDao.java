package projectproposals;

import java.sql.Connection;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.ArrayList;

public class ProjectDao 
{
	public void create(Project p) 
	{
		PreparedStatement pj = null;
		Connection conn = null;
		
		try 
		{
			conn = DBHandler.connectToDatabase();
			String query = "insert into project (studentid,Projectname,Objective,Startingdate,Endingdate,Submissiondate,Technologyused) values(?,?,?,?,?,?,?)";
			pj = conn.prepareStatement(query);
			
			pj.setInt(1, p.getStudentid());
			pj.setString(2, p.getProjectname());
			pj.setString(3, p.getObjective());
			pj.setString(4, p.getStartingdate());
			pj.setString(5, p.getEndingdate());
			pj.setString(6, p.getSubmissiondate());
			pj.setString(7, p.getTechnologyused());
			int rows = pj.executeUpdate();
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

    public List<Project> getAllProjects() {
        List<Project> projects = new ArrayList<>();

        Connection conn = null;
        PreparedStatement ps = null;
        ResultSet rs = null;

        try {
            conn = DBHandler.connectToDatabase();
            String query = "SELECT * FROM project";
            ps = conn.prepareStatement(query);
            rs = ps.executeQuery();

            while (rs.next()) {
                int studentid = rs.getInt("studentid");
                String projectname = rs.getString("Projectname");
                String objective = rs.getString("Objective");
                String startingdate = rs.getString("Startingdate");
                String endingdate = rs.getString("Endingdate");
                String submissiondate = rs.getString("Submissiondate");
                String technologyused = rs.getString("Technologyused");

                projects.add(new Project(studentid, projectname, objective, startingdate, endingdate,
                        submissiondate, technologyused));
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

        return projects;
    }
    public void updateProject(Project p) {
        Connection conn = null;
        PreparedStatement ps = null;

        try {
            conn = DBHandler.connectToDatabase();
            String query = "UPDATE project SET Projectname=?, Objective=?, Startingdate=?, Endingdate=?, Submissiondate=?, Technologyused=? WHERE studentid=?";
            ps = conn.prepareStatement(query);

            ps.setString(1, p.getProjectname());
            ps.setString(2, p.getObjective());
            ps.setString(3, p.getStartingdate());
            ps.setString(4, p.getEndingdate());
            ps.setString(5, p.getSubmissiondate());
            ps.setString(6, p.getTechnologyused());
            ps.setInt(7, p.getStudentid());

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

    public void deleteProject(int studentId) {
        Connection conn = null;
        PreparedStatement ps = null;

        try {
            conn = DBHandler.connectToDatabase();
            String query = "DELETE FROM project WHERE studentid=?";
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
}

//int studentid;
//String projectname;
//String objective;
//String startingdate;
//String endingdate;
//String submissiondate;
//String technologyused;