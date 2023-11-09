// src/App.js
import React from "react";
import "./App.css"; // Import the global styles
import "tailwindcss/tailwind.css"; // Import Tailwind CSS styles

const App = () => {
  const countDownDate = new Date("Dec 31, 2023 00:00:00").getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <div className="text-4xl font-bold mb-4">Your Logo</div>
        <div className="text-2xl mb-8">We're Coming Soon!</div>
        <div className="text-xl">
          {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
          {timeLeft.seconds}s
        </div>
      </div>
    </div>
  );
};

export default App;
