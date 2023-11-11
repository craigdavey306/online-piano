import { useEffect, useRef } from 'react';

import Key from './Key';
import { Piano } from '../../models/piano';
import { NoteMap } from '../../helpers/notes';
import { instrumentFactory } from '../../helpers/instrumentFactory';
import './Keyboard.css';

const instrument = instrumentFactory({ instrumentType: 'mono-synth' });

const Keyboard = () => {
  const synth = useRef<Piano | null>(null);

  // Connect ToneJS to the DOM when the keyboard displays.
  useEffect(() => {
    synth.current = instrument.toDestination();
  }, []);

  return (
    <div className="keyboard">
      {Array.from(NoteMap).map(([note, { isAccidental }], index) => {
        return (
          <Key
            key={index}
            keyNote={note}
            isAccidental={isAccidental}
            piano={instrument}
          />
        );
      })}
    </div>
  );
};

export default Keyboard;
