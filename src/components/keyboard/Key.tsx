import React, { useCallback, useEffect, useState } from 'react';

import { Piano } from '../../models/piano';
import './Key.css';

type KeyProps = {
  keyNote: string;
  isAccidental: boolean;
  piano: Piano;
};

const Key: React.FC<KeyProps> = ({ keyNote, isAccidental, piano }) => {
  const [isKeyPressed, setIsKeyPressed] = useState(false);

  const playNote = useCallback(() => {
    piano.triggerAttack(keyNote);
  }, [keyNote, piano]);

  const releaseNote = useCallback(() => {
    piano.triggerRelease(keyNote);
  }, [keyNote, piano]);

  const playPressedKey = useCallback(
    (isKeyPressed: boolean) => {
      isKeyPressed ? playNote() : releaseNote();
    },
    [playNote, releaseNote]
  );

  useEffect(() => playPressedKey(isKeyPressed), [isKeyPressed, playPressedKey]);

  const handleKeyPress = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    setIsKeyPressed(
      event.type === 'mousedown' ||
        (event.type === 'mouseenter' && event.buttons ? true : false)
    );
  };

  const handleKeyTouch = (event: React.TouchEvent<HTMLButtonElement>) => {
    event.preventDefault();

    setIsKeyPressed(event.type === 'touchstart' || event.type === 'touchmove');
  };

  return (
    <button
      className={`key ${isAccidental ? 'key-accidental' : 'key-natural'} ${
        isKeyPressed
          ? !isAccidental
            ? 'key-natural-pressed'
            : 'key-accidental-pressed'
          : ''
      }`}
      onMouseDown={handleKeyPress}
      onMouseUp={handleKeyPress}
      onMouseEnter={handleKeyPress}
      onMouseOut={handleKeyPress}
      onTouchStart={handleKeyTouch}
      onTouchMove={handleKeyTouch}
      onTouchEnd={handleKeyTouch}
    ></button>
  );
};

export default Key;
