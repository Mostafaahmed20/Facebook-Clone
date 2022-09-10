import Axios from "axios";

const LoginUser = (email, password) => {
  const Endpoint = window.encodeURI(`http://localhost:9999/user/loginUser`, {
    email,
    password,
  });
  return Axios.post(Endpoint)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};

export default LoginUser;
