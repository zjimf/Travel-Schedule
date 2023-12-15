import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebase-config";

async function UpdatePostLike(schedule, docID, likes, isLike) {
  await updateDoc(doc(db, "Schedule", docID), {
    likes,
    isLike,
  });

  if (schedule.isPublic) {
    await updateDoc(doc(db, "PublicSchedule", docID), {
      likes,
      isLike,
    });
  }
}

export { UpdatePostLike };
