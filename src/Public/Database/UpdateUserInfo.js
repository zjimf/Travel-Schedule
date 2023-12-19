import { doc, updateDoc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase-config";
import { GetUID } from "./GetUID";

async function UpdateUserInfo(avatar, name) {
  const uid = await GetUID();
  await updateDoc(doc(db, "User", uid), { avatar, name });
  return true;
}

export { UpdateUserInfo };
