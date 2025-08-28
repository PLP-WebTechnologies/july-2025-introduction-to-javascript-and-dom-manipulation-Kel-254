// ======================
// Part 1: Variables & Conditionals
// ======================
let age = 20;
let isStudent = true;

if (age >= 18 && isStudent) {
  console.log("You are an adult student.");
} else if (age >= 18) {
  console.log("You are an adult, but not a student.");
} else {
  console.log("You are under 18.");
}

// ======================
// Part 2: Custom Functions
// ======================

// Function 1: Change background color randomly
function changeBackgroundColor() {
  const colors = ["lightblue", "lightgreen", "lightpink", "lightyellow"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}

// Function 2: Add new item to the list
function addListItem() {
  const list = document.getElementById("list");
  const newItem = document.createElement("li");
  newItem.textContent = `Item ${list.children.length + 1}`;
  list.appendChild(newItem);
}

// ======================
// Part 3: Loop Examples
// ======================

// Example 1: For loop
for (let i = 1; i <= 3; i++) {
  console.log("For loop count:", i);
}

// Example 2: While loop
let count = 1;
while (count <= 3) {
  console.log("While loop count:", count);
  count++;
}

// ======================
// Part 4: DOM Interactions
// ======================

// Interaction 1: Change page title text
document.getElementById("title").textContent = "JS Project Demo";

// Interaction 2: Update a paragraph dynamically
document.getElementById("message").textContent = "This paragraph was updated using JavaScript.";

// Interaction 3: Add event listeners to buttons
document.getElementById("btnChangeColor").addEventListener("click", changeBackgroundColor);
document.getElementById("btnAddItem").addEventListener("click", addListItem);
