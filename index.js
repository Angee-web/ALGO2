// leap year
function isLeapYear(year) {
  if (year % 4 === 0 && year % 100 != 0) {
    return `${year} is a Leap year.`;
  }

  if (year % 4 === 0 && year % 100 != 0 && year % 400 === 0) {
    return `${year} is a Leap year.`;
  } else {
    return `${year} is not a Leap year.`;
  }
}

let year = 2024;

console.log(isLeapYear(year));

// ticket price
function ticketPrice(age) {
  if (age <= 12) {
    return "For Children the ticket price is $10";
  }

  if (age >= 13 && age <= 17) {
    return "For Teenagers ticket price is $15";
  } else {
    return "For Adults ticket price is $20 (Mr Usman you are in this category...Old man😒)";
  }
}

let age = 34;

console.log (ticketPrice(age));

// switch case
function ticketPrice(old) {
    switch (true) {
      case (old <= 12):
        return "For Children the ticket price is $10";
      case (old >= 13 && old <= 17):
        return "For Teenagers ticket price is $15";
      default:
        return "For Adults ticket price is $20 (Mr Usman you are in this category...Extremely Old man😒)";
    }
  }
  
  let old = 34;
  
  console.log(ticketPrice(old));
  


// Weather
function checkWeather(temp, rain){
    
    if(temp >= 32 && temp <= 82 && rain == true) {
        return "Advice: Stay indoors or take an umbrella or raincoat and wear thick clothing ";
    }
    if(temp >= 32 && temp <= 82 && rain !== true) {
        return "Advice: Wear thick clothing ";
    }
    if(temp >= 20 && temp <= 31 && rain !== true) {
        return "Advice: Wear light clothing, it's a lovely day👌";
    }
    if(temp <= 20 && rain == true) {
        return "Advice: Take an umbrella out with you";
    }
    else {
        return "Advice: Have an icebath🧊 at home cos it's super hot";
    }
}

// let temp = 14;
// let rain = false;

console.log(checkWeather(14, true));

function clothingAdvisor() {
    // Prompt the user for temperature input
    let temperature = prompt("What is the current temperature in Celsius?");
    
    // Convert temperature input to a number
    temperature = parseFloat(temperature);
    
    // Check if the input is a valid number
    if (isNaN(temperature)) {
        alert("Invalid temperature input. Please enter a valid number.");
        return;
    }
    
    // Prompt the user for rain status input
    let isRainingStr = prompt("Is it raining? (yes/no)");
    
    // Convert the input to lowercase and trim any extra spaces
    let isRaining = isRainingStr.trim().toLowerCase();
    
    // Validate the rain status input
    if (isRaining !== 'yes' && isRaining !== 'no') {
        alert("Invalid input for rain status. Please enter 'yes' or 'no'.");
        return;
    }
    
    // Provide clothing advice based on temperature and rain status
    let advice = "Based on the current conditions, you should wear: ";
    
    if (temperature < 10) {
        advice += "a heavy winter coat, scarf, and gloves.";
    } else if (temperature < 20) {
        advice += "a sweater or light jacket.";
    } else {
        advice += "light clothing.";
    }
    
    if (isRaining === 'yes') {
        advice += " Don't forget to take an umbrella!";
    }
    
    // Display the advice to the user
    alert(advice);
}

// Call the function to start the program
clothingAdvisor();


// fibonacci
function fibonacci(n) {
    // Base cases
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }
    
    // Recursive case
    return fibonacci(n - 1) + fibonacci(n - 2);
}


let n = 8;  

console.log(`The ${n}th Fibonacci number is: ${fibonacci(n)}`);

// power
function power(base, exponent) {
    // Base cases
    if (exponent === 0) {
        return 1;
    }
    if (exponent === 1) {
        return base;
    }
    
    // Recursive case
    return base * power(base, exponent - 1);
}

// Example usage:
let base = 2;
let exponent = 5;
console.log(`${base} raised to the power of ${exponent} is: ${power(base, exponent)}`);  


