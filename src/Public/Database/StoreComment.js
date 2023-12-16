import { doc, updateDoc, arrayUnion, Timestamp } from "firebase/firestore";
import { db } from "../../config/firebase-config";

async function StoreComment(comment, userInfo, docID, schedule) {
  const newComment = {
    avatar: userInfo.avatar,
    name: userInfo.name,
    comment: comment,
    timeStamp: Timestamp.now(),
  };

  await updateDoc(doc(db, "Schedule", docID), {
    comments: arrayUnion(newComment),
  });
  return newComment;
}

export { StoreComment };
