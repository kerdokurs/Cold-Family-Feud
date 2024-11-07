import { database } from "firebase.config";
import { ref, onValue, get } from "firebase/database";
import { useState } from "react";

export default function TeamName(props) {
  const [isPressed, setIsPressed] = useState(false);

  useState(async () => {
    const { team } = props;
    console.log("init pressed for team", team);

    const useSoundRef = ref(database, "rooside_soda/use_sound");
    const useSoundRes = await get(useSoundRef);
    const useSound = useSoundRes.val();

    const pressedRef = ref(database, `rooside_soda/button/pressed/${team}`);
    const unsubscribe = onValue(pressedRef, (snap) => {
      const pressed = snap.val();
      if (pressed && useSound) {
        const audio = new Audio("ding.mp3");
        audio.play();
      }
      setIsPressed(pressed);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div
      className="text-3xl flex flex-col text-center space-y-2"
      style={{
        minWidth: 0,
      }}
    >
      <div
        className={`${!isPressed ? "bg-gradient-to-tr from-primary-900 to-primary-500" : "bg-red-700"}`}
      >
        <p
          className="p-5 uppercase text-white"
          style={{
            fontWeight: 600,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            flex: 1,
            textShadow: "1px 2px 4px black",
          }}
        >
          {props.game.teams[props.team].name}
        </p>
      </div>
      <div className="flex justify-center flex-row text-center space-x-2">
        {Array(props.game.teams[props.team].mistakes).fill(
          <div className="flex-shrink">
            <img src="x.png" />
          </div>,
        )}
      </div>
    </div>
  );
}
