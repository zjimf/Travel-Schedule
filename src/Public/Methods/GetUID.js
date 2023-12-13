import { getAuth, onAuthStateChanged } from "firebase/auth";

async function GetUID() {
  return new Promise((resolve, reject) => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          const uid = user.uid;
          resolve(uid);
          unsubscribe();
        }
      },
      reject
    );
  });
}

export { GetUID };
