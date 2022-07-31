import "./Drumpad.css";
import Sounds from "../assets/sounds";
import { useState, useEffect } from 'react';

const rows = 12;
const notes = 12;
const speedms = 300;

const songMatrix = Array.from({ length: rows }, (e) =>
   Array(notes).fill(false)
);

const Drumpad = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeRow, setActiveRow] = useState(0);
  const [selectedNotes, setSelectedNotes] = useState(songMatrix);

  useEffect(() => {
    let interval = null;
    
    if (isPlaying) {
      playBeat(activeRow)

      interval = setInterval(() => {
        setActiveRow((activeRow) => {
          playBeat(activeRow < 11 ? activeRow + 1 : 0);
          return activeRow < 11 ? activeRow + 1 : 0 
        });

      }, speedms)
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval) 
    }
  }, [isPlaying]);


  const handlePlayStart = () => {
    if (isPlaying) {
      setActiveRow(0);
    }

    setIsPlaying(!isPlaying);
  }

  const playBeat = (row) => {
    for (const [index, sound] of Sounds.entries()) {
      if (selectedNotes[row][index]) {
        sound.pause()
        sound.currentTime = 0;
        sound.play()
      }
    }
  };

  const setActive = (row, note, event) => {
    event.currentTarget.classList.toggle("active");

    let _selectedNotes = [ ...selectedNotes ];
    _selectedNotes[row][note] = !_selectedNotes[row][note];

    setSelectedNotes(_selectedNotes);

    if (Sounds[note].paused && _selectedNotes[row][note]) {
      Sounds[note].play();
    } else if (_selectedNotes[row][note]) {
      Sounds[note].currentTime = 0;
    }

  };

  return (
    <>
      <button onClick={handlePlayStart} >	▶️</button>
        <div className="drumpad">
      {songMatrix.map((row, rowIndex) => {
        return (
          <div className={[ isPlaying && (activeRow === rowIndex) ? "active" : "", "drumpad-row" ].join(" ")} key={rowIndex}>
            {row.map((note, noteIndex) => (
              <div
                className="drumpad-cell"
                onClick={(event) => setActive(rowIndex, noteIndex, event)}
              ></div>
            ))}
          </div>
        );
      })}
    </div>
    </>
  );
};

export default Drumpad;
