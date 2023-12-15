import {
  collection,
  query,
  orderBy,
  limit,
  startAt,
  getDocs,
} from "firebase/firestore";
import { GetUserInfo } from "./GetUserInfo";

import { db } from "../../config/firebase-config";

const GetRandomSchedule = async () => {
  const querySnapshot = await getDocs(collection(db, "PublicSchedule"));
  const totalDocs = querySnapshot.size;
  const randomStart = Math.floor(Math.random() * (totalDocs - 5));

  const q = query(
    collection(db, "PublicSchedule"),
    orderBy("timeStamp"),
    startAt(randomStart),
    limit(5)
  );
  const querySnapshotRandom = await getDocs(q);

  const userPromises = querySnapshotRandom.docs.map(async (document) => {
    return GetUserInfo(document.data().uid);
  });
  const users = await Promise.all(userPromises);

  const schedules = querySnapshotRandom.docs.map((document) => document.data());
  const docID = querySnapshotRandom.docs.map((document) => document.id);

  return { schedules, users, docID };
};

export { GetRandomSchedule };
