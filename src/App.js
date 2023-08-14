import './App.css';
import { useState, useRef, } from 'react';

function App() {

  
  const videoElement = useRef(null);

  useState(() => {
    const alert = window.alert('Please allow this computer to use your camera')
    if(alert){
      if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
        
       const constraints = { video: true, audio: true}

       // Access the user's webcam
       navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
        videoElement = window.getElementById('video')
        
        // set the stream as the video element source
        videoElement.srcObject = stream

        // Play the video
        videoElement.play();

       })
       .catch((e) => console.log('Error accessing the webcam'))

      }

    }
  })
  return (
    <div className='container' >
   <div id="video" ></div>
    </div>
  );
}

export default App;