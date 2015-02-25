

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.Socket;

import javax.swing.JOptionPane;

/**
 * Trivial client for the date server.
 */
public class DateClientConsole {

    /**
     * Runs the client as an application.  First it displays a dialog
     * box asking for the IP address or hostname of a host running
     * the date server, then connects to it and displays the date that
     * it serves.
     */
	   
    public static void main(String[] args) throws IOException {
    	
    	System.out.println("Enter IP Address of a machine that is\n" +
            "running the date service on port 9090:");
//    	
//        String serverAddress = JOptionPane.showInputDialog(
//            "Enter IP Address of a machine that is\n" +
//            "running the date service on port 9090:");
        //
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
 	   
        String serverAddress= null;
	 
	      //  read the username from the command-line; need to use try/catch with the
	      //  readLine() method
	      try {
	    	  serverAddress = br.readLine();
	      } catch (IOException ioe) {
	         System.out.println("IO error trying to read server address!"+serverAddress );
	         System.exit(1);
	      }
	
        //
	      System.out.println("Connecting To server address!"+serverAddress );
	      
        Socket s = new Socket(serverAddress, 9090);
        BufferedReader input =
            new BufferedReader(new InputStreamReader(s.getInputStream()));
        String answer = input.readLine();
       //JOptionPane.showMessageDialog(null, answer);
        System.out.println("The date is:" + answer);
        System.exit(0);
    }
}