import React, { useEffect, useState } from 'react';

const Metronome = () => {

    const [value, setValue] = useState(60);
    const [label, setLabel] = useState("Lecture");
    const [tick, setTick] = useState(0);

    const handleValue = (e) => {
        setValue(e.target.value);
    }
    
    const handleButton = () => {
        label === "Pause" ? setLabel("Lecture") : setLabel("Pause");
    }

    useEffect(() => {
        if(label === "Pause") {
            const interval = setInterval(() => {
                console.log('bpm: ', value);
                console.log('tick: ', tick);
                setTick((previousTick) => previousTick + 1);
            }, 60 / value * 1000)
    
            return () => clearInterval(interval);
        } 
    }, [label, value, tick])
    
    return (
        <div id="metronome">
           <h1>Metronome</h1>
           <input type="range" min="0" max="120" step="1" value={value} onChange={handleValue} />
           <div className="metronome-value">
            {value}
           </div>
           <button className="metronome-button" id="metronome-button" onClick={handleButton}>{label}</button>
        </div>
    );
};

export default Metronome;