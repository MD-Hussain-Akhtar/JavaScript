import java.awt.*;

class EX_1 extends Frame {
  int i;

  EX_1() {

    String a[] = { "ok", "Cancel", "send Massage" };
    Button b1[]=new Button[3];
    for (i = 0; i < a.length; i++) {
       b1[i] = new Button("" + a[i]);
      add(b1[i]);
    }
    setSize(300, 400);
    setVisible(true);
    setLayout(new FlowLayout());

  }

  public static void main(String[] args) {
    new EX_1();
  }
}