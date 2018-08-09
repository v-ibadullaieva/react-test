const API_URL = 'http://localhost:3001/users/';

export const getUsers = () =>
  fetch(
    API_URL,
    {
      method: "GET"
    }
  ).then(res => res.json());

export const createUser = (user) =>
  fetch(
    API_URL,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user)
    }
  ).then(res => res.json());

export const deleteUser = (id) =>
  fetch(
    `${API_URL}${id}`,
    {
      method: "DELETE"
    }
  );
