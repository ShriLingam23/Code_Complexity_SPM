/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package lab_05_b;

import java.util.*;
/**
 *
 * @author IT17706438
 */

public class Main {/**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
      int maxSubjects;
      int [] marks;
      int total=0;
      double avg;
      
      Scanner sc=new Scanner(System.in);
      try {
      // 1. Input a value for maxSubjects
      //    from keyboard
            System.out.print("Enter the Number of Subjects :");
            maxSubjects=sc.nextInt();
            if(maxSubjects<0)
                throw new ArithmeticException();
            
            //Assigning size of marks to be no.of maxSubjects
            marks=new int[maxSubjects];
            
      // 2. Using a for loop 
      //    input marks 
            for(int i=0;i<maxSubjects;i++){System.out.print("Enter Marks for Subject "+(i+1)+" :"); marks[i]=sc.nextInt();
            }
      
      // 3. Calculate the avg marks 
for(int i=0;i<maxSubjects;i++){total+=marks[i];
            }
            avg=(double)total/maxSubjects; System.out.println("Average  :" +avg);
      
      }
      
      // 4. Use a try catch block to
      //    prevent the following 
      //    run time errors
      
      //   (a) Input valid integers to the 
      //         inputs
      catch(InputMismatchException e){
          //e.printStackTrace();
          System.out.println(e.getMessage());
          
      }
      
      
      //   (b) ArithmeticException division
      //        by zero
      
      catch(ArithmeticException e){
          System.out.println(e.getMessage());
      }
      //   (c) ArrayIndexOutOfBounds
      //         Exception
      catch(ArrayIndexOutOfBoundsException e){
          System.out.println(e.getMessage());
      }
      
      catch (Exception e) {
        System.out.println(e.getMessage());
      }
      
      finally {
         System.out.println("This code will be gurentied to run");
      }
    
      System.out.println("The end");

  
    }
}
