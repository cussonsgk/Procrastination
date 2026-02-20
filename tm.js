
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const form = document.getElementById("taskform");

if (form) {

form.addEventListener("submit", function(e) {

e.preventDefault();

let name = document.getElementById("taskname").value.trim();
let deadline = document.getElementById("deadline").value;
let priority = document.getElementById("priority").value;
let error = document.getElementById("error");

if (name === "" || deadline === "") {
error.textContent = "Please fill all the empty fields";
return;
}

let newtask = {
name,
deadline,
priority
};

tasks.push(newtask);

localStorage.setItem("tasks", JSON.stringify(tasks));

form.reset();
alert("Your task has been saved, don't forget to complete it!!");

});

}

const tasklist = document.getElementById("tasklist");

if (tasklist) {

tasklist.innerHTML = "";

tasks.forEach((task, index) => {

let div = document.createElement("div");
div.className = "taskcard";

div.innerHTML = `
<h3 style="text-align: center;">${task.name.toUpperCase()}</h3>
<p>Priority: ${task.priority}</p>
<p>Deadline: ${task.deadline}</p>
<button onclick="deleteTask(${index})">Delete</button>
`;
tasklist.appendChild(div);

});

}

function deleteTask(index) {

tasks.splice(index, 1);

localStorage.setItem("tasks", JSON.stringify(tasks));

location.reload();

}

const taskcount = document.getElementById("taskcount");

if (taskcount) {
taskcount.textContent = "You currently have " + tasks.length + " tasks saved.";
}
