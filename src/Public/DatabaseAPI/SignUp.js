import axios from "axios";

const SignUp_URL =
  "https://us-central1-polakids-291518.cloudfunctions.net/SignUp";

async function Post_SignUp(User) {
  const response = await axios.post(SignUp_URL, JSON.stringify(User), {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
}

export { Post_SignUp };
