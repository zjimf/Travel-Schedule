import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { db } from "../../config/firebase-config";
import { GetUserInfo } from "./GetUserInfo";

const GetSchedule = async (uid) => {
  const schedules = [];
  const users = [];
  const docID = [];
  const q = await query(collection(db, "Schedule"), where("uid", "==", uid));
  const querySnapshot = await getDocs(q);
  const user = await GetUserInfo(uid);

  querySnapshot.forEach((doc) => {
    docID.push(doc.id);
    schedules.push(doc.data());
    users.push(user);
  });
  return { docID, schedules, user, users };
};

export { GetSchedule };
