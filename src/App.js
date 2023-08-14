import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import Webcam from 'react-webcam';

function App() {
  const [show, setShow] = useState(false);
  const [roomName, setRoomName] = useState('');
  const [initialMount, setInitialMount] = useState(true);
  const [userMedia, setUserMedia] = useState(null)

  const webcamRef = useRef(null);

  useEffect(() => {
    if (initialMount) {
      setInitialMount(false); // Set initial mount to false after the first render
      const requestMediaAccess = async () => {
        try {
          setUserMedia(await navigator.mediaDevices.getUserMedia({ video: true, audio: true }));
          const room = window.prompt('Please Enter the Room Name: ');
          if (room) {
            setShow(true);
            setRoomName(room);
            if (webcamRef.current) {
              webcamRef.current.srcObject = userMedia;
            }
          }
        } catch (error) {
          console.error("Error accessing media devices:", error);
        }
      };

      requestMediaAccess();
    }
  }, [initialMount, userMedia]); // Empty dependency array ensures this effect runs only once

 

  return (
    <div className='container'>
      {show && 
        <div>
          <p>Room Name: {roomName}</p>
          <Webcam audio={false} videoConstraints={{ facingMode: "user" }} ref={webcamRef} />
        </div>
      }
    </div>
  );
  
}

export default App;
