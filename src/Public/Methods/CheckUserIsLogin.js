import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../config/firebase-config";

const CheckUserIsLogin = () => {
  return new Promise((resolve) => {
    onAuthStateChanged(auth, (user) => {
      resolve(user ? true : false);
    });
  });
};

export { CheckUserIsLogin };
