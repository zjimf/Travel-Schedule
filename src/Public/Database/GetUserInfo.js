import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase-config";

async function GetUserInfo(uid) {
  const docRef = doc(db, "User", uid);
  const docSnap = await getDoc(docRef);

  return docSnap.data();
}

export { GetUserInfo };
