import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase-config";

const GetSchedule = async (uid) => {
  const schedules = [];
  const docID = [];
  const q = await query(collection(db, "Schedule"), where("uid", "==", uid));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    docID.push(doc.id);
    schedules.push(doc.data());
  });
  return { docID, schedules };
};

export { GetSchedule };
