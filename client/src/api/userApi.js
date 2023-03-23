import { toast } from "react-toastify";

const fetchUser = async () => {
  const response = await fetch("http://localhost:3500/user");
  if (!response) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const addUser = async (user) => {
  const id = user._id;

  // Check if the property_num already exists
  const existingItem = await fetchUser(id);
  if (existingItem) {
    toast.error("Duplicate user ID");
  }

  const response = await fetch("http://localhost:3500/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
};

const updateUserLoginTime = async (_id) => {
  const loginTime = new Date();
  const loginStatus = loginTime.toLocaleString();
  console.log(loginStatus);
  const userResponse = await fetch(`http://localhost:3500/user/${_id}`);
  if (!userResponse.ok) {
    console.log(userResponse);
    throw new Error("Network response was not ok");
  }
  const user = await userResponse.json();
  const updatedUser = { ...user, last_login_time: loginStatus };
  const response = await fetch(`http://localhost:3500/user/${_id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedUser),
  });
  if (!response.ok) {
    console.log(response);
    throw new Error("Network response was not ok");
  }
};

export { fetchUser, addUser, updateUserLoginTime };
