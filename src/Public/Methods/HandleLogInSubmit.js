import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const HandleLogInSubmit = async (event, setError, navigateRef) => {
  event.preventDefault();

  const data = new FormData(event.currentTarget);
  const auth = await getAuth();
  signInWithEmailAndPassword(auth, data.get("email"), data.get("password"))
    .then(async (userCredential) => {
      const user = userCredential.user;
      if (user.emailVerified) {
        sessionStorage.setItem("isLogin", true);
        navigateRef.current("/");
      } else {
        setError("請驗證您的電子郵件地址以登錄。");
      }
    })
    .catch((error) => {
      setError("帳號或密碼錯誤！請重新再試");
    });
};

export { HandleLogInSubmit };
