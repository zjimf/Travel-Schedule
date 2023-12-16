import {
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  getDoc,
} from "firebase/firestore";
import { db } from "../../config/firebase-config";
import { GetUID } from "./GetUID";

async function toggleLike(schedule, docID) {
  const uid = await GetUID();

  const scheduleRef = await doc(db, "Schedule", docID);
  const scheduleDoc = await getDoc(scheduleRef);
  const likes = scheduleDoc.data().likes || [];

  if (likes.includes(uid)) {
    await updateDoc(scheduleRef, {
      likes: arrayRemove(uid),
    });
  } else {
    await updateDoc(scheduleRef, {
      likes: arrayUnion(uid),
    });
  }

  //if public have this post
  if (scheduleDoc.data().isPublic) {
    const publicScheduleRef = await doc(db, "PublicSchedule", docID);
    const publicScheduleDoc = await getDoc(publicScheduleRef);
    const publicLikes = publicScheduleDoc.data().likes || [];
    if (publicLikes.includes(uid)) {
      await updateDoc(publicScheduleRef, {
        likes: arrayRemove(uid),
      });
    } else {
      await updateDoc(publicScheduleRef, {
        likes: arrayUnion(uid),
      });
    }
  }
}

export { toggleLike };
