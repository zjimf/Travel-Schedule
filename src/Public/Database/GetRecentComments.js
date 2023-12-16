import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase-config";

async function GetRecentComments(docID) {
  const docRef = doc(db, "Schedule", docID);
  const docSnap = await getDoc(docRef);

  const allComments = docSnap.data().comments;
  const sortedComments = allComments.sort(
    (a, b) => b.timeStamp.seconds - a.timeStamp.seconds
  );

  const recentThreeComments = sortedComments.slice(0, 3);

  return recentThreeComments;
}

export { GetRecentComments };
