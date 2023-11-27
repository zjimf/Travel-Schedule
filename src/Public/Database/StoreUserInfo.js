import { doc, setDoc } from "firebase/firestore";
import { db } from "../../config/firebase-config";

async function StoreUserInfo(uid, name, email) {
  await setDoc(doc(db, "User", uid), {
    name,
    email,
    timeStamp: new Date(),
  });
}

export { StoreUserInfo };
