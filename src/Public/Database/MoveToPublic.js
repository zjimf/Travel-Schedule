import { doc, updateDoc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase-config";

async function MoveToPublic(docID) {
  const docRef = doc(db, "Schedule", docID);
  const docSnap = await getDoc(docRef);
  const schedule = docSnap.data();
  schedule.isPublic = true;

  await updateDoc(doc(db, "Schedule", docID), schedule);
  await setDoc(doc(db, "PublicSchedule", docID), schedule);
}

export { MoveToPublic };
