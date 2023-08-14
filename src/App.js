import './App.css';
import React, { useState, useEffect, useRef } from 'react';


function App() {
  
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const peerConnection = useRef(null);

  const startVideoChat = async () => {
    try {
      const userMedia = await navigator.mediaDevices.getUserMedia({ video : true, audio : true});
      localVideoRef.current.srcObject = userMedia;

      peerConnection.current = new RTCPeerConnection();

      userMedia.getTracks().forEach(track => {
        peerConnection.current.addTrack(track, userMedia);
      });

      peerConnection.current.onicecandidate = event => {
        if(event.candidate){

        }
      };

      peerConnection.current.ontrack  = event => {
        remoteVideoRef.current.srcObject = event.streams[0];
      };

      const offer = await peerConnection.current.createOffer();
      await peerConnection.current.setLocalDescription(offer);


    }
    catch (error) {
      console.log('Error starting the video chat: ', error);
    }
  };

  const handleAnswer = async answer => {
    await peerConnection.current.setRemoteDescription( new RTCSessionDescription)
  };

  const handleICECandidate = candidate => {
    peerConnection.current.addIceCandidate(new RTCIceCandidate(candidate))
  }
 

  return (
    <div className='container'>
      <video ref={localVideoRef} autoPlay muted />
      <video ref={remoteVideoRef} autoPlay />
    <button onClickCapture={startVideoChat} text="Start Chat" />
    </div>
  );
  
}

export default App;
