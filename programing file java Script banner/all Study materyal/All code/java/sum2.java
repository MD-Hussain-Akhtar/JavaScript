import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.*;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JTextField;

public class sum2 extends JFrame  {
       JTextField tf1,tf2,tf3;  
    JButton b1,b2;  
    sum2(){

    tf1=new JTextField();
    tf1.setBounds(10,50,50,20);  
    add(tf1);
    setSize(300, 300);
    setVisible(true);
    setLayout(null);

    }         
   
   public static void main(String[] args) {
     new sum2();
   } 
}
