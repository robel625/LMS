import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const CountdownTimer = ({ targetDate, onTimerEnd }) => {
  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime(targetDate)); // Call the function here

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newRemainingTime = calculateRemainingTime(targetDate); // Call the function here
      setRemainingTime(newRemainingTime);

      if (newRemainingTime <= 0) {
        clearInterval(intervalId);
        onTimerEnd();
      }
    }, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup function to clear interval on unmount
  }, [targetDate, onTimerEnd]); // Re-run effect when targetDate or onTimerEnd changes

  const calculateRemainingTime = (targetDate) => {
    const now = new Date().getTime();
    const difference = targetDate.getTime() - now;
    return Math.max(difference, 0); // Ensure time doesn't go negative
  };

  const formatTime = (time) => {
    const hours = Math.floor(time / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <View>
      {remainingTime > 0 ? (
        <Text>{formatTime(remainingTime)}</Text>
      ) : (
        <Text>Timer Ended!</Text>
      )}
    </View>
  );
};

export default CountdownTimer;