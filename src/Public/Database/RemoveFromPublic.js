import { doc, setDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../config/firebase-config";

async function RemoveFromPublic(schedule, docID) {
  schedule.isPublic = false;

  await setDoc(doc(db, "Schedule", docID), schedule);
  await deleteDoc(doc(db, "PublicSchedule", docID));
}

export { RemoveFromPublic };
