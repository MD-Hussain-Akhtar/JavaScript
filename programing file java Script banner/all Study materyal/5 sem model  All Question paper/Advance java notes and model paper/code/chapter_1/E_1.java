package chapter_1;

import java.awt.*;
class E_1{

    public static void main(String arg[]){
       
  Frame f1=new Frame( );
  f1.setSize(300, 400);
  f1.setVisible(true);
  //layout
  //f1.setLayout(new FlowLayout(FlowLayout.RIGHT));
  // f1.setLayout(new BorderLayout());
  

//   Label l1=new Label("hallo ");
// //f1.add(l1);
//  Button b1,b2,b3,b4;
 
//   b1=new Button("NORTH");
//   b2=new Button("NORTH");
//   b3=new Button("WEST");
//   b4=new Button("SOUTH");
 
//   f1.add(b1,BorderLayout.NORTH);
//   f1.add(b2,BorderLayout.EAST);
//   f1.add(b3,BorderLayout.WEST);
//   f1.add(b4,BorderLayout.SOUTH);
//   f1.add(l1,BorderLayout.CENTER);


  // f1.setLayout(new GridLayout(4,2,2,3));

  f1.setLayout(new CardLayout(20, 30));
  Button b1,b2,b3,b4,b5,b6,b7,b8,b9;
  b1=new Button("button1");
  b2=new Button("button1");
  b3=new Button("button1");
  b4=new Button("button1");
  b5=new Button("button1");
  b6=new Button("button1");
  b7=new Button("button1");
  b8=new Button("button1");
  b9=new Button("button1");
 f1.add(b1);
 f1.add(b2);
 f1.add(b3);
 f1.add(b4);
 f1.add(b5);
 f1.add(b6);
 f1.add(b7);
 f1.add(b8);
 f1.add(b9);
  
    }
}