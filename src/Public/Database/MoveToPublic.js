import { doc, setDoc } from "firebase/firestore";
import { db } from "../../config/firebase-config";
import { v4 as uuidv4 } from "uuid";

async function MoveToPublic(schedules) {
  await setDoc(doc(db, "PublicSchedule", uuidv4()), schedules);
}

export { MoveToPublic };
