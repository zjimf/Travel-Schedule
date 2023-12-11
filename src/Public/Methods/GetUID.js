import { getAuth } from "firebase/auth";

function GetUID() {
  const auth = getAuth();
  const user = auth.currentUser;
  if (user !== null) return user.uid;
}

export { GetUID };
