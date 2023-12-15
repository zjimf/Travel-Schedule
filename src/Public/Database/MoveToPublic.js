import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebase-config";

async function MoveToPublic(schedule, docID) {
  schedule.isPublic = true;

  await updateDoc(doc(db, "Schedule", docID), { isPublic: true });
  await updateDoc(doc(db, "PublicSchedule", docID), { isPublic: true });
}

export { MoveToPublic };
