import {
  getDocs,
  collection,
  query,
  where,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../config/firebase-config";
import { GetUID } from "./GetUID";

async function DeleteAccount() {
  const uid = await GetUID();

  const qPS = query(collection(db, "PublicSchedule"), where("uid", "==", uid));
  const qS = query(collection(db, "Schedule"), where("uid", "==", uid));

  const querySnapshotPS = await getDocs(qPS);
  const querySnapshotS = await getDocs(qS);

  const deletePromises = [];
  if (querySnapshotPS) {
    querySnapshotPS.forEach((doc) => {
      deletePromises.push(
        deleteDoc(doc.ref)
          .then(() => {
            console.log("Public文件刪除成功");
          })
          .catch((error) => {
            console.error("刪除Public文件時出錯：", error);
          })
      );
    });
  }
  if (querySnapshotS) {
    querySnapshotS.forEach((doc) => {
      deletePromises.push(
        deleteDoc(doc.ref)
          .then(() => {
            console.log("文件刪除成功");
          })
          .catch((error) => {
            console.error("刪除文件時出錯：", error);
          })
      );
    });
  }

  deletePromises.push(
    deleteDoc(doc(db, "User", uid))
      .then(() => {
        console.log("User 文檔刪除成功");
      })
      .catch((error) => {
        console.error("刪除 User 文檔時出錯：", error);
      })
  );

  try {
    await Promise.all(deletePromises);
    console.log("所有文檔刪除成功");
    return true;
  } catch (error) {
    console.error("刪除所有文檔時出錯：", error);
    return false;
  }
}

export { DeleteAccount };
