

const studentGrade = () => {
    const prompt = require('prompt-sync')(); // Importing prompt-sync library

    let marks = parseInt(prompt("Enter student marks (Must be between 0 to 100): "));

    if (isNaN(marks) || marks < 0 || marks > 100) {
        console.log("Marks must be in the range of 0 to 100!");
        return;
    }

    let grade;

    if (marks > 79) {
        grade = 'A';
    } else if (marks >= 60) {
        grade = 'B';
    } else if (marks >= 50) {
        grade = 'C';
    } else if (marks >= 40) {
        grade = 'D';
    } else {
        grade = 'E';
    }

    console.log(`Student's grade is: ${grade}`);
};

// Example usage:
studentGrade();
