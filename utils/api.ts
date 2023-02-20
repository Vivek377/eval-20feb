import axios from "axios";

const getUser = async () => {
  try {
    let res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

const getUserTodo = async (id: number) => {
  try {
    let res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}/todos`
    );
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export { getUser, getUserTodo };
