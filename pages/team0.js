import { useState, useEffect } from "react";
import { onSnapshot, doc } from "firebase/firestore";
import { firestore } from "firebase.config";
import "tailwindcss/tailwind.css";

export default function Test(props) {
  const [points, setPoints] = useState({});

  useEffect(() => {
    const ref = doc(firestore, "rooside_soda/points");
    const unsubscribe = onSnapshot(ref, (doc) => {
      console.log(doc.data());
      setPoints(doc.data());
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div class="w-full h-screen flex flex-col justify-center text-center bg-gradient-to-tr from-primary-900 to-primary-500">
      <h1 class="text-8xl font-semibold text-white">{points.team0}</h1>
    </div>
  );
}
