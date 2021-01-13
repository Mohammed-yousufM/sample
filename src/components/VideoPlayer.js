import React, { useRef, useEffect, useState } from "react";

function VideoPlayer() {
  // const [textVal, setTextVal] = useState("");
  // const [consoleVal, setConsoleVal] = useState("");

  let textVal = "";
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);

  const pc_config = null;
  const constraints = { video: true }; //audio: true,
  const rtcPeerObject = new RTCPeerConnection(pc_config);

  useEffect(() => {
    rtcPeerObject.onicecandidate = (e) => {
      if (e.candidate) {
        console.log(JSON.stringify(e.candidate));
      }
    };

    rtcPeerObject.oniceconnectionstatechange = (e) => {
      console.log(e);
    };

    rtcPeerObject.ontrack = async (e) => {
      remoteVideoRef.current.srcObject = await e.streams[0];
      console.log(e.streams, "peer object on track");
    };

    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((stream) => {
        localVideoRef.current.srcObject = stream;
        console.log(stream);
        console.log(stream.getVideoTracks());
        rtcPeerObject.addTrack(stream.getVideoTracks()[0]);
      })
      .catch((err) => console.log(err, "error found"));

    // const success = (stream) => {
    //   localVideoRef.current.srcObject = stream;
    //   rtcPeerObject.addTrack(stream);
    // };
    //     const failure = (err) => console.log(err, "error found");
  }, []);

  const createOffer = () => {
    console.log("offer");
    rtcPeerObject.createOffer().then(
      (sdp) => {
        console.log(JSON.stringify(sdp));
        // setConsoleVal(JSON.stringify(sdp));
        rtcPeerObject.setLocalDescription(sdp);
      },
      (e) => {}
    );
  };

  const setRemoteDescription = () => {
    const desc = JSON.parse(textVal);

    rtcPeerObject.setRemoteDescription(new RTCSessionDescription(desc));
  };

  const createAnswer = () => {
    console.log("Answer");
    rtcPeerObject.createAnswer().then(
      (sdp) => {
        console.log(JSON.stringify(sdp));
        // setConsoleVal(JSON.stringify(sdp));
        rtcPeerObject.setLocalDescription(sdp);
      },
      (e) => {}
    );
  };

  const addCandidate = () => {
    const candidate = JSON.parse(textVal);
    rtcPeerObject.addIceCandidate(new RTCIceCandidate(candidate));
  };

  return (
    <div>
      {console.log("executing..render..")}
      <video
        ref={localVideoRef}
        autoPlay
        style={styles.localVideoPlayer}
      ></video>
      <video
        ref={remoteVideoRef}
        autoPlay
        style={styles.remoteVideoPlayer}
      ></video>

      <br />
      <button onClick={createOffer}>Offer</button>
      <button onClick={createAnswer}>Answer</button>
      <br />
      <textarea onChange={(e) => (textVal = e.target.value)} />
      <button onClick={setRemoteDescription}>Set Remote Desc</button>
      <button onClick={addCandidate}>Add candidate</button>
      <br />
      {/* <p>{consoleVal}</p> */}
    </div>
  );
}

const styles = {
  localVideoPlayer: {
    width: 250,
    height: 250,
    backgroundColor: "black",
  },

  remoteVideoPlayer: {
    width: 350,
    height: 350,
    backgroundColor: "yellow",
  },
};

export default VideoPlayer;
