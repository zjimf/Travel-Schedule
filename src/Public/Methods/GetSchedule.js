import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase-config";

const GetSchedule = async (uid) => {
  const schedules = [];
  const q = await query(collection(db, "Schedule"), where("uid", "==", uid));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    schedules.push(doc.data());
  });
  return schedules;
};

export { GetSchedule };
