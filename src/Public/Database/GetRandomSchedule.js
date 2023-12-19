import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { GetUserInfo } from "./GetUserInfo";
import { db } from "../../config/firebase-config";

const GetRandomSchedule = async () => {
  // 擷取 "PublicSchedule" 集合中的所有文件
  const querySnapshot = await getDocs(collection(db, "PublicSchedule"));

  // 將所有文件轉換為數組
  const allSchedules = querySnapshot.docs.map((document) => document.data());

  // 隨機挑選五個日程
  const randomSchedules = getRandomItems(allSchedules, 5);

  // 使用日程中的 uid 來獲取使用者資訊
  const userPromises = randomSchedules.map(async (schedule) => {
    return GetUserInfo(schedule.uid);
  });

  // 等待所有使用者資訊的請求完成
  const users = await Promise.all(userPromises);

  // 取得隨機日程的文件ID
  const docID = querySnapshot.docs
    .filter((doc) =>
      randomSchedules.some((schedule) => schedule.uid === doc.data().uid)
    )
    .map((doc) => doc.id);

  return { schedules: randomSchedules, users, docID };
};

// 函數來隨機挑選指定數量的項目
function getRandomItems(array, count) {
  const shuffled = array.slice();
  let i = array.length;
  const min = i - count;
  let temp, index;

  while (i-- > min) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
  }

  return shuffled.slice(min);
}

export { GetRandomSchedule };
