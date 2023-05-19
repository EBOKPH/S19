let username, password, role;


function login() {

  username = prompt("Enter your username:");
  password = prompt("Enter your password:");
  role = prompt("Enter your role (admin, teacher, or student):");

  if (username === "" || username === null || password === "" || password === null || role === "" || role === null) {
    alert("Please fill in all fields.");
  } else {
    switch (role) {
      case "admin":
        alert("Welcome back to the class portal, admin!");
        break;
      case "teacher":
        alert("Thank you for logging in, teacher!");
        break;
      case "student":
        alert("Welcome to the class portal, student!");
        break;
      default:
        alert("Role out of range.");
        break;
    }
  }
}

function calculateAverage() {
  let num1 = Number(prompt("Enter the first number:"));
  let num2 = Number(prompt("Enter the second number:"));
  let num3 = Number(prompt("Enter the third number:"));
  let num4 = Number(prompt("Enter the fourth number:"));
  let average = Math.round((num1 + num2 + num3 + num4) / 4);

  console.log(`Hello, student, your average is ${average}.`);

  if (average <= 74) {
    console.log(`The letter equivalent is F`);
  } else if (average >= 85 && average <= 89) {
    console.log(`The letter equivalent is B`);
  } else if (average >= 90 && average <= 95) {
    console.log(`The letter equivalent is A`);
  } else if (average > 96) {
    console.log(`The letter equivalent is A+`);
  }
}
