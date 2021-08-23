const host = "https://reqres.in/";

const getUsers = async (page) => {
  return new Promise((resolve, reject) => {
    fetch(`${host}api/users?page=${page}`, {
      method: "GET",
    })
      .then((resp) => {
        resolve(resp.json());
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const createUser = async (data) => {
  return new Promise((resolve, reject) => {
    fetch(`${host}api/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((resp) => {
        resolve(resp.json());
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const deleteUser = async (id) => {
  return new Promise((resolve, reject) => {
    fetch(`${host}api/users/${id}`, {
      method: "DELETE",
    })
      .then((resp) => {
        resolve(resp);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const updateUser = async (id, data) => {
  return new Promise((resolve, reject) => {
    fetch(`${host}api/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((resp) => {
        resolve(resp.json());
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default {
  getUsers,
  createUser,
  deleteUser,
  updateUser,
};
