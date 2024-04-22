import { useState, useEffect } from "react";

export default function QuestionProgress({ timeout, onTimeout }) {
  const [remainingtime, setRemainingtime] = useState(timeout);

  useEffect(() => {
    console.log("TIMER STARTED");
    const timer = setTimeout(onTimeout, timeout);

    return () => {
      console.log("TIMER CLEARED");
      clearTimeout(timer);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    console.log("INTERVAL STARTED");
    const interval = setInterval(() => {
      setRemainingtime((prevRemainingtime) => prevRemainingtime - 100);
    }, 100);

    return () => {
      console.log("INTERVAL CLEARED");
      clearInterval(interval);
    };
  }, []);

  return <progress max={timeout} value={remainingtime} />;
}
