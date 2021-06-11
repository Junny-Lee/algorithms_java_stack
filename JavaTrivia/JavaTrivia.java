public class JavaTrivia {

    // pertains to #5
    public void changeMyInt(int someInt){ // copy is made (because primitive)
        someInt = someInt + 1; // someInt is changed in this function scope
    }
    public int changeMyInt2(int someInt){ // copy is made (because primitive)
        someInt = someInt + 1;
        return someInt;
    }
    public int[] changeArr(int[] someArr){
        someArr[1] = 99;
        return someArr;
    }
    public Integer changeMyInteger(Integer someInteger){ // copy is made (because primitive)
        someInteger = someInteger + 1;
        return someInteger;
    }


    // pertains to #6
    public void changeMyArr(String[] someArr) {
        someArr[0] = "foo";
    }

    
}