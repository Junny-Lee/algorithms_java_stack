// Possible Java interview questions

import java.util.ArrayList;
import java.util.Arrays;

public class JavaTriviaTest {
    public static void main (String[] args) {

        // Q1:
        // String is an object, so copy of the reference is passed (not the object itself)
        String stringOne = "Hello";
        String stringTwo = stringOne; // String is an object
        stringTwo += " goodbye";
        System.out.println(stringOne); // Hello
        System.out.println(stringTwo); // Hello goodbye


        // Q2: skip


        // Q3: 
        int i = 0;
        ++i; // 1
        i += 1; // 2
        i *= 2; // 4
        i++; // 5
        i += 1; // 6


        // Q4:
        ArrayList<String> toDoList = new ArrayList<String>();
        toDoList.add("Do laundry");
        toDoList.add("Get milk");
        System.out.println(toDoList); // [Do laundry, Get milk]


        // Q5: this Q pertains to scope of variables & their functions 
        JavaTrivia jt = new JavaTrivia();
        int myInt = 1; // global scope of this class 
        jt.changeMyInt(myInt); // pass in myInt (makes copy because int is a primitive)
        System.out.println(myInt); // 1

        System.out.println(jt.changeMyInt2(1)); // 2
        System.out.println(myInt); // 1

        System.out.println("**********");

        int[] arrInt = {1,1,1,1};
        int[] functionArr = jt.changeArr(arrInt); // import Arrays
        System.out.println(Arrays.toString(functionArr));
        System.out.println(Arrays.toString(arrInt));

        System.out.println("**********");

        Integer myInteger = 100; // global scope of this class  // same thing as int even though Integer is a class wrapper. It is still not an OBJECT or Arrays (not a complex data type)
        jt.changeMyInteger(myInteger); // pass in myInt (makes copy because int is a primitive)
        System.out.println(myInteger); // 100

        System.out.println(jt.changeMyInteger(myInteger)); // 101
        System.out.println(myInteger); // 100

        System.out.println("**********");

        // Objects ==> come from classes 
        // Objects & Arrays == passed by reference
        // String, boolean, int, Integer, floats, doubles == passed by value 


        // Q6: String[] are arrays, so they are passed by reference
        JavaTrivia jt2 = new JavaTrivia();
        String[] arr = new String[1];
        System.out.println(arr[0]); // null
        jt2.changeMyArr(arr);
        System.out.println(arr[0]); // foo

        // Q7:
        int[] numbers = {1,2,3,4};
        for (int value : numbers){
            value += 3;
        }
        System.out.println(Arrays.toString(numbers));

        // moving on to OOP stuff
        // Q8:
        Rectangle r = new Rectangle(10,20);
        r.perimeter();
        r.area();

        // Q9:
        

        // Q10:
        

        // Q11:
        

        // Q12:

    }
}

// // 5
// int is primitive type 
// function doesn't return anything (void), so the variable dies
// after it's scope

// // 6 
// arrays are passed by reference, so the void function is changing it 

// // 9
// String is a class (error: cannot find symbol string)

// // 10 
// not valid syntax
// in is python 

// // 12
// each character in JAVA gets translated to unicode values

// // 14 
// method signatures can be different, but in this particular case, doesn't work because main
