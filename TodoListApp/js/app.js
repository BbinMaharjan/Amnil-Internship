const addTask = () => {
  let txttask = document.getElementById("txttask").value;
  if (txttask === "") {
    alert("Enter Your Task !!! ");
  } else {
    let tasklist = document.getElementById("tasklist");
    let li = document.createElement("li");
    let deleteButton = document.createElement("button");

    deleteButton.className = "deletebtn";
    deleteButton.appendChild(document.createTextNode("Delete"));

    li.textContent = txttask;
    tasklist.appendChild(li);
    li.appendChild(deleteButton);
  }
  document.getElementById("txttask").value = "";
};

//Marked task as completed
let list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (event) {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("done");
    }
  },
  false
);

//Delete selected Task
let button = document.querySelector("ul");
button.addEventListener("click", function (event) {
  let li = event.target.parentNode;
  tasklist.removeChild(li);
});

//Deleting All Task
const deleteAll = () => {
  if (confirm("Are You Sure !!!")) {
    document.getElementById("tasklist").innerHTML = " ";
  } else {
    return false;
  }
};
