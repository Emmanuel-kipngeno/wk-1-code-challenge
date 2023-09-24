// Define a function to calculate demerit points based on the given speed
function calculateDemeritPoints(speed) {
    // Define constants for speed limit, demerit points per km over limit, and maximum allowed demerit points
    const speedLimit = 70;  // The speed limit in km/h
    const kmPerDemeritPoint = 5;  // Number of km over the limit per demerit point
    const maxDemeritPoints = 12;  // Maximum allowed demerit points before license suspension
    
    // Check if the car's speed is within the speed limit
    if (speed <= speedLimit) {
        console.log("Ok"); // Print "Ok" to the console if within the limit
    } else {
        // Calculate the number of demerit points by finding out how many km/h over the limit
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);

        // Check if the driver has accumulated more demerit points than the maximum allowed
        if (demeritPoints >= maxDemeritPoints) {
            console.log("License suspended"); // Print "License suspended" if too many demerit points
        } else {
            console.log("Points: " + demeritPoints); // Print the number of demerit points accumulated
        }
    }
}

// Prompt the user to enter the car's speed (in km/h)
const carSpeed = parseFloat(prompt("Enter the car's speed (in km/h):"));

// Call the calculateDemeritPoints function with the provided speed as an argument
calculateDemeritPoints(carSpeed);
