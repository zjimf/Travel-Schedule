import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../config/firebase-config";

async function RemoveFromPublic(schedule, docID) {
  await updateDoc(doc(db, "Schedule", docID), { isPublic: false });
  await deleteDoc(doc(db, "PublicSchedule", docID));
}

export { RemoveFromPublic };
