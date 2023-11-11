// returns a synthesizer

import { MonoSynth, PolySynth, Synth } from 'tone';

type Instrument = 'mono-synth';

interface InstrumentArgs {
  instrumentType: Instrument;
  volume?: number;
  oscillatorType?: string;
}

export const instrumentFactory = ({
  instrumentType,
  volume = -8,
}: InstrumentArgs) => {
  switch (instrumentType) {
    case 'mono-synth':
      return new PolySynth(MonoSynth, {
        portamento: 0,
        detune: 0,
        volume,
        oscillator: {
          type: 'square1',
        },
      });
    default:
      return new Synth();
  }
};

// synth.current = new Tone.MonoSynth({
//   portamento: 0,
//   detune: 0,
//   volume: -8,
//   oscillator: {
//     type: 'square1',
//   },
// envelope: {
//   attack: 0.1,
//   attackCurve: 'exponential',
//   decay: 0.3,
//   decayCurve: 'exponential',
//   release: 0.8,
//   releaseCurve: 'exponential',
//   sustain: 0.4,
// },
// filter: {
//   Q: 1,
//   detune: 0,
//   frequency: 0,
//   gain: 0,
//   rolloff: -12,
//   type: 'lowpass',
// },
// filterEnvelope: {
//   attack: 0.001,
//   attackCurve: 'linear',
//   baseFrequency: 300,
//   decay: 0.7,
//   decayCurve: 'exponential',
//   exponent: 2,
//   octaves: 4,
//   release: 0.8,
//   releaseCurve: 'exponential',
//   sustain: 0.1,
// },
// }).toDestination();
