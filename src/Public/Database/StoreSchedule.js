import { doc, setDoc } from "firebase/firestore";
import { db } from "../../config/firebase-config";
import { v4 as uuidv4 } from "uuid";

async function StoreSchedule(uid, finalNodes) {
  const data = {
    uid: uid,
    begin: {
      formatted_address: finalNodes[0].formatted_address,
      location: {
        lat: finalNodes[0].geometry.location.lat(),
        lng: finalNodes[0].geometry.location.lng(),
      },
    },
    end: {
      formatted_address: finalNodes[finalNodes.length - 1].formatted_address,
      location: {
        lat: finalNodes[finalNodes.length - 1].geometry.location.lat(),
        lng: finalNodes[finalNodes.length - 1].geometry.location.lng(),
      },
    },
    finalNodes: [],
    timeStamp: new Date(),
    isPublic: false,
  };

  for (let i = 1; i < finalNodes.length - 1; i++)
    data.finalNodes.push(finalNodes[i][0]);

  await setDoc(doc(db, "Schedule", uuidv4()), data);
}

export { StoreSchedule };
