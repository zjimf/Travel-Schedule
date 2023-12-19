import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebase-config";

async function DeleteMsg(comment, docID, index, setDeleted) {
  const docRef = doc(db, "Schedule", docID);
  const docSnap = await getDoc(docRef);

  const comments = docSnap.data().comments;

  if (index >= 0 && index < comments.length) {
    comments.splice(index, 1);
  }

  await updateDoc(docRef, { comments });

  const docRefP = doc(db, "PublicSchedule", docID);
  await updateDoc(docRefP, { comments });
  await setDeleted(true);
}

export { DeleteMsg };
