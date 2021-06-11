// pertains to Q8
public class Rectangle {

    public int width = 1;
    public int height = 1;
    final int perimeter = 4;
    final int area = 1;

    public Rectangle(int width, int height) {
        this.height = height;
        this.width = width;
        perimeter = width * 2 + height * 2; // errors here. can't assign a value to a final variable
        area = width * height;
    }
}