import { useEffect } from "react";

export default function Timer({ dispatch, secondRemaining }) {
  const min = Math.ceil(secondRemaining / 60);
  const sec = secondRemaining % 60;

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000); //1000 milliseconds = 1 second;

    return () => clearInterval(intervalId);
  }, [dispatch]);

  // function () {
  //   setInterval(function() {
  //     dispatch({ type: "tick" });
  //   }, 1000);
  // },
  // [dispatch]

  //cleanup function

  return (
    <div className="timer">
      {min < 10 ? 0 : ""}
      {min}:{sec < 10 ? 0 : ""}
      {sec}
    </div>
  );
}
