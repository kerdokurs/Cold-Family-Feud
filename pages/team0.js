import { useState, useEffect } from "react";
import { onSnapshot, doc } from "firebase/firestore";
import { firestore } from "firebase.config";

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
    <div>
      <p>Team1: {points.team0}</p>
    </div>
  );
}
