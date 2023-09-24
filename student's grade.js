function calculateGrade() {
    // Prompt the user for input
    let marks = parseFloat(prompt("Enter the student's marks (between 0 and 100):"));

    // Check if the input is a valid number and within the valid range
    if (!isNaN(marks) && marks >= 0 && marks <= 100) {
        // Determine the grade based on the marks
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

        // Display the corresponding grade
        console.log("The student's grade is: " + grade);
    } else {
        // Display an error message for invalid input
        console.log("The input you enterd is invalid the inputs should be between 0 and 100.");
    }
}

// Call the function to calculate the grade
calculateGrade();
