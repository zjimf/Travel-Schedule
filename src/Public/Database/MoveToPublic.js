import { doc, setDoc } from "firebase/firestore";
import { db } from "../../config/firebase-config";

async function MoveToPublic(schedule, docID) {
  schedule.isPublic = true;

  await setDoc(doc(db, "Schedule", docID), schedule);
  await setDoc(doc(db, "PublicSchedule", docID), schedule);
}

export { MoveToPublic };
