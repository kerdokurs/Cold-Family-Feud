import { initializeApp } from "firebase/app";
import { getFirestore, doc, updateDoc } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCzJHnnypL4aN_cU0EzBePVKGg6j0fDGqA",
  authDomain: "kerdo-me.firebaseapp.com",
  databaseURL: "https://kerdo-me.firebaseio.com",
  projectId: "kerdo-me",
  storageBucket: "kerdo-me.appspot.com",
  messagingSenderId: "1083521061515",
  appId: "1:1083521061515:web:9eb6c93937ee11b7e9ba8e",
  measurementId: "G-WBQNRPLYW1",
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const database = getDatabase(app);

export async function updatePoints(points) {
  const ref = doc(firestore, "rooside_soda/points");
  await updateDoc(ref, {
    ...points,
  });
}
