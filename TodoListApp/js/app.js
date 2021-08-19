// Add Todos
const addTask = () => {
  let task = document.getElementById("txttask").value;
  let startDate = document.getElementById("starttime").value;
  let endDate = document.getElementById("endtime").value;
  if (task === "") {
    alert("Enter Your Task !!! ");
  } else {
    addItemToStorage({ task, startDate, endDate, completed: false });
    updateTaskList();
    addEventListeners();
  }
  document.getElementById("txttask").value = "";
  document.getElementById("starttime").value = "";
  document.getElementById("endtime").value = "";
};

// Create an element
const createListElement = (element, taskListElement) => {
  let li = document.createElement("li");
  li.className = `${element.completed && `w3-green`}`;
  let p = document.createElement("p");
  let p2 = document.createElement("p");

  let deleteButton = document.createElement("button");
  let completeButton = document.createElement("button");

  deleteButton.id = "deleteBtn";
  deleteButton.className = "w3-btn w3-red";
  deleteButton.appendChild(document.createTextNode("Delete"));

  completeButton.id = "completeBtn";
  completeButton.className = `w3-btn w3-green`;
  completeButton.appendChild(document.createTextNode("Complete"));

  p.textContent = `${element.task}`;
  console.log(element);
  p2.textContent = `${
    new Date(element.startDate).getHours() > 12
      ? new Date(element.startDate).getHours() - 12
      : new Date(element.startDate).getHours()
  }:${new Date(element.startDate).getMinutes()} -  ${
    new Date(element.endDate).getHours() > 12
      ? new Date(element.endDate).getHours() - 12
      : new Date(element.endDate).getHours()
  }:${new Date(element.endDate).getMinutes()}`;
  li.appendChild(p);
  li.appendChild(p2);
  li.appendChild(deleteButton);
  taskListElement.appendChild(li);

  const now = new Date();
  if (
    now >= new Date(element.startDate) &&
    now <= new Date(element.endDate) &&
    element.completed === false
  ) {
    li.appendChild(completeButton);
  }
};

const updateTaskList = () => {
  const data =
    getData().sort((a, b) => new Date(a.startDate) - new Date(b.startDate)) ||
    [];
  document.getElementById("tasklist").innerHTML = " ";
  let taskListElement = document.getElementById("tasklist");

  data.forEach((element) => {
    createListElement(element, taskListElement);
  });
};

//search list
const updateListWithFilter = (filter) => {
  const data =
    getData().sort((a, b) => new Date(a.startDate) - new Date(b.startDate)) ||
    [];
  const filteredData = data.filter((item) =>
    item.task.toLowerCase().includes(filter.toLowerCase())
  );
  document.getElementById("tasklist").innerHTML = " ";
  let taskListElement = document.getElementById("tasklist");
  filteredData.forEach((element) => {
    createListElement(element, taskListElement);
  });
};

const filterSearch = () => {
  const searchValue = document.getElementById("search").value;
  updateListWithFilter(searchValue);
};

//Delete all task
const deleteAll = () => {
  if (confirm("Are You Sure !!!")) {
    document.getElementById("tasklist").innerHTML = " ";
    deleteAllTasks();
  } else {
    return false;
  }
};

const addEventListeners = () => {
  // Delete button event listeners
  const deleteButtons = document.querySelectorAll("button[id^='deleteBtn']");

  deleteButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      deleteTaskByName(e.target.parentNode.children[0].innerText);
      updateTaskList();
    });
  });

  // Complete button event listeners
  const completeButtons = document.querySelectorAll(
    "button[id^='completeBtn']"
  );
  completeButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      completeTaskByName(e.target.parentNode.children[0].innerText);
      updateTaskList();
    });
  });
};

window.onload = async function () {
  updateTaskList();
  addEventListeners();
};
