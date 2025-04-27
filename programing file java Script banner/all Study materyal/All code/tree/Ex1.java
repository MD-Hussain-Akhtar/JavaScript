import javax.awt.*;

import java.awt.BorderLayout;

import javax.swing.JFrame;
import javax.swing.tree.DefaultMutableTreeNode;
class Ex1 extends JFrame{
    Ex1(){
        setLayout(new BorderLayout());
 DefaultMutableTreeNode a=new DefaultMutableTreeNode("c driver");
DefaultMutableTreeNode a1=new DefaultMutableTreeNode("program file");
a.add(a1);
setSize(500, 500);
setVisible(true);

    }
    public static void main(String arg[]){
    Ex1 s1=new Ex1();

    }
}