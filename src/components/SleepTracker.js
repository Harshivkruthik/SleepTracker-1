import React, { useState } from 'react';

const SleepTracker = () => {
  const [sleepRecords, setSleepRecords] = useState([]);
  const [newSleepDuration, setNewSleepDuration] = useState('');
  const [averageSleepDuration, setAverageSleepDuration] = useState(0);

  const addSleepRecord = () => {
    const duration = parseFloat(newSleepDuration);
    if (!isNaN(duration) && duration > 0) {
      const updatedRecords = [...sleepRecords, duration];
      setSleepRecords(updatedRecords);
      calculateAverageSleep(updatedRecords);
      setNewSleepDuration('');
    }
  };

  const calculateAverageSleep = (records) => {
    const totalSleep = records.reduce((acc, duration) => acc + duration, 0);
    const average = totalSleep / records.length;
    setAverageSleepDuration(average.toFixed(2));
  };

  return (
    <div>
      <h1>Sleep Tracker</h1>
      <div>
        <input
          type="text"
          placeholder="Enter sleep duration (in hours)"
          value={newSleepDuration}
          onChange={(e) => setNewSleepDuration(e.target.value)}
        />
        <button onClick={addSleepRecord}>Add Sleep</button>
      </div>
      <div>
        <h2>Sleep Records:</h2>
        {sleepRecords.length === 0 ? (
          <p>No sleep records found.</p>
        ) : (
          <ul>
            {sleepRecords.map((duration, index) => (
              <li key={index}>{duration} hours</li>
            ))}
          </ul>
        )}
        <p>Average Sleep Duration: {averageSleepDuration} hours</p>
      </div>
    </div>
  );
};

export default SleepTracker;