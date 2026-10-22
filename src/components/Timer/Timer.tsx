import { useEffect, useState } from "react";

function Timer() {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    console.log("Mount");
    const intervalId = setInterval(() => {
      console.log(intervalId);
      setTime(new Date());
    }, 1000);

    return () => {
      console.log("Unmount");
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <h2>Your time is exact!</h2>
      <p>{time.toLocaleString()}</p>
    </>
  );
}

export default Timer;
