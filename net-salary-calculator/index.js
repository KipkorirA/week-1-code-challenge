

// creates a prompt for the basic salary and benefits

const prompt = require('prompt-sync')();

// Function to validate input

const validateInput = (input) => {
    return !isNaN(input) && input > 0;
};

// Function to calculate PAYE

const calculatePAYE = (grossSalary) => {

    if (grossSalary <= 24000) {
        return grossSalary * 0.10;

    } else if (grossSalary <= 32333) {
        return 24000 * 0.10 + (grossSalary - 24000) * 0.25;

    } else if (grossSalary <= 500000) {
        return 24000 * 0.10 + (32333 - 24000) * 0.25 + (grossSalary - 32333) * 0.30;

    } else if (grossSalary <= 800000) {
        return 24000 * 0.10 + (32333 - 24000) * 0.25 + (500000 - 32333) * 0.30 + (grossSalary - 500000) * 0.325;

    } else {
        return 24000 * 0.10 + (32333 - 24000) * 0.25 + (500000 - 32333) * 0.30 + (800000 - 500000) * 0.325 + (grossSalary - 800000) * 0.35;
    }
};

// Function to calculate NHIF deduction
const calculateNHIF = (grossSalary) => {

    const nhifRates = [
        { limit: 5999, deduction: 150 },
        { limit: 7999, deduction: 300 },
        { limit: 11999, deduction: 400 },
        { limit: 14999, deduction: 500 },
        { limit: 19999, deduction: 600 },
        { limit: 24999, deduction: 750 },
        { limit: 29999, deduction: 850 },
        { limit: 34999, deduction: 900 },
        { limit: 39999, deduction: 950 },
        { limit: 44999, deduction: 1000 },
        { limit: 49999, deduction: 1100 },
        { limit: 59999, deduction: 1200 },
        { limit: 69999, deduction: 1300 },
        { limit: 79999, deduction: 1400 },
        { limit: 89999, deduction: 1500 },
        { limit: 99999, deduction: 1600 },
        { limit: Infinity, deduction: 1700 }
    ];

    for (let i = 0; i < nhifRates.length; i++) {

        if (grossSalary <= nhifRates[i].limit) {

            return nhifRates[i].deduction;

        }
    }
};

// Function to calculate Housing Levy deduction

const calculateHousingLevy = (grossSalary) => {

    const HousingLevyDedRate = 0.015;

    return grossSalary * HousingLevyDedRate;

};

// Function to calculate NSSF deduction

const calculateNSSF = (grossSalary) => {

    const tier1Limit = 7000;
    const tier2Limit = 36000;
    const nssfRate = 0.06;

    if (grossSalary <= tier1Limit) {
        return grossSalary * nssfRate;

    } else if (grossSalary <= tier2Limit) {
        return tier1Limit * nssfRate + (grossSalary - tier1Limit) * nssfRate;

    } else {
        return tier1Limit * nssfRate + (tier2Limit - tier1Limit) * nssfRate;
    }
};

// Main function to calculate net salary

const netSalaryCalculator = () => {

    let basicSalary = parseFloat(prompt("Input Basic Salary: "));
    let benefits = parseFloat(prompt("Input Benefits: "));

    if (!validateInput(basicSalary) || !validateInput(benefits)) {

        console.log("All entries should be a number and basic salary should be >= 0");
        
        return;
    }

    const grossSalary = basicSalary + benefits;

    const tax = calculatePAYE(grossSalary);
    const nhif = calculateNHIF(grossSalary);
    const housingLevy = calculateHousingLevy(grossSalary);
    const nssf = calculateNSSF(grossSalary);

    const totalDeductions = tax + nhif + housingLevy + nssf;
    const netSalary = grossSalary - totalDeductions;

    console.log(`Gross Salary: ${grossSalary.toFixed(2)}`);
    console.log(`---------- Deductions -----------`);
    console.log(`PAYE (Tax): ${tax.toFixed(2)}`);
    console.log(`Housing Levy: ${housingLevy.toFixed(2)}`);
    console.log(`NHIF Deduction: ${nhif.toFixed(2)}`);
    console.log(`NSSF Deduction: ${nssf.toFixed(2)}`);
    console.log(`---------- Total Deductions -------`);
    console.log(`            ${totalDeductions.toFixed(2)}`);
    console.log(`----------------------------------`);
    console.log(`Net Salary: ${netSalary.toFixed(2)}`);
};

netSalaryCalculator(); // Call the function to execute
