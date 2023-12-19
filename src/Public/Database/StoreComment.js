import { doc, updateDoc, arrayUnion, Timestamp } from "firebase/firestore";
import { db } from "../../config/firebase-config";
import { GetUID } from "./GetUID";
async function StoreComment(comment, userInfo, docID, schedule) {
  const uid = await GetUID();

  const newComment = {
    uid: uid,
    avatar: userInfo.avatar,
    name: userInfo.name,
    comment: comment,
    timeStamp: Timestamp.now(),
  };

  await updateDoc(doc(db, "Schedule", docID), {
    comments: arrayUnion(newComment),
  });
  await updateDoc(doc(db, "PublicSchedule", docID), {
    comments: arrayUnion(newComment),
  });
  return newComment;
}

export { StoreComment };
