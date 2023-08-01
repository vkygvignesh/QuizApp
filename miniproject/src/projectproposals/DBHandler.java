package projectproposals;

import java.sql.Connection;
import java.sql.DriverManager;

public class DBHandler {
    static Connection con = null;
    
    public static Connection connectToDatabase()
    {
    	String url = "jdbc:mysql://localhost:3306/Miniproject?useSSL=false";
        String username = "root";
        String password = "V1i2g3@_";

        try
        {
            Class.forName("com.mysql.jdbc.Driver");
            con = DriverManager.getConnection(url, username, password);
        } 
        catch (Exception ex) 
        {
            ex.printStackTrace();
        }
        return con;
    }
}
