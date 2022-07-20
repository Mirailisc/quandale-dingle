import React, { useState } from "react"
import audio from './assets/audio.mp3'
import image from './assets/cringe.jpg'
import './App.css'

function App() {
  const [click, setClick] = useState(false)

  const handleAudio = () => {
    const audio_element = new Audio(audio)
    audio_element.play()
  }

  return (
    <div className="App">
      {click ? <div>
        <img src={image} alt="cringe" />
      </div> : <button onClick={() => {
        setClick(true)
        handleAudio()
      }}>Click</button>}
    </div>
  );
}

export default App;
