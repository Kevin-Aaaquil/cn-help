import java.net.*;
import java.io.*;
public class EServer
{
public static void main(String args[])
{
ServerSocket s=null;
String line;
DataInputStream is;
PrintStream ps;
Socket c=null;
try
{
      
s=new ServerSocket(9000); }
catch(IOException e)
{
}
try
{ System.out.println(e); c=s.accept();
is=new DataInputStream(c.getInputStream()); ps=new PrintStream(c.getOutputStream()); while(true)
{
line=is.readLine(); ps.println(line);
}
}
catch(IOException e) { System.out.println(e); }
}
}