// Define the resume JSON object
var resume = {
  name: "Hariharan",
  father_name: "Ramesh",
  mother_name: "Chandrakala",
  address: "No.56, Bajanai Kovil Street, Sembakkam, Chennai - 73",
  skills: ["HTML", "CSS", "JavaScript", "React.js"],
  education: "B.Sc Computer Science",
};

// Using regular for loop
console.log("Using regular for loop:");
for (var key in resume) {
  console.log(key + ": " + resume[key]);
}

// Using for...in loop
console.log("\nUsing for...in loop:");
for (var key in resume) {
  if (resume.hasOwnProperty(key)) {
    console.log(key + ": " + resume[key]);
  }
}

// Using for...of loop for array elements
console.log("Using for...of loop:");
for (var skill of resume.skills) {
  console.log(skill);
}

// Using forEach loop for array elements
console.log("Using forEach loop:");
resume.skills.forEach(function (skill) {
  console.log(skill);
});
