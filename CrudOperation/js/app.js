import service from "./service.js";

// Empty elements form the html
const table = document.getElementById("main-table");
const updateForm = document.getElementById("update-form");

// Adds event listeners to update and delete button in the row in table
const addEventListenersToTableButtons = () => {
  // get all delete button listeners
  const deleteButtons = document.querySelectorAll("button[id^='Delete']");
  // add event listeners to all buttons
  deleteButtons &&
    deleteButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const id = e.target.parentNode.parentNode.children[0].innerText;
        service
          .deleteUser(id)
          .then((res) => {
            window.alert(
              `User data with id ${id} has been deleted successfully.`
            );
          })
          .catch((e) => console.log(e));
      });
    });

  // update functionality
  const updateExistingUser = () => {
    const existingUser = document.querySelectorAll(
      "button[id^='update-existing-user']"
    );

    existingUser &&
      existingUser.forEach((button) => {
        button.addEventListener("click", (e) => {
          const id = e.target.parentNode.children[0].innerText;
          const firstName = e.target.parentNode.children[1].value;
          const lastName = e.target.parentNode.children[2].value;
          const email = e.target.parentNode.children[3].value;
          const avatar = e.target.parentNode.children[4].value;
          const updatedData = { firstName, lastName, email, avatar };
          service
            .updateUser(id, updatedData)
            .then((res) => {
              window.alert(
                `User with id ${id} has been updated: FirstName: ${res.firstName} LastName: ${res.lastName} Email: ${res.email} Avatar: ${res.avatar}`
              );
            })
            .catch((e) => console.log(e));
        });
      });
  };

  const updateButtons = document.querySelectorAll("button[id^='Update']");
  updateButtons &&
    updateButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const id = e.target.parentNode.parentNode.children[0].innerText;
        const email = e.target.parentNode.parentNode.children[1].innerText;
        const firstName = e.target.parentNode.parentNode.children[2].innerText;
        const lastName = e.target.parentNode.parentNode.children[3].innerText;
        const avatar = e.target.parentNode.parentNode.children[4].innerText;

        const idElement = document.createElement("lable");
        idElement.textContent = `Id: ${id}`;

        const firstNameInput = document.createElement("input");
        firstNameInput.value = firstName;

        const lastNameInput = document.createElement("input");
        lastNameInput.value = lastName;

        const emailInput = document.createElement("input");
        emailInput.value = email;

        const avatarInput = document.createElement("input");
        avatarInput.value = avatar;

        const updateButton = document.createElement("button");
        updateButton.id = "update-existing-user";
        updateButton.className = "w3-button w3-green";
        updateButton.appendChild(document.createTextNode("Update"));

        updateForm.appendChild(idElement);
        updateForm.appendChild(emailInput);
        updateForm.appendChild(firstNameInput);
        updateForm.appendChild(lastNameInput);
        updateForm.appendChild(avatarInput);
        updateForm.appendChild(updateButton);
        updateExistingUser();
      });
    });
};

// add event listeners to pagination buttons
const addListenersToPaginationAndAddButtons = () => {
  const paginationButtons = document.querySelectorAll(
    "button[id^='pagination']"
  );

  paginationButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const page = e.target.innerText;
      getAll(page);
    });
  });

  document.getElementById("add-user").addEventListener("click", (e) => {
    e.preventDefault();
    const email = document.getElementById("user-add-email").value;
    const firstName = document.getElementById("user-add-first-name").value;
    const lastName = document.getElementById("user-add-last-name").value;
    const avatar = document.getElementById("user-add-avatar").value;

    service
      .createUser({ email, firstName, lastName, avatar })
      .then((res) => {
        window.alert(
          `The user with id: ${res.id} First Name: ${res.firstName} Last Name: ${res.lastName} has been created.`
        );
      })
      .catch((e) => console.log(e));
  });
};

// mount a button to it
const genericButton = (buttonName) => {
  return `<button id=${buttonName}>${buttonName}</button>`;
};

// get list of users from service and insert into html DOM
const getAll = async (page) => {
  table.innerHTML = "";
  let users = await service.getUsers(page);
  users.data.forEach((user) => {
    const row = table.insertRow(-1);
    row.insertCell(0).innerHTML = user.id;
    row.insertCell(1).innerHTML = user.first_name;
    row.insertCell(2).innerHTML = user.last_name;
    row.insertCell(3).innerHTML = user.email;
    row.insertCell(4).innerHTML = user.avatar;
    row.insertCell(5).innerHTML = genericButton("Delete");
    row.insertCell(5).innerHTML = genericButton("Update");
  });
  addEventListenersToTableButtons();
};
// initial load of html
window.onload = () => {
  getAll(1);
  addListenersToPaginationAndAddButtons();
};
