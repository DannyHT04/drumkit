
import { useState } from 'react';
import './App.css';
import Soundbutton from './components/soundbutton';
import clap from "./assets/clap.wav"
import hihat from "./assets/hihat.wav"
import kick from "./assets/kick.wav"
import openhat from "./assets/openhat.wav"
import boom from "./assets/boom.wav"
import ride from "./assets/ride.wav"
import snare from "./assets/snare.wav"
import tom from "./assets/tom.wav"
import tink from "./assets/tink.wav"


export type SoundType = {
  letter: string;
  name: string;
  sound: string;
}

function App() {
  const [musicNotes, setMusicNotes] = useState<SoundType[]>([
    {
      letter: "A",
      name: "clap",
      sound: clap,
    },
    {
      letter: "S",
      name: "HiHat",
      sound: hihat,
    },
    {
      letter: "D",
      name: "Kick",
      sound: kick,
    },
    {
      letter: "F",
      name: "OpenHat",
      sound: openhat,
    },
    {
      letter: "G",
      name: "Boom",
      sound: boom,
    },
    {
      letter: "H",
      name: "Ride",
      sound: ride,
    },
    {
      letter: "J",
      name: "Snare",
      sound: snare,
    },
    {
      letter: "K",
      name: "tom",
      sound: tom,
    },
    {
      letter: "L",
      name: "Tink",
      sound: tink,
    },
  ])
  return (
    <div className='keys'>
      {
        musicNotes.map((music, index) => 
          <Soundbutton key={index} data={music}/>
          )
      }
    </div>
  );
}

export default App;
