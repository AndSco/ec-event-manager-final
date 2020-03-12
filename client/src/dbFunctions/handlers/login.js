import axios from "axios";


export const authenticate = async (username, password) => {
  try {
    const response = await axios.post("./api/admin/login", {username, password});
    const isAuthenticated = response.data.managedToLogin;
    return isAuthenticated;
  } catch(err) {
    throw err;
  }
}