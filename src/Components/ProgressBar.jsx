import React, { useEffect, useState } from 'react'
import '../styles/App.css' ;

const ProgressBar = () => {

        const [progress, setProgress] = useState(0);
        const [running, setRunning] = useState(false);

        useEffect(() => {
            let interval;
            if (running) {
              interval = setInterval(() => {
                setProgress((prevProgress) => {
                  if (prevProgress < 100) {
                    return prevProgress + 1;
                  } else {
                    clearInterval(interval);
                    setRunning(false);
                    return prevProgress;
                  }
                });
              }, 100);
            } else {
              clearInterval(interval);
            }
        
            return () => {
              clearInterval(interval);
            };
          }, [running]);

          const handleStart = () => {
            setRunning(true);
          };
        
          const handleStop = () => {
            setRunning(false);
          };
        
          const handleReset = () => {
            setRunning(false);
            setProgress(0);
          };

  return (
        <>
          <div>
      <div className="progress-container">
            <div className="progress" style={{ width: `${progress}%` }}>
            {progress}%
            </div>
      </div>

      <div className="button-container">
            <button onClick={handleStart} disabled={running}>
            Start
            </button>

            <button onClick={handleStop} disabled={!running}>
            Stop
            </button>

            <button onClick={handleReset} disabled={running}>
            Reset
            </button>
      </div>
    </div>
                  
                   
                  
                   
        </>
  )
}

export default ProgressBar