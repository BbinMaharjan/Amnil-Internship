// Get data from local storage as array
const getData = () => {
  return JSON.parse(localStorage.getItem("tasks"));
};

// Set new array data in storage
const setData = (data) => {
  localStorage.setItem("tasks", JSON.stringify(data));
};

// Adds item object to array and updates in storage
const addItemToStorage = (item) => {
  let data = getData() || [];
  data.push(item);
  setData(data);
};

// Completes a task by its name
const completeTaskByName = (taskName) => {
  const data = getData() || [];
  const newData = data.map((item) => {
    if (item.task === taskName) {
      return { ...item, completed: true };
    }
    return item;
  });
  setData(newData);
};

// Deletes a task by its name
const deleteTaskByName = (taskName) => {
  const data = getData();
  const newData = data.filter((item) => item.task !== taskName);
  setData(newData);
};

// Delete all task
const deleteAllTasks = () => {
  localStorage.setItem("tasks", JSON.stringify([]));
};
