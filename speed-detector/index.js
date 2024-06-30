

const speedDet = () => {
    const prompt = require('prompt-sync')(); // Importing prompt-sync library

    let speed = parseFloat(prompt("Enter the speed of the car: ")); // Parsing input as a floating point number

    if (isNaN(speed) || speed < 0) { // Checking if input is not a number or negative
        console.log("Invalid input. Speed must be a non-negative number.");
        return;
    }

    const limit = 70;

    if (speed <= limit) {
        console.log("Ok");
    } else {
        const totalPointsDemerited = calculateDemeritPoints(speed, limit); // Calculating demerit points
        console.log(`Points: ${totalPointsDemerited}`);

        if (totalPointsDemerited > 12) {
            console.log("Suspend License");
        }
    }
};

const calculateDemeritPoints = (speed, limit) => {
    return Math.floor((speed - limit) / 5);
};

// Example usage:
speedDet();
