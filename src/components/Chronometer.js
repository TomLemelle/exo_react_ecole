import React, { useState, useRef } from 'react';

const Chronometer = () => {

    const [timer, setTimer] = useState(0),
    [isActive, setIsActive] = useState(false),
    [isPaused, setIsPaused] = useState(false),
    countRef = useRef(null)

    const formatTime = () => {
        const getSeconds = `0${(timer % 60)}`.slice(-2),
        minutes = `${Math.floor(timer / 60)}`,
        getMinutes = `0${minutes % 60}`.slice(-2),
        getHours = `0${Math.floor(timer / 3600)}`.slice(-2)
    
        return `${getHours} : ${getMinutes} : ${getSeconds}`
    }


    const handleStart = () => {
        setIsActive(true)
        setIsPaused(true)
        countRef.current = setInterval(() => {
          setTimer(timer => timer + 1)
        }, 1000)
    }
    
    const handlePause = () => {
        clearInterval(countRef.current)
        setIsPaused(false)
    }
    
    const handleResume = () => {
        setIsPaused(true)
        countRef.current = setInterval(() => {
          setTimer((timer) => timer + 1)
        }, 1000)
    }
    
    const handleReset = () => {
        clearInterval(countRef.current)
        setIsActive(false)
        setIsPaused(false)
        setTimer(0)
    }

    return (
        <div>
          <h3>React Stopwatch</h3>
          <div>
            <p>{formatTime()}</p>
            <div>
              { !isActive && !isPaused 
                ? <button onClick={handleStart}>Lecture</button>
                : ( isPaused ? <button onClick={handlePause}>Pause</button> 
                : <button onClick={handleResume}>Reprendre</button> )
              }
              <button onClick={handleReset} disabled={!isActive}>Réinitialiser</button>
            </div>
          </div>
        </div>
      );
    }
    

export default Chronometer;

// je me suis aidé de ce site pour pouvoir faire le chronomètre avec secondes, minutes et heures, que j'ai modifié pour le rendre plus lisible et rapide : https://dev.to/abdulbasit313/how-to-develop-a-stopwatch-in-react-js-with-custom-hook-561b