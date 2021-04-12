import React, { useEffect, useState } from 'react';

const Metronome = () => {

    const [value, setValue] = useState(0);
    const [button, setButton] = useState("Lecture");

    const handleValue = (e) => {
        setValue(e.target.value);
    }
    
    const handleButton = () => {
        button === "Pause" ? setButton("Lecture") : setButton("Pause");
    }

    useEffect(() => {
        if(button === "Pause") {
            const interval = setInterval(() => {
                console.log('bpm: ', value);
                document.getElementById('metronome').classList.toggle('metronome');
            }, 60 / value * 1000)
    
            return () => clearInterval(interval);
        } else {
            document.getElementById('metronome').classList.remove('metronome');
        }
        
    }, [button, value])
    
    return (
        <div id="metronome">
           <h1>Metronome</h1>
           <input type="range" min="0" max="120" step="1" value={value} onChange={handleValue} />
           <div className="metronome-value">
            {value}
           </div>
           <button className="metronome-button" id="metronome-button" onClick={handleButton}>{button}</button>
        </div>
    );
};

export default Metronome;