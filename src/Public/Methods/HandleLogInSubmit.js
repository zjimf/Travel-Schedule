import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const HandleLogInSubmit = async (event, setError, navigateRef) => {
  event.preventDefault();

  const data = new FormData(event.currentTarget);
  const auth = await getAuth();
  signInWithEmailAndPassword(auth, data.get("email"), data.get("password"))
    .then(async (userCredential) => {
      sessionStorage.setItem("isLogin", true);
      navigateRef.current("/");
    })
    .catch((error) => {
      setError("Account or password is wrong, Please try again！");
    });
};

export { HandleLogInSubmit };
