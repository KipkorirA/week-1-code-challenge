## 1. Challenge 1: Student Grade Generator (Toy Problem)

### Overview
This JavaScript function `studentGrade` determines the grade based on a student's marks inputed, categorizing them into letter grades (A, B, C, D, E). 
It ensures the marks are within a valid range (0 to 100) and provides immediate feedback on the student's grade.

### Getting Started
1. **Entry Prompting**
   - Utilizes `prompt-sync` to gather user input for the student's marks.
   - Validates that the input is a valid number within the range of 0 to 100.

2. **Grade Determination**
   - Assigns a letter grade accordingly:
     - 'A' for marks greater than 79
     - 'B' for marks between 60 and 79 (inclusive)
     - 'C' for marks between 50 and 59 (inclusive)
     - 'D' for marks between 40 and 49 (inclusive)
     - 'E' for marks below 40

3. **Output**
   - Displays the calculated grade based on the input marks.

### Usage
- Ensure Node.js is installed on your machine.
- Run the script in a Node.js environment.
- Enter the student's marks when prompted.
- Review the output which includes the student's corresponding grade.

### Example Output
Upon execution with an example input:
```
Enter student marks (Must be between 0 to 100): 85
Student's grade is: A
```
This indicates that a student scoring 85 marks receives an 'A' grade.

### Notes
- Adjust the grade thresholds (`if-else` conditions) as needed based on specific grading criteria.
- This script provides a basic implementation and can be expanded for more nuanced grading systems or integrated into larger applications.

### Author
This script was authored by [Your Name].

### License
This project is licensed under the MIT License - see the LICENSE file for details.

---
Replace `[Your Name]` with your name or organization name in the "Author" section. Customize the details and formatting according to your specific use case and preferences.

## 2. Speed Detector (Toy Problem)

### Challenge 
Write a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

   > For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

### Features
1. **Entry Prompts**
   - Utilizes `prompt-sync` to gather user input for the car's speed.
   - Parses the input as a floating-point number and validates that it is non-negative.

2. **Speed Limit Check**
   - Compares the input speed against a predefined speed limit (70 km/h in this case).
   - Outputs "Ok" if the speed is within the limit.

3. **Demerit Points Calculation**
   - If the speed exceeds the limit, calculates demerit points using a formula (`Math.floor((speed - limit) / 5)`).
   - Displays the calculated demerit points.

4. **License Suspension Check**
   - If the total demerit points exceed 12, recommends suspending the license.

### Usage
- Ensure Node.js is installed on your machine.
- Run the script in a Node.js environment.
- Enter the speed of the car when asked to.
- Review the output which includes either "Ok", the calculated demerit points, and a recommendation of whether to suspend license.

### Example Output
Upon execution with an example input:
```
Enter the speed of the car: 85
Points: 3
```
This indicates that the car was speeding by 15 km/h (85 km/h - 70 km/h), resulting in 3 demerit points.

### Notes
- Adjust the speed limit (`const limit = 70;`) as needed for different scenarios.
- This script provides a basic implementation and can be expanded for more complex scenarios or integrated into larger applications.


## 3. Net Salary Calculator (Toy Problem)

### About
This JavaScript program calculates the net salary of an employee based on their basic salary and benefits. It includes deductions for PAYE (tax), NHIF, Housing Levy, and NSSF as per Kenyan regulations.

### Getting Started
1. **Input Prompting and Validation**
   - Uses `prompt-sync` to gather user input for basic salary and benefits.
   - Validates input to ensure they are numeric values greater than zero.

2. **Deduction Calculations**
   - **PAYE Calculation (`calculatePAYE`)**:
     - Applies progressive tax rates based on predefined income brackets.
   - **NHIF Deduction Calculation (`calculateNHIF`)**:
     - Utilizes predefined NHIF rates to determine the deduction based on the gross salary.
   - **Housing Levy Calculation (`calculateHousingLevy`)**:
     - Computes the Housing Levy deduction at a fixed rate of 1.5% of the gross salary.
   - **NSSF Deduction Calculation (`calculateNSSF`)**:
     - Determines NSSF deductions based on specific contribution tiers and rates.

3. **Main Net Salary Calculation Function**
   - **`netSalaryCalculator`**:
     - Orchestrates the entire calculation process:
       - Prompts for basic salary and benefits.
       - Validates input values.
       - Computes gross salary by adding basic salary and benefits.
       - Calls functions to calculate tax, NHIF, Housing Levy, and NSSF deductions.
       - Calculates total deductions and computes the net salary.
       - Outputs detailed deductions breakdown and the resulting net salary.

4. **Output**
   - Displays the gross salary, individual deductions (PAYE, Housing Levy, NHIF, NSSF), total deductions, and the net salary after deductions.

### How To
To use this program:
- Ensure Node.js is installed on your machine.
- Install `prompt-sync` if not already installed (`npm install prompt-sync`).
- Run the script in a Node.js environment.
- Enter the basic salary and benefits when prompted.
- Review the detailed deductions breakdown and net salary output.

### An example
Upon execution, the program will output something similar to:
```
Input Basic Salary: 50000
Input Benefits: 10000
Gross Salary: 60000.00
---------- Deductions -----------
PAYE (Tax): 12750.00
Housing Levy: 900.00
NHIF Deduction: 750.00
NSSF Deduction: 3600.00
---------- Total Deductions -------
            18100.00
----------------------------------
Net Salary: 41900.00
```

### Author
This script was authored by [Aron Kipkorir].

### License
This project is licensed under the MIT License - see the LICENSE file for details
