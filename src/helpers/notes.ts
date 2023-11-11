import { ACCIDENTAL_SYMBOL } from '../constants';

type Octave = 3 | 4;
type NaturalNote = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';
type AccidentalNote<TType> = TType extends Exclude<NaturalNote, 'B' | 'E'>
  ? `${TType}${typeof ACCIDENTAL_SYMBOL}`
  : never;

type MusicalNote<TType> = TType extends Octave
  ? `${NaturalNote | AccidentalNote<NaturalNote>}${TType}`
  : never;

type MusicalNoteData = { isAccidental: boolean };

type MusicalNoteWithOctave = {
  [Note in MusicalNote<Octave> | 'C5']: MusicalNoteData;
};

const notes: MusicalNoteWithOctave = {
  C3: { isAccidental: false },
  'C#3': { isAccidental: true },
  D3: { isAccidental: false },
  'D#3': { isAccidental: true },
  E3: { isAccidental: false },
  F3: { isAccidental: false },
  'F#3': { isAccidental: true },
  G3: { isAccidental: false },
  'G#3': { isAccidental: true },
  A3: { isAccidental: false },
  'A#3': { isAccidental: true },
  B3: { isAccidental: false },
  C4: { isAccidental: false },
  'C#4': { isAccidental: true },
  D4: { isAccidental: false },
  'D#4': { isAccidental: true },
  E4: { isAccidental: false },
  F4: { isAccidental: false },
  'F#4': { isAccidental: true },
  G4: { isAccidental: false },
  'G#4': { isAccidental: true },
  A4: { isAccidental: false },
  'A#4': { isAccidental: true },
  B4: { isAccidental: false },
  C5: { isAccidental: false },
};

export const NoteMap = new Map<string, MusicalNoteData>(Object.entries(notes));
